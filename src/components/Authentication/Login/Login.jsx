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
import { toast } from "react-toastify";
import LoginButton from "@/components/Common/LoginButton";

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
      });
  };

  const inputClass =
    "bg-tertiary border border-gray-400 rounded-xl my-1 text-black w-full p-3 placeholder-black placeholder-opacity-50 rounded text-lg";

  return (
    <div className="hero min-h-screen bg-tertiary">
      <div className="hero-content flex flex-col-reverse md:flex-row w-10/12 m-auto pt-20">
        {/* lottie animation  */}
        <div className="flex justify-center items-center md:w-1/2">
          <Player autoplay loop src="login.json" className="w-full"></Player>
        </div>

        {/* form div  */}
        <div className="flex  w-full md:1/2 lg:w-2/6 mx-auto flex-col bg-gradient-to-b from-white to-four text-black shadow-2xl  rounded-xl p-5  my-5 ">
          <h1 className="text-2xl md:text-3xl  font-mediumm text-center md:text-start pb-5">LogIn <span className="text-three">Now</span></h1>

          {/*  form starts  */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* email field  */}
            <div className="w-full">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email "
                className={inputClass}
              />
              {errors.email && (
                <span className="text-red-700">email is required</span>
              )}
            </div>

            {/* password field  */}
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                })}
                placeholder="Password"
                className={inputClass}
              />
              <button
                className="absolute right-0 top-1/4 transform text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
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

            {/* login button field  */}
            <div type="submit" className="mb-3 text-xl">
              <LoginButton>Sign In</LoginButton>
            </div>
          </form>
          {/* google login  */}
          <div onClick={handleGoogleLogin} className="text-xl mt-4">
            <LoginButton>
              <div className="flex justify-center items-center gap-4">
                <span>
                  <FcGoogle />
                </span>
                Google
              </div>
            </LoginButton>
          </div>

          {/* go to login field  */}
          <div className=" text-center mt-3">
            <p className="inline">No Account? </p>
            <Link href="/register" className="hover:text-three transition-all">
              Create one here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
