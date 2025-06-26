import './App.css';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import HomePage from './pages/HomePage';
import ServicesPage from './components/ServicesPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
