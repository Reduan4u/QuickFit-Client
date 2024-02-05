"use client";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import React from 'react';
import orderNow from "../../../../public/orderNow.json";


function OrderForm2({ params }) {
    const axiosPublic = useAxiosPublic();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.productId = params.id
        console.log(data);
        axiosPublic.post("/order2", data)
            .then(result => {
                router.push(result.data.url);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };

    return (
        <div className="grid md:grid-cols-2 w-10/12 mx-auto my-20 gap-10">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* email field  */}
                    <div className="w-full">
                        <h2 className="text-lg mb-2 text-gray-800">Your Email:</h2>
                        <input
                            type="text"
                            {...register("email", { required: true })}
                            placeholder="example@gmail.com"
                            className="border p-2  w-full border-gray-300 border-2 rounded"
                        />
                        {errors.email && (
                            <span className="text-red-600">email is required</span>
                        )}
                    </div>

                    {/* name field  */}
                    <div className="w-full">
                        <h2 className="text-lg mb-2 text-slate-700">Your Name:</h2>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="type your name "
                            className="border p-2  w-full border-gray-300 border-2 rounded"
                        />
                        {errors.name && (
                            <span className="text-red-600">name is required</span>
                        )}
                    </div>

                    {/* address field  */}
                    <div className="w-full">
                        <h2 className="text-lg mb-2 text-slate-700">Address:</h2>
                        <input
                            type="text"
                            {...register("address", { required: true })}
                            placeholder="type your full address "
                            className="border p-2  w-full border-gray-300 border-2 rounded"
                        />
                        {errors.name && (
                            <span className="text-red-600">address is required</span>
                        )}
                    </div>

                    {/* address field  */}
                    <div className="w-full">
                        <h2 className="text-lg mb-2 text-slate-700">Phone Number:</h2>
                        <input
                            type="text"
                            {...register("phone", { required: true })}
                            placeholder="+88017********"
                            className="border p-2  w-full border-gray-300 border-2 rounded"
                        />
                        {errors.name && (
                            <span className="text-red-600">Phone No is required</span>
                        )}
                    </div>

                    {/* order button field  */}
                    <div className="flex justify-center pt-4">
                        <button type="submit" className="btn text-white btn-success">
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
            <div className="">
                <Lottie animationData={orderNow} loop={true} />
            </div>
        </div>
    );
}

export default OrderForm2;
