"use client";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useRouter } from 'next/navigation';
import LoginButton from "@/components/Common/LoginButton";
import SectionHeading from "@/components/Common/SectionHeading";


function OrderForm({ params }) {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();
  const inputClasses = "border p-2  w-full border rounded-xl text-center border-one  placeholder-opacity-70"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.productId = params.id
    data.cartPrice = params?.price 

    axiosPublic.post("/order", data)
      .then(result => {
        router.push(result.data.url);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="w-10/12 mx-auto my-10 bg-four py-10">
      <div className="md:w-2/5 mx-auto">
        <SectionHeading title={"Order Form"}></SectionHeading>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* email field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black text-center">Your Email</h2>
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
            <h2 className="text-lg mb-2 text-black text-center">Your Name</h2>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="John Due"
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-red-600">name is required</span>
            )}
          </div>

          {/* address field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black text-center">Address</h2>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Street, Village, District"
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-red-600">address is required</span>
            )}
          </div>

          {/* address field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-black text-center">Phone Number</h2>
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
          <div className="w-1/2 mx-auto pt-4">
            <LoginButton type="submit" className="btn btn-accent">
              Confirm Order
            </LoginButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
