import React from 'react';

interface Step {
    a: number;
    b: number;
    q: number;
    r: number;
}

interface StepDisplayProps {
    step: Step;
}

const StepDisplay: React.FC<StepDisplayProps> = ({ step }) => {
    return (
        <div>
            {/* Nicely display the step with clear explanations */} 
            <div style={{display:'flex',flexDirection:'row',rowGap:'10px'}}>
                <div>
                    <p>Dividend: {step.a}</p>
                </div>
                <div>
                    <p>Divisor: {step.b}</p>
                </div>
                    <p>Quotient: {step.q}</p>
                </div>
                <div>
                    <p>Remainder: {step.r}</p>
                </div>
        </div>
    );
};


export default StepDisplay;
