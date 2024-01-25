"use client"
import React, { useState } from 'react';
import "./page.css"

const Diabetes = () => {
    const [glucoseLevelValue, setGlucoseLevelValue] = useState('');
    const [diabetesResult, setDiabetesResult] = useState('');
    const [diabetesFeedback, setDiabetesFeedback] = useState('');

    const calculateDiabetes = () => {
        let message = '';
        if (glucoseLevelValue < 5.5) {
            setDiabetesResult("DM Unlikely");
            message = 'Follow-Up with Healthcare Provider';
        }
        if ((glucoseLevelValue >= 5.5) && (glucoseLevelValue <= 11)) {
            setDiabetesResult("DM Uncertain");
            message = 'Please, Do OGTT immediately';
        }
        if (glucoseLevelValue >= 11) {
            setDiabetesResult("DM Likely");
            message = 'Talk to your doctor immediately';
        }
        setDiabetesFeedback(message)
    };

    const resetValues = () => {
        setGlucoseLevelValue('');
        setDiabetesResult('');
        setDiabetesFeedback('');
    };

    return (
        <div className='m-5 '>
            <h1 className='mb-2 font-medium text-4xl text-blue-500'>Diabetes Diagnosis Calculator (by RBS)</h1>
            <hr />
            <div className="mt-5 p-5 border-4 border-blue-300">
                <h1 className='pb-5 font-medium'>Enter your Glucose Level of anytime below to find your Diabetes.
                </h1>


                <div className="form__group field mb-4">
                    <input
                        type="number"
                        className="form__field"
                        placeholder="Name"
                        id="height"
                        value={glucoseLevelValue}
                        onChange={(e) => setGlucoseLevelValue(e.target.value)}
                        required />
                    <label for="name" className="form__label">Glucose Level (mmol/l):</label>
                </div>

                <div className='flex gap-10'>
                    <button className="button" onClick={calculateDiabetes}>
                        Calculate Diabetes
                        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                            <path
                                clip-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <button className="button" onClick={resetValues}>
                        Clear
                        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                            <path
                                clip-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                {diabetesResult && diabetesFeedback && (
                    <div className="result">
                        <p>
                            Your Diabetes: <span className="bmi-value">{diabetesResult}</span>
                        </p>
                        <p>
                            Your Feedback: <span className="bmi-message">{diabetesFeedback}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Diabetes;