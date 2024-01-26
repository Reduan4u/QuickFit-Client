// pages/gfrCalculator.js
"use client"
import React, { useState } from 'react';
import "./page.css"

const Gfr = () => {
    const initialFormData = {
        serumCreatinine: '',
        age: '',
        gender: 'male', // or 'female'
    };

    const [formData, setFormData] = useState(initialFormData);
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const calculateGFR = () => {
        // Implement the GFR calculation logic here based on the MDRD formula
        // This is a simplified example, and you may need to replace it with a more accurate formula
        const { serumCreatinine, age, gender } = formData;
        console.log(gender);
        const gfr = (186 * (serumCreatinine ** -1.154) * (age ** -0.203) * (gender === 'male' ? 1 : 0.742)).toFixed(2);
        setResult(gfr);
    };

    const resetValues = () => {
        setFormData(initialFormData);
        setResult(null); // Reset result when clearing the form

    };

    return (
        <div className='m-5'>
            <h1 className='mb-2 font-medium text-4xl text-blue-500'>GFR Calculator</h1>
            <div className="mt-5 p-5 border-4 border-blue-300">
                <h1 className='pb-5 font-medium'>Enter your data to find your GFR.
                </h1>
                <form>
                    <div className="form__group field mb-4">
                        <input
                            type="number"
                            name="serumCreatinine"
                            className="form__field"
                            placeholder=""
                            value={formData.serumCreatinine}
                            onChange={handleInputChange}
                            required />
                        <label for="serumCreatinine" className="form__label">Serum Creatinine (mg/dL):</label>
                    </div>
                    <div className="form__group field mb-4">
                        <input
                            type="number"
                            name="age"
                            className="form__field"
                            placeholder=""
                            value={formData.age}
                            onChange={handleInputChange}
                            required />
                        <label for="age" className="form__label">Age:</label>

                    </div>

                    <div className='flex items-center mb-5 gap-5'>
                        <div >
                            <h2 className='font-bold'>Your Gender: </h2>
                        </div>
                        <div className="radio-input" name="gender" value={formData.gender} onChange={handleInputChange}>
                            <input value="male" name="value-radio" id="male" type="radio" />
                            <label for="male">Male</label>
                            <input value="female" name="value-radio" id="female" type="radio" />
                            <label for="female">Female</label>
                        </div>
                    </div>

                </form>
                <div className='flex gap-10'>
                    <button className="button" onClick={calculateGFR}>
                        Calculate GFR
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
                {result && (
                    <div className="result">
                        <p>
                            Your GFR: <span className="bmi-value">{result}% </span>
                        </p>
                    </div>
                )}
            </div>

        </div>

    );
};

export default Gfr;
