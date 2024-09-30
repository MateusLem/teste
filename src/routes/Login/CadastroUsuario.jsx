import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"
import { SecCad } from "./styleLogon"

const CadUsuarios =()=>{

    //Hook- useParams- serve para receber da rota ou gerar o codigo
    let {id} =useParams();

    //Hook - useState - Manipula o estado da variavel
     const [usuarios,setUsuarios]= useState({
        id,
        usuario:'',
        senha:''
     });


    //Hook- useNavigate- Redireciona para outro componente
    const navigate = useNavigate();


    //criando a função handleChange
     // spred(...) -pega o valor novo e junta com os valores ja cadastrados dentro de um array ou objeto
     //evento target - captura o que foi digitado em um campo input
     const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
     }

     //criando a variavel metodo para criar e alterar

     let metodo = "post";
     if(id){
        metodo = 'put'
     }

     function validar() {
        return usuarios.usuario.trim() !== "" && usuarios.senha.trim() !== "";
      }
    
         

     //criando a função handleSubmit

     const handleSubmit=(e)=>{
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();
        if(validar()){
            fetch(`http://localhost:5000/usuarios/${id ? id :''}`,{
                method:metodo,
                headers: {
                    'Content-type':'application/json',
                },
                //prepara para receber os dados em json
                body:JSON.stringify(usuarios),
                //então se estiver tudo certo ele direciona para o componente que deseja
            }).then(()=>{
                navigate("/login")
            })
        } else{
            alert("usuario/senha inválidos")
        }
    }
     //Hook- useEffect - realiza o efeito colateral ele carrega os usuarios cadastrados

     useEffect(()=>{
        if(id){
            fetch(`http://localhost:5000/usuarios/${id}`)
            .then((resp)=>{
                return resp.json();
            })
            .then((data)=>{
                setUsuarios(data);
            })
        }
        //retorna um array vazio
     },[])

    return (
        <SecCad>
        <section className="usuario">
            <h1>SEJA BEM-VINDO</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="usuario"
                    value={usuarios.usuario}
                    placeholder="Digite seu Usuário"
                    /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="senha"
                    value={usuarios.senha}
                    placeholder="Digite sua senha"
                    /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>
                <Link to="/">
                 <ImCancelCircle />
                </Link>
            </form>

        </section>
        </SecCad>
    )
}
export default CadUsuarios