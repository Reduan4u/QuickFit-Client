"use client";

import { AuthContext } from "@/components/Provider/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { useContext, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Ebutton from "@/components/Common/Ebutton";
import axios from "axios";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const router = useRouter();
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  //  console.log(new FormData())

    const  image = data.photo[0]
    
    const uploadData = new FormData()
    uploadData.append("File", image)
    uploadData.append('upload_preset', "mehedi")
    uploadData.append("cloud_name", "dmiq6scyx")
    console.log(uploadData)
    axios.post("https://api.cloudinary.com/v1_1/dmiq6scyx/image/upload", uploadData)
    .then(res=>console.log(res.data))


    // createUser(data.email, data.password)
    //   .then((res) => {
    //     updateUserProfile(data.name, data.photo)
    //       .then(() => {
    //         const userInfo = {
    //           name: data.name,
    //           email: data.email,
    //           image: data.photo,
    //           role: "user",
    //           isBlocked: false,
    //         };
    //         axiosPublic
    //           .post("/users", userInfo)
    //           .then((res) => {
    //             console.log(res.data);
    //           })
    //           .catch((err) => {
    //             
    //           });
    //         Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: "login Successfully!",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //         router.push("/");
    //       })
    //       .catch((error) => {
    //         toast.error(error.message);
    //       });
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(async (res) => {
        const name = await res.user?.displayName;
        const email = await res.user?.email;
        const image = await res.user?.photoURL;

        axiosPublic
          .post("/users", {
            name,
            email,
            image,
            role: "user",
            isBlocked: false,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err.code));
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

  const inputClass =
    "bg-tertiary text-black w-full p-2 placeholder-secondary placeholder-opacity-80 rounded ";

  return (
    <div id="register" className="hero min-h-screen bg-tertiary">
      <div className="hero-content flex flex-col-reverse md:flex-row w-10/12 m-auto pt-20">
        {/* lottie animation  */}
        <div className="flex justify-center items-center md:w-1/2">
          <Player
            autoplay
            loop
            src="register.json"
            className="w-full"
          ></Player>
        </div>

        {/* form div  */}
        <div className="flex sizing w-full md:1/2 lg:w-2/5 mx-auto flex-col bg-gradient-to-bl from-primary  via-secondary to-primary text-black shadow-2xl shadow-black rounded-xl p-5  my-5 ">
          <h1 className="text-5xl  font-bold text-center pb-10">Register now!</h1>

          {/* google login  */}
          <div
            onClick={handleGoogleLogin}
            className="btn bg-tertiary border-primary border-2 rounded-md text-xl hover:bg-black hover:text-tertiary transform hover:scale-105 transition-all duration-300"
          >
            <h1>
              <span className="text-center text-4xl">
                <FcGoogle />
              </span>
            </h1>
            Google
          </div>

          <div className="divider"></div>

          {/* register form starts  */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* photo field  */}
            {/* <div className="w-full">
              <h2 className="text-lg mb-2 font-medium text-black">Photo URL:</h2>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="type photo url... "
                className={inputClass}
              />
              {errors.photo && (
                <span className="text-red-700">photo is required</span>
              )}
            </div> */}



            {/* file upload field  */}
            <div className="w-full">
              <h2 className="text-lg mb-2 font-medium text-black">Photo URL:</h2>
              <input
                type="file"
                {...register("photo", { required: true })}
                placeholder="type photo url... "
                className={inputClass}
              />
              {errors.photo && (
                <span className="text-red-700">photo is required</span>
              )}
            </div>



            {/* name field  */}
            <div className="w-full">
              <h2 className="text-lg mb-2 font-medium text-black">Name:</h2>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="type your name "
                className={inputClass}
              />
              {errors.name && (
                <span className="text-red-700">name is required</span>
              )}
            </div>

            {/* email field  */}
            <div className="w-full">
              <h2 className="text-lg mb-2 font-medium text-black">Email:</h2>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="type email "
                className={inputClass}
              />
              {errors.email && (
                <span className="text-red-700">email is required</span>
              )}
            </div>

            {/* password field  */}
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-lg mb-2 font-medium text-black">Password:</h2>
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                })}
                placeholder="type password "
                className={inputClass}
              />
              {errors.password?.type == "required" && (
                <span className="text-red-700">Password field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  Password must contain at least one lowercase letter, one
                  uppercase letter, one digit, and one special character.
                </span>
              )}
            </div>

            {/* register button field  */}
            <div type="submit" className="w-full flex justify-center items-center">
              <Ebutton>
                sign up
              </Ebutton>
            </div>

            {/* go to login field  */}
            <div className="flex justify-evenly mb-5 items-center">
              <p className="inline">Already Registered?</p>
              <Link
                href="/login"
                className="border-b-2  border-black font-semibold text-xl"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
