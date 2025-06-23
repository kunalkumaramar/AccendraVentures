import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HeroSection from './components/HeroSection';
import KnowMore from './components/KnowMore';
import Navbar from './components/Navbar';
import Services from './components/Services';
import SocialBar from './components/SocialBar';
function App() {
  return (
    <div className= 'App'>
      <Navbar/>
      <SocialBar />
      <HeroSection/>
      <Services/>
      <AboutUs/>
      <KnowMore/>
      <ContactUs/>
    </div>
  );
}

export default App;
