import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;