"use client"
import React, { useState } from 'react';
import "./page.css"

const Bmi = () => {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };
    const resetValues = () => {
        setHeightValue('');
        setWeightValue('');
        setBmiValue('');
        setBmiMessage('');
    };

    return (
        <div className='m-5 '>
            <h1 className='mb-2 font-medium text-4xl text-primary'>Body Mass Index (BMI) Calculator</h1>
            <hr />
            <div className="mt-5 p-5 border-4 border-blue-300">
                <h1 className='pb-5 font-medium'>Enter your WEIGHT and HEIGHT below to find your BMI.
                </h1>


                <div className="form__group field mb-4">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="Name"
                        id="height"
                        value={heightValue}
                        onChange={(e) => setHeightValue(e.target.value)}
                        required />
                    <label for="name" className="form__label">Height (cm):</label>
                </div>


                <div className="form__group field mb-4">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="Name"
                        id="weight"
                        value={weightValue}
                        onChange={(e) => setWeightValue(e.target.value)}
                        required />
                    <label for="name" className="form__label">Weight (kg):</label>
                </div>


                <div className='flex gap-10'>
                    <button className="button" onClick={calculateBmi}>
                        Calculate BMI
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

                {bmiValue && bmiMessage && (
                    <div className="result">
                        <p>
                            Your BMI: <span className="bmi-value">{bmiValue}</span>
                        </p>
                        <p>
                            Feedback: <span className="bmi-message">{bmiMessage}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Bmi;