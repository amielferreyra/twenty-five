import React from 'react'
import './components/home.scss'
import NavBar from './components/NavBar';

function Home() {
    return (
        <div className="fondo">
            <NavBar/>
            <main className='header'>
                <h2 className="title">Sed ut perspiciatis unde omnis iste natus</h2> 
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </p>
                <div className="btn-home">
                    <a href="#nosotros" className="btn">Read more</a>
                </div>
            </main>
        </div>
    );
  }
  
  export default Home;