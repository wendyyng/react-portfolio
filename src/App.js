import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThreeCube from './components/ThreeCube';
import MainPage from './components/MainPage';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [showMainPage, setShowMainPage] = useState(false);
  const [fadeClass, setFadeClass] = useState('');

  const handleCubeClick = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setShowMainPage(true);
      setFadeClass('fade-in');
    }, 1000); // Match the fade-out duration
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={`transition-container ${fadeClass}`}>
      <div className={`transition-content ${fadeClass}`}>
        {showMainPage ? (
          <MainPage />
        ) : (
          <ThreeCube onClick={handleCubeClick} />
        )}
      </div>
    </div>
  );
}

export default App;
