import { NavLink } from "react-router-dom"

function Header(){
    return(
        <div className="conntainer-fluid bg-dark">
            <header>
           <nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink className={"nav-link text-white"} to="/">Accueil</NavLink></li>
                <li className="nav-item"><NavLink className={"nav-link text-white "} to="/Clients">client</NavLink></li>
                <li className="nav-item"><NavLink className={"nav-link text-white"} to="/Clients/add">Ajouter client</NavLink></li>
                <li className="nav-item"><NavLink className={"nav-link text-white "} to="/">Connexion</NavLink></li>
            </ul>
            </nav> 
        </header>
        </div>
    )
     
}
export default Header