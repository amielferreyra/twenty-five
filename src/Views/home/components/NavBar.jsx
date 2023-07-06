import React from 'react';
import './home.scss'

function NavBar(){
    return(
        <header className='head'>
            <div className="logo">
                <a href="/"><img src="../../../components/imagenes/top-logo.png" alt="logo" /></a>
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