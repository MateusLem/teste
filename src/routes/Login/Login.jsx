import React, { useRef, useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { SecLogin } from './styleLogon'; // Assuming styleLogon is available for styling

const Login = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const dataAtual = new Date().toISOString();
  
  // Estado para armazenar informações do usuário Google
  const [googleUser, setGoogleUser] = useState({
    id: '',
    usuario: '',
    email: '',
    senha: '',
    points: 0,
    createTime: dataAtual
  });

  // Função para validar credenciais manuais
  function validar() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
    return false;
  }

  // Função para salvar o usuário no json-server
  const salvarUsuarioNoJsonServer = async (novoUsuario) => {
    try {
      const response = await fetch("http://localhost:5000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar o usuário no servidor");
      }

      console.log("Usuário salvo com sucesso no json-server:", novoUsuario);
    } catch (error) {
      console.error("Erro ao salvar no json-server:", error);
    }
  };

  // Função chamada quando o login manual é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
      localStorage.setItem("usuario", usuario.current.value);
      localStorage.setItem("senha", token);
      navigate("/perfil");
    } else {
      setAlertMessage("Usuário/senha inválidos");
    }
  };

  // Função que será chamada quando o login com Google for bem-sucedido
  const handleLoginSuccess = async (response) => {
    const userObject = jwtDecode(response.credential);
    console.log('User:', userObject);

    // Verificar se o usuário já existe no sistema
    const usuarioExistente = usuarios.find(u => u.usuario === userObject.name);
    if (usuarioExistente) {
      localStorage.setItem("usuario", userObject.name);
      localStorage.setItem("id", userObject.sub);
      navigate("/perfil");
    } else {
      // Caso o usuário não exista, criar um novo
      const novoUsuario = {
        id: id || userObject.sub,
        usuario: userObject.name,
        email: userObject.email,
        senha: '',
        points: googleUser.points || 0,
        createTime: dataAtual
      };
      
      setGoogleUser(novoUsuario);
      await salvarUsuarioNoJsonServer(novoUsuario);
      navigate("/perfil");
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login falhou:', error);
  };

  useEffect(() => {
    fetch("http://localhost:5000/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error("Erro ao carregar usuários:", error));
  }, []);

  return (
    <SecLogin style={{alignContent:'center', textAlign:'center'}}>
      <section className="container">
        <div className="container-login">
          <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="titulo-login">FAÇA SEU LOGIN</span>
              
              <div className="w-input">
                <input
                  type="text"
                  className="input-form"
                  id="usuario"
                  ref={usuario}
                  placeholder="Usuário"
                />
              </div>

              <div className="w-input">
                <input
                  type="password"
                  className="input-form"
                  id="senha"
                  ref={senha}
                  placeholder="Senha"
                />
              </div>

              {alertMessage && (
                <div style={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>
                  {alertMessage}
                </div>
              )}

              <div className="login-btn">
                <button type="submit" className="login-form-btn">Login</button>
              </div>
              <GoogleOAuthProvider clientId="487635748207-o1g7dm9rts3hm478k7k7u1suaootkgcq.apps.googleusercontent.com">
                <div className="App">
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    useOneTap
                  />
                </div>
              </GoogleOAuthProvider>
              <ul className="uteis">
                <li>
                  <span className="texto1">Não possui Conta?</span>
                  <Link to="/cadastro">Criar</Link>
                </li>
              </ul>
            
            </form>
          </div>
        </div>
      </section>
    </SecLogin>
  );
};

export default Login;
