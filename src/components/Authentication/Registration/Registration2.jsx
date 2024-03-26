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
import LoginButton from "@/components/Common/LoginButton";

const Registration2 = () => {
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
    createUser(data.email, data.password)
      .then((res) => {
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              image: data.photo,
              role: "user",
              isBlocked: false,
            };
            axiosPublic
              .post("/users", userInfo)
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
            router.push("/");
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
    "bg-tertiary border border-gray-400 rounded-xl my-1 text-black w-full p-3 placeholder-black placeholder-opacity-50 rounded text-lg";
  return (
    <div id="register" className="hero min-h-screen bg-tertiary">
      <div className="hero-content flex flex-col-reverse md:flex-row w-10/12 m-auto pt-20">
        {/* lottie animation  */}
        <div className="flex justify-center items-center md:w-1/2">
          <Player autoplay loop src="register.json" className="w-full"></Player>
        </div>

        {/* form div  */}
        <div className="flex  w-full md:1/2 lg:w-2/6 mx-auto flex-col bg-gradient-to-b from-white to-four text-black shadow-2xl  rounded-xl p-5  my-5 ">
          <h1 className="text-2xl md:text-3xl  font-mediumm text-center md:text-start pb-5">
            Register <span className="text-three">Now</span>
          </h1>

          {/* register form starts  */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* photo field  */}
            <div className="w-full">
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Photo URL "
                className={inputClass}
              />
              {errors.photo && (
                <span className="text-red-700">photo is required</span>
              )}
            </div>

            {/* name field  */}
            <div className="w-full">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className={inputClass}
              />
              {errors.name && (
                <span className="text-red-700">name is required</span>
              )}
            </div>

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
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
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
            <div type="submit" className="text-xl">
              <LoginButton>Create An Account</LoginButton>
            </div>

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
            <div className=" text-center">
              <p className="inline">Already Registered? </p>
              <Link href="/login" className="hover:text-three transition-all">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration2;
