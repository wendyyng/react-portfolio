import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThreeCube from './components/ThreeCube';
import MainPage from './components/MainPage';
import './App.css';
import "aos/dist/aos.css";

function App() {
  const [showMainPage, setShowMainPage] = useState(false);
  const [fadeClass, setFadeClass] = useState('');

  const handleCubeClick = () => {
    setFadeClass('page-fade-out');
    setTimeout(() => {
      setShowMainPage(true);
      setFadeClass('page-fade-in');
    }, 100);
  };

  return (
    <div className={`transition-container ${fadeClass}`}>
      <div className={`transition-page-content ${fadeClass}`}>
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
