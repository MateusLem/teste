// Links para NAV
import {Link} from "react-router-dom"
// CSS
import { NavMenu } from "../styleComponents"
// imagens
import Logo from "../assets/logo.png"
import iconUser from "../assets/iconUser.png"

export default function Header(){


    return(
        <>
            <NavMenu>
                <img className="logo" src={Logo} alt="" />
                <div className="menu">
                        <Link to='/'>HOME</Link>
                        <Link to='/corridas'>CORRIDAS</Link>
                        <Link to='/palpite'>PRIXPREDICT</Link>
                        <Link to="/login"><img className="icon" src={iconUser} alt="" /></Link>

                </div>
            </NavMenu>
        </>
    )
}