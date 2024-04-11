import React from 'react';
import GCDCalculator from './components/GCDCalculator'; // Assuming your components are in a 'components' folder
import './App.css'; // Add your styling file

const App: React.FC = () => {
  return (
    <div className="container"> {/* Styling with Tailwind or your preferred method */}
      <header>
        <h1>Euclidean Algorithm GCD Calculator</h1>
      </header>

      <main>
        <GCDCalculator />
      </main>
    </div>
  );
};

export default App;
