import "../style/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import menuBurger from "../assets/menu-burger.svg";
import closeBurger from "../assets/close.svg";


function NavBar() {

    const [menu, setmenu] = useState('menu-list');
    const [burger, setburger] = useState(menuBurger);

    return (
        <div className="NavBar">
            <div className="logo">
                <img className="logo-img" src={ logo } alt="one piece flag" />
            </div>

            <div className="menu">
                <div className="menu-burger">
                    <img className="burger-button" src={ burger } alt="menu burger" onClick={() => {
                        if(menu === 'menu-list') {
                            setmenu('menu-list-active');
                            setburger(closeBurger);
                        } else {
                            setmenu('menu-list');
                            setburger(menuBurger);
                        }
                    }} />
                </div>

            </div>

            <div className={ menu }>
                <div className="list">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Docs">Docs</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar ;