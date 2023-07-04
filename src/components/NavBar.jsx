import React from 'react';

function NavBar(){
    return(
        <header>
            <div class="logo">
                <a href="/"><img src="imagenes/top-logo.png" alt="logo" /></a>
            </div>
            <nav class="navbar">
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