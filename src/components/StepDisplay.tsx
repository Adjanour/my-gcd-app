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
        </div>
    );  
};


export default StepDisplay;
