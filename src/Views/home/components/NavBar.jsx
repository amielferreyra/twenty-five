import React from 'react';
import './home.scss'
import logo from '../../../components/imagenes/top-logo.png'

function NavBar(){
    return(
        <header className="head">
            <div className="logo">
            <a href=""><img class="imglogo" src={logo} alt="logo"/></a>
            </div>
            <nav className="navbar">
                <a href="#inicio">Home</a>
                <a href="#nosotros">About</a>
                <a href="#productos">Products</a>
                <a href="#servicios">Services</a>
                <a href="#contacto">Contact</a>
            </nav>
        </header>
    );
}

export default NavBar;