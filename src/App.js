import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [isResearch, setResearch] = useState(false);
  const [isProject, setProject] = useState(false);
  const [isGame, setGame] = useState(false);
  const [isAbout, setAbout] = useState(false);

  const resetNavigationState = () => {
    setResearch(false);
    setProject(false);
    setGame(false);
    setAbout(false);
  }

  const  handleNavigation = (e) => {
    resetNavigationState();
    switch(e.target.innerText) {
      case 'Research': 
        setResearch(true);
        break;
      case 'Project': 
        setProject(true);
        break;
      case 'Game': 
        setGame(true);
        break;
      case 'About': 
        setAbout(true);
        break;
      default:
        break;
    }
  }

  const handleLogo = () => {
    resetNavigationState();
  }

  return (
    <div className="App">
      <div className='header'>    
        <div className='container navigation'>
            <h1 className='logo' onClick={handleLogo}>portfolio</h1>
            <div className='nav-wrapper'>
              <h1 
                onClick={handleNavigation}
                className={isResearch ? 'active' : undefined}
              >
                Research
              </h1>
              <h1 
                className={isProject ? 'active' : undefined}
                onClick={handleNavigation}
              >
                Project
              </h1>
              <h1 
                className={isGame ? 'active' : undefined}
                onClick={handleNavigation}
              >
                Game
              </h1>
              <h1 
                className={isAbout  ? 'active' : undefined}
                onClick={handleNavigation}
              >
                About
              </h1>
            </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
