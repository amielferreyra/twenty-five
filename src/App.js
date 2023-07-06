import './App.scss'
import Contact from './Views/contact/Contact';
import About from './Views/about/About';
import Footer from './Views/footer/footer';
import Home from './Views/home/Home';
import Products from './Views/products/Products';
import Services from './Views/service/Services';

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Products/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
