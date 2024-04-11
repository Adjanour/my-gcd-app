import React, { useState } from "react";


interface GCDCalculatorProps {}

const GCDCalculator: React.FC<GCDCalculatorProps> = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [gcd, setGcd] = useState<number | null>(null);
  const [steps, setSteps] = useState<
    Array<{ a: number; b: number; q: number; r: number }>
  >([]);

  const [showClearButton, setShowClearButton] = useState(false);

  const calculateGCD = () => {
    let a = number1;
    let b = number2;
    const calculationSteps = [];

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
    </div>
  );
};

export default GCDCalculator;
