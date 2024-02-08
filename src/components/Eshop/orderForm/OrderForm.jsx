"use client";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useRouter } from 'next/navigation';
import Title from "@/components/Common/Title";
import Ebutton from "@/components/Common/Ebutton";


function OrderForm({ params }) {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();
  const inputClasses = "border p-2 text-primary w-full border-red-500 rounded bg-black border-primary placeholder-primary placeholder-opacity-60"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.productId = params.id

    axiosPublic.post("/order", data)
      .then(result => {
        router.push(result.data.url);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="w-10/12 mx-auto my-10 bg-tertiary py-10">
      <div className="md:w-1/2 mx-auto">
        <Title heading={"Order Form"} color={"secondary"}></Title>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* email field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black">Your Email:</h2>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="example@gmail.com"
              className={inputClasses}
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>

          {/* name field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black">Your Name:</h2>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="type your name "
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-red-600">name is required</span>
            )}
          </div>

          {/* address field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black">Address:</h2>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="type your full address "
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-red-600">address is required</span>
            )}
          </div>

          {/* address field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black">Phone Number:</h2>
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="+88017********"
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-red-600">Phone No is required</span>
            )}
          </div>

          {/* order button field  */}
          <div>
            <Ebutton type="submit" className="btn btn-accent">
              Confirm Order
            </Ebutton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
