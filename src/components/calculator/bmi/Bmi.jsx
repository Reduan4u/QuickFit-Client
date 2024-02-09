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
        <div className='mx-5 mb-10 space-y-10 '>

            {/* Body Mass Index (BMI) Calculator */}
            <div className=''>
                <h1 className='mb-2 font-medium text-4xl text-primary'>Body Mass Index (BMI) Calculator</h1>
                <hr />
                <div className="my-5 p-5 border-4 border-blue-300">
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

            {/* BMIs & Health Risk */}
            <div className=' '>
                <h1 className='mb-2 font-medium text-4xl text-primary'>BMIs & Health Risk </h1>
                <hr />
                <div className="my-5  text relative  overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs font-sans text-white bg-sky-400  uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Classification
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    BMI (kg/m2)
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Risk of co-morbidities
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>

                            </tr>
                        </thead>
                        <tbody className='text-black font-mono '>

                            <tr className="  bg-white border-b border-gray-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                                </th>
                                <th scope="row" className=" px-6 py-4 font-medium text-gray-900 ">
                                    Waist circumference
                                </th>

                            </tr>

                            <tr className="bg-white ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Less Than 90 cm (men) <br />
                                    Less Than 80 cm (women)
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    More Than 90 cm (men) <br />
                                    More Than 80 cm (women)
                                </th>
                            </tr>

                            <tr className=" border-b bg-gray-100 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Underweight
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Less than 18.5
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Low (Risk Increased)
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Average
                                </th>
                            </tr>

                            <tr className="bg-green-100   ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Normal range
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    18.5-22.9
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Average
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Increased
                                </th>
                            </tr>

                            <tr className=" border-b bg-red-100 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Overweight
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    23-24.9
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Increased
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Moderate
                                </th>
                            </tr>

                            <tr className="bg-red-200 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Obese (Class I)
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    25-29.9
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Moderate
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Severe
                                </th>
                            </tr>

                            <tr className=" border-b  bg-red-300">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Obese (Class II)
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    30.0-34.9
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Severe
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Very severe
                                </th>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>





        </div >

    );
};

export default Bmi;