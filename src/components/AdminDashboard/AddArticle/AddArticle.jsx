
"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import UseContext from '@/hooks/UseContext';

const AddArticle = () => {
    const axiosSecure = useAxiosPublic();
    const [refetch, setRefetch] = useState(null);
    const { user } = UseContext();
    const [artInputs, setArtInputs] = useState([{ artTitle: '', artDetail: '' }]);

    const handleArtChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...artInputs];
        list[index][name] = value;
        setArtInputs(list);
    };

    const handleAddArtField = () => {
        setArtInputs([...artInputs, { artTitle: '', artDetail: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const subTitle = form.subTitle.value;
        const image = form.image.value;
        const Category = form.Category.value;
        const publishDate = form.publishDate.value;
        const publisher = user.displayName;
        const reviewer = form.reviewer.value;
        const Article = artInputs;

        const data = {
            title,
            subTitle,
            image,
            Category,
            publishDate,
            publisher,
            reviewer,
            Article,
        };
        console.log(data);

        axiosSecure
            .post('/articles', data)
            .then((res) => {
                if (refetch) refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Article posted successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.error('Error :', error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div className="bg-[#182237] w-full md:w-5/6 mx-auto p-10 rounded-lg">
            <h1 className="text-slate-300 font-semibold text-2xl text-center border-b-2 pb-2">Add Article</h1>
            <form onSubmit={handleSubmit} className="py-5">
                <div className="py-5">
                    <div className="flex flex-col items-start">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="title">
                            Article Title
                        </label>
                        <input
                            name="title"
                            className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                            type="text"
                        />
                    </div>
                    {/* Subtitle */}
                    <div className="flex flex-col items-start">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="subTitle">
                            Article Sub Title
                        </label>
                        <input
                            name="subTitle"
                            className="w-full p-1 border-slate-300 text-[#151c2c] rounded-sm"
                            type="text"
                        />
                    </div>
                    {/* Image */}
                    <div className="flex flex-col items-start">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="image">
                            Article Image URL
                        </label>
                        <input
                            name="image"
                            className="w-full p-1 border-slate-300 text-[#151c2c] rounded-sm"
                            type="text"
                        />
                    </div>
                    {/* Category */}
                    <div className="flex gap-10">
                        <div className="flex-1 w-full border-slate-300 text-[#151c2c] rounded-md">
                            <label className="pb-2 text-slate-300 text-lg" htmlFor="Category">
                                Article Category
                            </label>
                            <select
                                name="Category"
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
                        {/* Publish Date */}
                        <div className="flex-1 w-full border-slate-300 text-[#151c2c] rounded-sm">
                            <label className="pb-2 text-slate-300 text-lg" htmlFor="publishDate">
                                Publish Date
                            </label>
                            <input
                                id="publishDate"
                                name="publishDate"
                                className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                                type="date"
                            />
                        </div>
                    </div>
                    {/* publisher */}
                    <div className="flex flex-col items-start">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="publisher">
                            publisher
                        </label>
                        <input
                            name="publisher"
                            defaultValue={user.displayName}
                            className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                            type="text"
                        />
                    </div>
                    {/* Reviewer */}
                    <div className="flex flex-col items-start">
                        <label className="pb-2 text-slate-300 text-lg" htmlFor="reviewer">
                            Reviewer
                        </label>
                        <input
                            name="reviewer"
                            className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                            type="text"
                        />
                    </div>
                    {/* Add input fields for artTitle and artDetail */}
                    {artInputs.map((art, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <label className="pb-2 text-slate-300 text-lg" htmlFor={`artTitle-${index}`}>
                                Article Title {index + 1}
                            </label>
                            <input
                                name="artTitle"
                                id={`artTitle-${index}`}
                                value={art.artTitle}
                                onChange={(e) => handleArtChange(index, e)}
                                className="p-1 w-full border-slate-300 text-[#151c2c] rounded-sm"
                                type="text"
                            />
                            <label className="pb-2 mt-4 text-slate-300 text-lg" htmlFor={`artDetail-${index}`}>
                                Article Detail {index + 1}
                            </label>
                            <textarea
                                name="artDetail"
                                id={`artDetail-${index}`}
                                value={art.artDetail}
                                onChange={(e) => handleArtChange(index, e)}
                                className="p-1 w-full h-24 border-slate-300 text-[#151c2c] rounded-sm"
                            />
                        </div>
                    ))}
                    <div className="text-center my-4">
                        <button
                            type="button"
                            onClick={handleAddArtField}
                            className="btn btn-ghost text-white hover:bg-slate-300 hover:text-[#151c2c] border-2 border-white transition-all duration-500 text-lg"
                        >
                            Add Another Title and Detail
                        </button>
                    </div>
                    <div className="text-center my-4">
                        <input
                            className="btn btn-ghost text-white hover:bg-slate-300 hover:text-[#151c2c] border-2 border-white transition-all duration-500 text-lg"
                            type="submit"
                            value="Create Blog"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddArticle;

