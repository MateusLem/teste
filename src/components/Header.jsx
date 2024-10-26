import {Link} from "react-router-dom"
import { NavMenu } from "../styleComponents"
import { useState, useEffect } from "react"
import Logo from "../assets/logo.png"
import iconUser from "../assets/iconUser.png"

const menu_content = [
    { path: 'game', value: 'GAME' },
    { path: 'corridas', value: 'CORRIDAS' },
    { path: 'palpite', value:'PRIXPREDICT' },
    { path: 'login', value: <img className="icon" src={iconUser} alt="" /> }
];


export default function Header(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getUsuario = localStorage.getItem("usuario");

    return (
        <>
            <NavMenu>
                <Link to='/' id='logo-link'>
                    <img className="logo" src={Logo} alt="Logo" />
                </Link>
                <div className="menu">
                    {menu_content.map(({ path, value }, index) => {
                        return (
                            <Link key={index} to={`/${path}`}>
                                {isMobile ? <p>{value}</p> : <h2>{value}</h2>}
                            </Link>
                        );
                    })}
                </div>
            </NavMenu>
        </>
    );
}
