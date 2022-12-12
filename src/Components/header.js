import React from "react";
import {
  Link
} from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div className="brand">PIZZATIME</div>
            <div className="nav">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Pizze">Pizze</Link></li>
                </ul>
            </div>
        </header>
    )
}