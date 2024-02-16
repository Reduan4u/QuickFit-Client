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



const Registration = () => {
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
    console.log(data)
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const formData = new FormData();
        formData.append('image', data.photoURL[0]); // Assuming photoURL is an array
  
        // Upload image using fetch
        fetch("https://api.imgbb.com/1/upload?key=548b5a47be9ba5156b008d36058b9a4f", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((response) => {
            console.log("Success:", response);
            // After successful image upload, update the user profile
            console.log(response.data.url)
            updateUserProfile(data.name, response.data.url)
              .then(() => {
                // Once user profile is updated, create user entry in the database
                axiosPublic
                  .post("/users", {
                    ...data,
                    role: "user",
                    isBlocked: false,
                    photoURL: response.data.url // assuming you need to save the image URL in user data
                  })
                  .then((res) => {
                    console.log(res);
                    // Show success message and redirect
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "User created Successfully!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    router.push("/");
                  })
                  .catch((err) => {
                    console.log(err.code);
                  });
              })
              .catch((error) => {
                console.error("Error updating user profile:", error);
              });
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      })
      .catch((error) => {
        // Handle any errors that occurred during the process
        console.error("Error:", error.message);
        // You might want to show an error message to the user
      });
  };
  

  // const onSubmit = (data) => {
  //   console.log(data)
  //   createUser(data.email, data.password)
  //     .then((result) => {
  //       console.log(result.user);
  //       const formData = new FormData();
  //       formData.append('image', data.photoURL[0]); // Assuming photoURL is an array
  
  //       // Upload image using fetch
  //       fetch("https://api.imgbb.com/1/upload?key=548b5a47be9ba5156b008d36058b9a4f", {
  //         method: "POST",
  //         body: formData,
  //       })
  //         .then((res) => res.json())
  //         .then((response) => {
  //           console.log("Success:", response);
            
  //         })
  //         .catch((error) => {
  //           console.error("Error:", error);
  //         });



  //       axiosPublic
  //         .post("/users", {
  //           ...data,
  //           role: "user",
  //           isBlocked: false,
  //         })
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err.code);
  //         });

       
        
  //     })
  //     .then(() => {
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "User created Successfully!",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       router.push("/");
  //     })

  //     .catch((error) => {
  //       // Handle any errors that occurred during the process
  //       console.error("Error:", error.message);
  //       // You might want to show an error message to the user
  //     });
  // };

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
    <>
   
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-[500px] lg:text-left">
            {/* <h1 className="text-5xl  font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

            <Player
              autoplay
              loop
              src="register.json"
              style={{ height: "450px", width: "450px" }}
            ></Player>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-orange-800 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                {/* 
          used react-hook-form
          used react-hook-form
          used react-hook-form
          used react-hook-form
          used react-hook-form
           */}
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input border-orange-600  input-info "
                />
                {errors.name && (
                  <span className="text-red-600">This field is </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo </span>
                </label>
                <input
                  type="file"
                  {...register("photoURL", { required: true })}
                  className="input border-orange-600 py-2 input-info"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input border-orange-600 input-info"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input border-orange-600 input-info"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must set hard character
                  </span>
                )}
              </div>

              <span
                className="relative bottom-[43px] text-2xl left-[285px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-white border-orange-600 border-2 rounded-md text-xl hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  value="Register"
                />
              </div>

              <div
                onClick={handleGoogleLogin}
                className="btn bg-white border-orange-600 border-2 rounded-md text-xl hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {" "}
                <h1>
                  {" "}
                  <span className="text-center text-4xl">
                    <FcGoogle />
                  </span>{" "}
                </h1>{" "}
                Google{" "}
              </div>
            </form>
            <p className="text-center pb-2">
              {" "}
              Already register ?{" "}
              <Link className="text-indigo-700 " href="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
