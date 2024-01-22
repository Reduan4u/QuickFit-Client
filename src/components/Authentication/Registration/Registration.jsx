"use client"
import { AuthContext } from "@/components/Provider/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

    

   

const Registration = () => {
    const [ showPassword, setShowPassword] = useState(false)
    const {createUser,googleLogin} = useContext(AuthContext)
    const {register, reset, handleSubmit, formState: { errors }} = useForm();
    
    // const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            console.log(result.user)
            //  return updateUserProfile(data.name, data.photoURL)
            // .then(() => {
            //   //create user entry in the database//
            //   const userInfo = {
            //     name:data.name,
            //     email:data.email
            //   }
            // })
        })
        .then(()=>{
            swal("Good job!", "User created Successfully!", "success");
        })

        .catch((error) => {
            // Handle any errors that occurred during the process
            console.error("Error:", error.message);
            // You might want to show an error message to the user
            swal("Oops!", "Something went wrong", "error");
        });
    }


    
    
   const handleGoogleLogin = () =>{
  
    googleLogin()
    
      .then(res => {
        // console.log(res.data)
        swal("Good job!", "Login Successfully!", "success");
      
      })
      
    
    .catch(error => console.error(error))
   }







    return (
        
        <>
          
           
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-[500px] lg:text-left">
      <h1 className="text-5xl  font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text">Name</span> */}
          </label>
          {/* 
          used react-hook-form
          used react-hook-form
          used react-hook-form
          used react-hook-form
          used react-hook-form
           */}
          <input type="text" {...register('name',{ required: true })} name="name" placeholder="Name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is </span>}
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text">Photo URL</span> */}
          </label>
          <input type="text" {...register('photoURL',{ required: true })}  placeholder="Photo url" className="input input-bordered"  />
          {errors.photoURL && <span className="text-red-600">Photo url is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text">Email</span> */}
          </label>
          <input type="email" {...register('email',{ required: true })} name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text">Password</span> */}
          </label>
          <input type= {showPassword ? "text":"password"} {...register('password',  { required: true ,minLength:6, maxLength:20, pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>} 
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character</span>} 
          {errors.password?.type === 'pattern' && <span className="text-red-600">Password must set hard character</span>} 

        </div>

              
              <span className="relative bottom-[43px] text-2xl left-[285px]" onClick={()=> setShowPassword(!showPassword)}>
                {
                  showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
              </span>



        
        <div className="form-control mt-6">
      
          <input type="submit" className="btn bg-white border-orange-600 border-2 rounded-none  hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300" value="Register" />
        </div>

        <div onClick={handleGoogleLogin} className="btn bg-white border-orange-600 border-2 rounded-none  hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300"> <h1 > <span className='text-center text-4xl'><FcGoogle /></span> </h1> Google </div>


        
      </form>
      <p className='text-center pb-2'> Already register ? <Link className='text-indigo-700 ' href='/login'>Login</Link> </p>

    </div>
  </div>
</div>
</>
    );
};

export default Registration;