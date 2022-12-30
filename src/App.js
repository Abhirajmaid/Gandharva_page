// import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar'
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer'
import About from './components/about/About';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
