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
import SegmentLine from './components/segmentLine/SegmentLine';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SegmentLine/>

      <About/>
      <SegmentLine/>

      <Participate/>
      <SegmentLine/>

      <EventsSc/>
      <SegmentLine/>

      <Sponsors/>
      <SegmentLine/>

      <SponsorUs/>
      <SegmentLine/>
      
      <Footer/>
    </div>
  );
}

export default App;
