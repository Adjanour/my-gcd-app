// History.tsx
import React from "react";

interface CalculationHistoryItem {
  number1: number;
  number2: number;
  gcd: number;
  steps: Array<{ a: number; b: number; q: number; r: number }>;
}

interface HistoryProps {
  history: CalculationHistoryItem[];
  setHistory: React.Dispatch<React.SetStateAction<CalculationHistoryItem[]>>;
}

const HistoryComponent: React.FC<HistoryProps> = ({ history,setHistory }) => {

    const clearHistory = () => {
        localStorage.removeItem('calculationHistory');
        setHistory([]);
    }
  return (
    <div className="history-container">
      <h2>Calculation History</h2>
      {history.map((item, index) => (
    <div key={index} className="history-item">
        <div className="flex">
            <p style={{left:0,width:'100%'}}><strong>Numbers:</strong> {item.number1} , {item.number2}</p>
            <p style={{left:0,width:'100%'}}><strong>GCD:</strong> {item.gcd}</p>
        </div>
        {item.steps.length > 0 && (
            <div className="calculation-steps">
                <h3>Steps:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>a</th>
                            <th>b</th>
                            <th>q</th>
                            <th>r</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.steps.map((step, stepIndex) => (
                            <tr key={stepIndex}>
                                <td>{step.a}</td>
                                <td>{step.b}</td>
                                <td>{step.q}</td>
                                <td>{step.r}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </div>
))}
    <button type="button" onClick={clearHistory}>Clear</button>
    </div>
  );
};

export default HistoryComponent;
