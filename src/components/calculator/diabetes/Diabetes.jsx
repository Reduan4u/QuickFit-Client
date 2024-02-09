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
        <div className='mx-5 mb-10 space-y-10 '>

            {/* Diabetes Diagnosis Calculator (by RBS) */}
            <div className=' '>
                <h1 className='mb-2 font-medium text-4xl text-primary'>Diabetes Diagnosis Calculator (by RBS)</h1>
                <hr />
                <div className="my-5 p-5 border-4 border-blue-300">
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

            {/* BMIs & Health Risk */}
            <div className=' '>
                <h1 className='mb-2 font-medium text-4xl text-primary'>Blood Sugar Levels in Diagnosing Diabetes </h1>
                <hr />
                <div className="my-5  text relative  overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs font-sans text-white bg-sky-400  uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Glucose Test
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Normal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prediabetes
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Diabetes
                                </th>

                            </tr>
                        </thead>
                        <tbody className='text-black font-mono '>

                            <tr className=" border-b border-sky-200 bg-white ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Random
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-green-100 text-gray-900 whitespace-nowrap ">
                                    Below 11.1 mmol/l <br />
                                    Below 200 mg/dl
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-blue-100 text-gray-900 whitespace-nowrap ">
                                    N/A                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-red-100 text-gray-900 whitespace-nowrap ">
                                    11.1 mmol/l or more <br />
                                    200 mg/dl or more
                                </th>
                            </tr>

                            <tr className="bg-white border-b border-sky-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Fasting
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-green-100 text-gray-900 whitespace-nowrap ">
                                    Below 5.5 mmol/l <br />
                                    Below 100 mg/dl
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-blue-100 text-gray-900 whitespace-nowrap ">
                                    5.5 to 6.9 mmol/l <br />
                                    100 to 125 mg/dl
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-red-100 text-gray-900 whitespace-nowrap ">
                                    7.0 mmol/l or more <br />
                                    126 mg/dl or more
                                </th>
                            </tr>

                            <tr className=" border-b bg-white ">
                                <th scope="row" className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap ">
                                    2hr Post-Prandial
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-green-100 text-gray-900 whitespace-nowrap ">
                                    Below 7.8 mmol/l <br />
                                    Below 140 mg/dl
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-blue-100 text-gray-900 whitespace-nowrap ">
                                    7.8 to 11.0 mmol/l <br />
                                    140 to 199 mg/dl
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium bg-red-100 text-gray-900 whitespace-nowrap ">
                                    11.1 mmol/l or more <br />
                                    200 mg/dl or more
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    );
};

export default Diabetes;