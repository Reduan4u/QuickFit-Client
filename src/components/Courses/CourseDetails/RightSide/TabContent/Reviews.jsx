"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import { useForm } from "react-hook-form";
import UserReviews from "./UserReviews";
import LoginButton from "@/components/Common/LoginButton";
import UseContext from "@/hooks/UseContext";
import Swal from "sweetalert2";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import UseCourseReviews from "@/hooks/UseCourseReviews";

const Reviews = ({ course }) => {
  const axiosPublic = useAxiosPublic();
  const {refetch} = UseCourseReviews()
  const { user } = UseContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit =  (data) => {
    const obj = {
      ...data,
      rating: parseInt(data.rating),
      reviewerName: user?.displayName,
      reviewerImg: user?.photoURL,
      category: course?.category,
    };

    axiosPublic.post("/reviews", obj).then((res) => {
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your review has will be added",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <UserReviews></UserReviews>
      <h1 className="pt-10 text-2xl font-medium text-center">Add Reviews :</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 mx-auto">
        {/* profession */}
        <div className="form-control w-full  my-6">
          <label className="label">
            <span className="label-text">Profession</span>
          </label>
          <input
            type="text"
            placeholder="profession"
            {...register("profession", { required: true })}
            className="input input-bordered w-full border-one"
          />
        </div>
        {/* Rating */}
        <div className="form-control w-full  my-6">
          <label className="label">
            <span className="label-text">Rating(1-5)</span>
          </label>
          <input
            type="number"
            placeholder="rating"
            {...register("rating", { required: true, min: 1, max: 5 })}
            className="input input-bordered w-full border-one"
          />
          {/* {errors.rating?.type == "required" && (
            <span className="text-red-700">Rating is required</span>
          )}
          {errors.rating?.type === "min" && (
            <span className="text-red-700">Rating should be 1 to 5</span>
          )}
          {errors.rating?.type === "max" && (
            <span className="text-red-700">Rating should be 1 to 5</span>
          )} */}
        </div>

        {/*review */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            {...register("review")}
            className="textarea textarea-bordered h-24 border-one"
            placeholder="Write a review"
          ></textarea>
        </div>

        <div className=" pt-5 w-60 mx-auto ">
          <LoginButton>Submit</LoginButton>
        </div>
      </form>
    </motion.div>
  );
};

export default Reviews;
