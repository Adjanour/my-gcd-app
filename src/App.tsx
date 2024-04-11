import React, { useEffect, useState } from 'react';
import GCDCalculator from './components/GCDCalculator';
import './App.css';


const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setIsDarkTheme(!isDarkTheme);
  }
  // Inside your React component



  return (
    <div className={isDarkTheme ? 'dark-theme' : ''}>  
      <header>
        <h1>Euclidean Algorithm GCD Calculator</h1>
        <button onClick={toggleTheme}>Toggle Theme</button> 
      </header>
      <main>
        <GCDCalculator />
      </main>
      <footer className="app-footer">
        <p>© Africoda Tech 2024</p>
      </footer>
    </div>
  );
};

export default App;
