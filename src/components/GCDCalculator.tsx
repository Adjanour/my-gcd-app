import React, { useEffect, useState } from "react";
import HistoryComponent from "./HistoryComponent";

interface GCDCalculatorProps {}
interface CalculationHistoryItem {
  number1: number;
  number2: number;
  gcd: number;
  steps: Array<{ a: number; b: number; q: number; r: number }>;
}

const GCDCalculator: React.FC<GCDCalculatorProps> = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [gcd, setGcd] = useState<number | null>(null);
  const [steps, setSteps] = useState<
    Array<{ a: number; b: number; q: number; r: number }>
  >([]);
  const [history, setHistory] = useState<CalculationHistoryItem[]>([]);

  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    const storedHistory = localStorage.getItem("calculationHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []); // Empty dependency array: runs only on component mount

  const calculateGCD = () => {
    let a = number1;
    let b = number2;
    const calculationSteps: Array<{ a: number; b: number; q: number; r: number }> = [];

    while (b !== 0) {
      const q = Math.floor(a / b);
      const r = a % b;
      calculationSteps.push({ a, b, q, r });
      a = b;
      b = r;
    }

    setGcd(a);
    setSteps(calculationSteps);
    setShowClearButton(true);
    if (gcd !== null) {
      setHistory((prevHistory: CalculationHistoryItem[]) => {
        const newHistory = [
          ...prevHistory,
          { number1, number2, gcd:a, steps: calculationSteps },
        ];

        localStorage.setItem("calculationHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    }
  };

  const clear = () => {
    setNumber1(0);
    setNumber2(0);
    setGcd(null);
    setSteps([]);
    setShowClearButton(false);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value, 10))}
        />
      </div>

      <button onClick={calculateGCD}>Calculate GCD</button>
      {showClearButton && <button onClick={clear}>Clear</button>}
      {gcd !== null && <h3>The GCD is: {gcd}</h3>}
      {/* {
        steps.map((step, index) => (
          <StepDisplay step={step} key={index} />
        ))
      } */}
      {steps.length > 0 && (
        <div>
          <h2>Calculation Steps</h2>
          {steps.length > 0 && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Num1</th>
                    <th>Num2</th>
                    <th>Quotient</th>
                    <th>Rem</th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((step, index) => (
                    <tr key={index}>
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
      )}
      <HistoryComponent history={history} setHistory={setHistory} />
    </div>
  );
};

export default GCDCalculator;
