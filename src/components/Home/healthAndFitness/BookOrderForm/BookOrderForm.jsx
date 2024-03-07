"use client";
import SectionHeading from '@/components/Common/SectionHeading';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const BookOrderForm = ({ bookId, price }) => {
    const axiosPublic = useAxiosPublic();
    const router = useRouter();

    const id = bookId;
    const bookPrice = price;


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {

        data.productId = id
        data.price = bookPrice


        axiosPublic.post("/order3", data)
            .then(result => {
                router.push(result.data.url);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };
    return (
        <div className="w-10/12 mx-auto my-20 py-20 bg-four">
            <SectionHeading title={'Order Form'}></SectionHeading>
            <div className="md:w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* email field  */}
                    <div className="w-full">
                        <h2 className="font-bold text-lg mb-2">Enter Your Email:</h2>
                        <input
                            type="text"
                            {...register("email", { required: true })}
                            placeholder="example@gmail.com"
                            className="border p-2  w-full border-one rounded-full"
                        />
                        {errors.email && (
                            <span className="text-red-600">email is required</span>
                        )}
                    </div>
                    {/* name field  */}
                    <div className="w-full">
                        <h2 className="font-bold text-lg mb-2 ">Your Name:</h2>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="type your name "
                            className="border p-2  w-full border-one rounded-full"
                        />
                        {errors.name && (
                            <span className="text-red-600">name is required</span>
                        )}
                    </div>
                    {/* address field  */}
                    <div className="w-full">
                        <h2 className="font-bold text-lg mb-2 ">Address:</h2>
                        <input
                            type="text"
                            {...register("address", { required: true })}
                            placeholder="type your full address "
                            className="border p-2  w-full border-one rounded-full"
                        />
                        {errors.name && (
                            <span className="text-red-600">address is required</span>
                        )}
                    </div>
                    {/* address field  */}
                    <div className="w-full">
                        <h2 className="font-bold text-lg mb-2 ">Phone Number:</h2>
                        <input
                            type="text"
                            {...register("phone", { required: true })}
                            placeholder="+88017********"
                            className="border p-2  w-full border-one rounded-full"
                        />
                        {errors.name && (
                            <span className="text-red-600">Phone No is required</span>
                        )}
                    </div>
                    {/* order button field  */}
                    <div className='w-52 mx-auto '>
                        <button type="submit" className=" btn w-full mx-auto px-5 py-3 rounded-3xl bg-one hover:bg-three text-four  transition-all duration-500">
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookOrderForm;