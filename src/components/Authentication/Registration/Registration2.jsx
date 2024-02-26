"use client";

import { AuthContext } from "@/components/Provider/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Ebutton from "@/components/Common/Ebutton";



const Registration2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogin,updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  const {
    register,
  
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();



  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
                name:data.name,
                email:data.email,
                image:data.photo,
                role: "user",
                isBlocked: false,
              }
            axiosPublic
            .post("/users", userInfo )
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err.code);
            });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "login Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        // console.log(res.data)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      })

      .catch((error) => console.error(error));
  };

  return (
    <section id="register" className="py-20">


      <div className="flex sizing lg:w-1/2 mx-auto flex-col bg4 shadow-2xl shadow-black  p-5  my-5">
 

        <div className="divider"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* photo field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-gray-800">Photo URL:</h2>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="type photo url... "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.photo && (
              <span className="text-red-600">photo is required</span>
            )}
          </div>

          {/* name field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">Name:</h2>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="type your name "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.name && (
              <span className="text-red-600">name is required</span>
            )}
          </div>

          {/* email field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">Email:</h2>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="type email "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>

          {/* password field  */}
          <div className="w-full">
            <div className="flex justify-between items-center">
            <h2 className="text-lg mb-2 text-slate-700">Password:</h2>
            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
            </div>
            <input
             type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              })}
              placeholder="type password "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.password?.type == "required" && (
              <span className="text-red-600">Password field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be at least 6 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                Password must contain at least one lowercase letter, one
                uppercase letter, one digit, and one special character.
              </span>
            )}
          </div>

          {/* register button field  */}
          <div>
            <Ebutton type="submit" className="">
              sign up
            </Ebutton>
          </div>

          {/* go to login field  */}
          <div className="flex justify-evenly mb-5 items-center">
            <p className="inline">Already Registered?</p>
            <Link
              href="/login"
              className="border-b-2  border-black font-semibold text-xl">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Registration2;
