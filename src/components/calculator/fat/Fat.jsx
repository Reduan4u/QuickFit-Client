// pages/BodyFatCalculator.js
"use client"
import React, { useState } from 'react';
import "./page.css"

const Fat = () => {
    const initialFormData = {
        weight: '',
        waist: '',
        gender: 'male', // or 'female'
    };

    const [formData, setFormData] = useState(initialFormData);
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = e.target.type === 'radio' ? e.target.id : value;
        setFormData({ ...formData, [name]: updatedValue });
    };

    const calculateBodyFat = () => {
        const { gender, weight, waist } = formData;

        let bodyFat;
        if (gender === 'male') {
            bodyFat = ((1.20 * weight) + (0.23 * waist) - 16.2)
        }
        else {
            bodyFat = ((1.20 * weight) + (0.23 * waist) - 5.4)
        }
        const bodyFatPercentage = bodyFat.toFixed(2);
        setResult(bodyFatPercentage);
    };

    const resetValues = () => {
        setFormData({
            gender: 'male',
            weight: '',
            waist: '',
        });
        setResult(null);
    };

    return (
        <div className='mx-5 mb-10 space-y-10 '>

            {/* Body Fat Calculator */}
            <div>
                <h1 className='mb-2 font-medium text-4xl text-primary'>Body Fat Calculator</h1>
                <div className="mt-5 p-5 border-4 border-blue-300">
                    <h1 className='pb-5 font-medium'>Enter your data to find your Body fat.</h1>
                    <form>

                        <div className="form__group field mb-4">
                            <input
                                type="number"
                                name="weight"
                                className="form__field"
                                placeholder=""
                                value={formData.weight}
                                onChange={handleInputChange}
                                required />
                            <label for="weight" className="form__label">BMI:</label>
                        </div>

                        <div className="form__group field mb-4">
                            <input
                                type="number"
                                name="waist"
                                className="form__field"
                                placeholder=""
                                value={formData.waist}
                                onChange={handleInputChange}
                                required />
                            <label for="waist" className="form__label">Age:</label>
                        </div>


                        <div className='flex items-center mb-5 gap-5'>
                            <div >
                                <h2 className='font-bold'>Your Gender: </h2>
                            </div>
                            <div
                                className="radio-input"
                                onChange={handleInputChange}>
                                <input
                                    value="male"
                                    name="gender"
                                    id="male"
                                    type="radio"
                                    checked={formData.gender === 'male'}
                                />
                                <label htmlFor="male">Male</label>

                                <input
                                    value="female"
                                    name="gender"
                                    id="female"
                                    type="radio"
                                    checked={formData.gender === 'female'}
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                    </form>

                    <div className='flex gap-10'>
                        <button className="button" onClick={calculateBodyFat}>
                            Calculate Body Fat
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
                                Your Body Fat: <span className="bmi-value">{result}% </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Body Fat */}
            <div>
                {/* Body Fat for Men*/}
                <div className=' '>
                    <h1 className='mb-2 font-medium text-4xl text-primary'>Body Fat for <span className='text-red-600 underline underline-offset-4'>Male</span> </h1>
                    <hr />
                    <div className="my-5  text relative  overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right ">
                            <thead className="text-xs font-sans text-white bg-sky-400  uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Athlete
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Ideal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Average
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Above Ave.
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Overweight
                                    </th>


                                </tr>
                            </thead>
                            <tbody className='text-black font-mono '>

                                <tr className="  bg-white border-b border-gray-200 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

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
                <div>

                </div>
            </div>

        </div>
    );
};

export default Fat;
