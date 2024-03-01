"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/components/Provider/AuthProvider";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Ebutton from "@/components/Common/Ebutton";
import { toast } from "react-toastify";

const Login = ({ path }) => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const axioPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(async (res) => {
        const name = await res.user?.displayName;
        const email = await res.user?.email;
        const image = await res.user?.photoURL;

        axioPublic
          .post("/users", {
            name,
            email,
            image,
            role: "user",
            isBlocked: false,
          })
          .then((res) => {
            console.log(res);
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

        router.push(path || "/");
      })

      .catch((error) => console.error(error));
  };

  const onSubmit = (data) => {

    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push(path || "/"); 
      })
      .catch((error) => {
        toast.error("Login Error: ", error.message);
       console.log(error)
      });
  };

  const inputClass = "bg-tertiary text-black w-full p-2 placeholder-secondary placeholder-opacity-80 rounded "

  return (
    <>
      <div className="hero min-h-screen bg-tertiary">

      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
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
      <div className="flex sizing w-full md:1/2 lg:w-2/5 mx-auto flex-col bg-gradient-to-bl from-primary  via-secondary to-primary text-black shadow-2xl shadow-black  p-5  my-5 ">
 
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
              })}
              placeholder="type password "
              className={inputClass}
            />
       
          </div>

          {/* register button field  */}
          <div  type="submit" className="w-full flex justify-center items-center">
            <Ebutton>
              Sign In
            </Ebutton>
          </div>

          {/* go to login field  */}
          <div className="flex justify-evenly mb-5 items-center">
            <p className="inline">Did not register?</p>
            <Link
              href="/register"
              className="border-b-2  border-black font-semibold "
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
</div>

      </div>
    </>
  );
};

export default Login;
