// import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar'
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer'
import About from './components/about/About';
import Participate from './components/participate/Participate';
import SponsorUs from './components/sponsorUs/SponsorUs';
import EventsSc from './components/eventsnSc/EventsSc';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Participate/>
      <EventsSc/>
      <Sponsors/>
      <SponsorUs/>
      <Footer/>
    </div>
  );
}

export default App;
