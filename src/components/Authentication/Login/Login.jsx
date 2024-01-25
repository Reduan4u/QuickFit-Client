"use client"




import { useContext, useState } from 'react';
import Link from 'next/link';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { AuthContext } from '@/components/Provider/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const { register, reset, formState: { errors } } = useForm();
  const router = useRouter(); // Initialize the useRouter hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User login Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        router.push('/'); // Navigate to the home page after successful login
      })
      .catch(error => {
        console.error("Login Error: ", error.message);
        // Handle login error here
      });
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-[500px] lg:text-left">
            <Player
              autoplay
              loop
              src="login.json"
              style={{ height: '450px', width: '450px' }}
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-orange-800 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label"></label>
                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input border-orange-600 input-info" />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label"></label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
                  name="password"
                  placeholder="password"
                  className="input border-orange-600 input-info"
                />
                {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>}
                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character</span>}
              </div>

              <span className="relative bottom-[43px] text-2xl left-[285px]" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>

              <div className="form-control mt-6">
                <input type="submit" className="btn bg-white  border-orange-600 border-2 rounded-md  hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300" value="Login" />
              </div>
            </form>
            <p className="text-center pb-2">
              Register Now <Link href="/register"><span className="text-indigo-700">Register</span></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
