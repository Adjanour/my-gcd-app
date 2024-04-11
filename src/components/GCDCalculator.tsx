import React, { useState } from 'react';

interface GCDCalculatorProps { }



// ... (interface GCDCalculatorProps remains the same)

const GCDCalculator: React.FC<GCDCalculatorProps> = () => {
    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);
    const [gcd, setGcd] = useState<number | null>(null);
    const [steps, setSteps] = useState<Array<{ a: number, b: number, q: number, r: number }>>([]);

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
    };

    return (
        <div>
            <input 
                type="number" 
                value={number1} 
                onChange={(e) => setNumber1(parseInt(e.target.value, 10))} 
            />
            <input 
                type="number" 
                value={number2} 
                onChange={(e) => setNumber2(parseInt(e.target.value, 10))} 
            />
            <button onClick={calculateGCD}>Calculate GCD</button>
            {gcd !== null && <p>The GCD is: {gcd}</p>} 
            {steps.length > 0 && (
                <div>
                    <h2>Calculation Steps</h2>
                    {steps.length > 0 && (
    <div>
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
{/* Table for displaying steps */}
                </div>
            )}
        </div>
    );
};

export default GCDCalculator;
