"use client";
import TrackerNav from "@/components/Tracker/trackerNav/TrackerNav";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const ExerciseUpdate = ({ params }) => {
  const axiosPublic = useAxiosPublic();
  const router = useRouter()

  const inputClasses =
    "border-primary w-full p-2 border p-2 font-bold rounded bg-tertiary border-primary placeholder-black placeholder-opacity-60";
  const buttonClasses =
    "text-xl font-semibold bg-tertiary text-black hover:shadow-xl hover:scale-105 transition-all duration px-3 py-2";

  const [tracker, setTracker] = useState({});
  useEffect(() => {
    axiosPublic
      .get(`/tracker/single/${params.id}`)
      .then((res) => setTracker(res.data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {

    const data = {
      value : parseInt(formData.value),
      status: formData.status
    }

    axiosPublic.patch(`/tracker/update/${params.id}`, data)
    .then(res => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Exercise Updated!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset()
      router.push('/tracker')
    })


  };
  

  return (
    <div className="bg-black min-h-screen ">
      <TrackerNav />
      <div className="flex justify-center items-center">
        <div className=" w-10/12 md:w-1/2 max-w-2xl mx-auto bg-primary mt-10 p-2 md:p-5">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="md:flex justify-center items-center gap-5">
              {/* exercise name field  */}
              <div className="w-full">
                <h2 className="text-lg mb-2 font-bold text-black">
                  Exercise Name: 
                  <span className="capitalize"> {tracker?.exercise}</span>
                </h2>
              </div>

              {/* reps field  */}
              <div className="w-full">
                <h2 className="text-lg mb-2 font-bold text-black">
                  Target:  <span> {tracker?.target} {tracker?.unit}</span>
                </h2>
              </div>
            </div>

            <div className="md:flex justify-center items-center gap-5">
              {/* finish reps field  */}
              <div className="w-full">
                <h2 className="text-lg mb-2 font-bold text-black">
                  Finish Reps
                </h2>
                <input
                  type="number"
                  {...register("value", { required: true })}
                  placeholder={`5 ${tracker?.unit}`}
                  className={inputClasses}
                />
                {errors.value && (
                  <span className="text-red-600">this field is required</span>
                )}
              </div>

              {/* Status field */}
              <div className="w-full">
                <h2 className="text-lg mb-2 font-bold text-black">Status</h2>
                <select
                  {...register("status", { required: true })}
                  defaultValue=""
                  className={inputClasses}>
                      <option value="">select status</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="complete">Complete</option>
                </select>
                {errors.status && (
                  <span className="text-red-600">Please select the status</span>
                )}
              </div>
            </div>

            {/* exercise add button */}
            <div className=" mt-5 flex flex-col md:flex-row justify-center gap-5">
              <button type="submit" className={buttonClasses}>
                Update Info
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default ExerciseUpdate;
