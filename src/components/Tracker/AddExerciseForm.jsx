"use client";

import { useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import UseContext from "@/hooks/UseContext";
import Swal from "sweetalert2";
import UseTracker from "@/hooks/UseTracker";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import LoginButton from "../Common/LoginButton";


const AddExerciseForm = () => {
  const axiosPublic = useAxiosPublic()
  const {user} = UseContext()
  const {refetch} = UseTracker()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const  currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()+1
    const date = currentDate.getDate()
    data.date = (year+"-"+month+"-"+date)
    data.email = user?.email 
    data.status = "incomplete"
    data.value = parseInt(0)

   axiosPublic.post("/tracker", data)
   .then(res =>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Exercise Added!",
      showConfirmButton: false,
      timer: 1500,
    });
    reset()
    refetch()
   })
  
  };

  const inputClasses =
    "border-primary w-full p-2 border p-2 font-bold rounded bg-tertiary border-primary placeholder-black placeholder-opacity-60";

  return (
    <motion.div
    variants={fadeIn("right", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0 }}
  >
    <div className=" w-10/12 md:w-1/2 max-w-2xl mx-auto bg-gradient-to-r from-three to-one mt-10 p-2 md:p-5 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="md:flex justify-center items-center gap-5">
          {/* exercise name field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 font-bold text-black">Exercise Name</h2>
            <input
              type="text"
              {...register("exercise", { required: true })}
              placeholder="swiming"
              className={inputClasses}
            />
            {errors.email && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>

          {/* target field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 font-bold text-black">Target</h2>
            <input
              type="number"
              {...register("target", { required: true })}
              placeholder="100"
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-red-600">name is required</span>
            )}
          </div>
        </div>

        {/* unit field  */}
        <div className="w-full md:w-1/2 mx-auto">
          <h2 className="text-lg mb-2 font-bold text-black">Select Unit</h2>
          <select
            {...register("unit", { required: true })}
            className={inputClasses}
            defaultValue="reps" // Setting default value to "Select Unit"
          >
            <option value="lbs">lbs</option>
            <option value="kg">kg</option>
            <option value="reps">reps</option>
            <option value="meter">meters</option>
            <option value="km">kilometers</option>
            <option value="grams">grams</option>
            <option value="steps">steps</option>
            <option value="hours">hours</option>
            {/* Add more options as needed */}
          </select>
          {errors.unit && (
            <span className="text-red-600">Unit is required</span>
          )}
        </div>

        {/* exercise add button */}
        <div type="submit" className="pt-5 w-52 mx-auto">
          <LoginButton>Add Exercise </LoginButton>

        </div>

      </form>
    </div>
  </motion.div>

  );
};

export default AddExerciseForm;
