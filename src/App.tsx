import React from 'react';
import GCDCalculator from './components/GCDCalculator';
import './App.css';
import StepDisplay from './components/StepDisplay';

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h2>Euclidean Algorithm GCD Calculator</h2>
      </header>
      <main>
        <GCDCalculator />
      </main>
    </div>
  );
};

export default App;
