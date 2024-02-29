import { useForm } from "react-hook-form";

const Reviews = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className="">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* User Name */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* Designation */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Designation</span>
                        </label>
                        <input
                            type="text"
                            placeholder="designation"
                            {...register('designation', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>


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
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div className="flex justify-center items-center"><button className="btn w-32 text-center rounded-full border-none bg-black text-white uppercase px-5 ">Add</button></div>
                </form>
            </div>

        </div>
    );
};

export default Reviews;