"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";


const UpdateArticles = ({ params }) => {
    const axiosSecure = useAxiosPublic();


    const { data: articles = [], refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/articles/${params.id}`);
            return res.data;
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const subTitle = form.subTitle.value;
        const image = form.image.value;
        const Category = form.Category.value;
        const reviewer = form.reviewer.value;
        const data = {
            title,
            subTitle,
            image,
            Category,
            reviewer,
        };

        axiosSecure.patch(`/api/v1/articles/${articles._id}`, data)
            .then(res => {
                if (refetch) refetch(); 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Article updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error('Error :', error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }
 

    return (
        <div>
            <div className="bg-[#182237] w-full md:w-5/6 mx-auto  p-10 rounded-lg">
            <h1 className="text-slate-300 font-semibold text-2xl text-center border-b-2 pb-2">Update Article</h1>
            <form onSubmit={handleSubmit} className='py-5'>
                <div className='py-5'>
                <div className="flex flex-col items-start">
                    <label className="pb-2 text-slate-300 text-lg" htmlFor="title">
                        Article Title
                    </label>
                    <input
                        name="title"
                        className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                        type="text"
                        defaultValue={articles.title}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <label className="pb-2 text-slate-300 text-lg" htmlFor="subTitle">
                        Article Sub Title
                    </label>
                    <input
                        name="subTitle"
                        className="w-full p-1 border-slate-300 text-[#151c2c] rounded-sm"
                        type="text"
                         defaultValue={articles.subTitle}
                    />
                </div>
                <div className=" flex flex-col items-start">
                    <label className="pb-2 text-slate-300 text-lg" htmlFor="image">
                        Article Image URL
                    </label>
                    <input
                        name="image"
                        className="w-full p-1 border-slate-300 text-[#151c2c] rounded-sm"
                        type="text"
                        defaultValue={articles.image}
                    />
                </div>
                <div className="">
                    <div className="flex-1 w-full border-slate-300 text-[#151c2c] rounded-md">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="Category">
                            Article Category
                        </label>
                        <select
                            name="Category"
                            defaultValue={articles.Category}
                            className="p-1 pb-2 w-full border-slate-300 text-[#151c2c] rounded-sm"
                        >
                            <option value="Gym">Gym</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Pilates">Pilates</option>
                            <option value="Strength">Strength</option>
                            <option value="Meditation">Meditation</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Spa">Spa</option>
                            <option value="Sports">Sports</option>
                            
                        </select>
                    </div>
                    {/* <div className="flex-1 w-full border-slate-300 text-[#151c2c] rounded-sm">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="publishDate">
                            Publish Date
                        </label>
                        <input
                            id="publishDate"
                            name="publishDate"
                            
                            defaultValue={articles.publishDate}
                            className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                            type="date"
                        />
                    </div> */}
                </div>
                {/* <div className=" flex flex-col items-start">
                    <label className="pb-2 text-slate-300 text-lg" htmlFor="publisher">
                        Publisher
                    </label>
                    <input
                        name="publisher"
                        defaultValue={articles.publisher}
                        className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                        type="text"
                    />
                </div> */}
                <div className=" flex flex-col items-start">
                    <label className="pb-2 text-slate-300 text-lg" htmlFor="reviewer">
                        Reviewer
                    </label>
                    <input
                        name="reviewer"
                        defaultValue={articles.reviewer}
                        className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                        type="text"
                    />
                </div>
                <div className=" text-center my-4">
                    <input
                        className=" btn btn-ghost text-white hover:bg-slate-300 hover:text-[#151c2c] border-2 border-white transition-all duration-500  text-lg"
                        type="submit"
                        value="Update Article"
                    />
                </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateArticles;