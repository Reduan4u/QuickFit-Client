import { useForm } from "react-hook-form";
import UserReviews from "./UserReviews";
import LoginButton from "@/components/Common/LoginButton";

const Reviews = () => {



    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className="">
           <UserReviews></UserReviews>
           <h1 className="pt-10 text-2xl font-medium">Add Reviews :</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* User Name */}
                    {/* <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div> */}
                    {/* Designation */}
                    {/* <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Designation</span>
                        </label>
                        <input
                            type="text"
                            placeholder="designation"
                            {...register('designation', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div> */}


                    {/* Rating */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="number"
                            placeholder="rating"
                            {...register('rating', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                    {/*review */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-bordered h-24" placeholder="Write a review"></textarea>
                    </div>
                    {/* Image */}
                    {/* <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div> */}

                    <div className="flex justify-center items-center pt-5 "><LoginButton>Submit</LoginButton></div>
                </form>
            </div>

    
    );
};

export default Reviews;