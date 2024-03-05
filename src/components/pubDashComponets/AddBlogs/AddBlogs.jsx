"use client";

import UseContext from "@/hooks/UseContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AddBlogs = () => {
  const { user } = UseContext();
  const axios = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const date = new Date().toISOString().split("T")[0];
    const author = user.displayName;
    const p1 = form.p1.value;
    const p2 = form.p2.value;
    const p3 = form.p3.value;
    const paragraph = [p1, p2, p3];
    const img = form.img.value;
    const category = form.category.value;
    const data = {
      title,
      type,
      description,
      date,
      author,
      paragraph,
      img,
      category,
    };

    if (type === "monthly") {
      axios
        .post("/monthlyPicks", data)
        .then((res) => {
          toast.success("Blog Created on Monthly Picks");
          toast.success("Wait for the Admin Confirmation");
          form.reset();
        })
        .catch((err) => {
          
        });
    } else if (type === "stories") {
      axios
        .post("/addStories", data)
        .then((res) => {
          toast.success("Blog Created on New Strories");
          toast.success("Wait for the Admin Confirmation");
          form.reset();
        })
        .catch((err) => {
          
        });
    }
  };
  return (
    <div className=" flex justify-center my-5">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Blog Title
          </label>
          <input
            name="title"
            className=" w-[80vw] text-[#151c2c]  md:w-[30vw] p-3 rounded-md"
            type="text"
          />
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Blog Image URL
          </label>
          <input
            name="img"
            className=" w-[80vw] text-[#151c2c]  md:w-[30vw] p-3 rounded-md"
            type="text"
          />
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Blog Type
          </label>
          <select
            name="type"
            className=" w-[80vw]  md:w-[30vw] p-3 rounded-md text-[#151c2c] text-xl"
          >
            <option value="monthly">Monthly Picks</option>
            <option value="stories">New Stories</option>
          </select>
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Blog Category
          </label>
          <select
            name="category"
            className=" w-[80vw]  md:w-[30vw] p-3 rounded-md text-[#151c2c] text-xl"
          >
            <option value="monthly">Nutrition</option>
            <option value="stories">Fitness</option>
            <option value="stories">Mental Health</option>
          </select>
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Blog Description
          </label>
          <textarea
            name="description"
            rows="3"
            className=" w-[80vw]  md:w-[40vw] p-3 rounded-md text-[#151c2c] text-xl "
          />
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Paragraph (1st Para)
          </label>
          <textarea
            name="p1"
            cols="12"
            rows="4"
            className=" w-[80vw]  md:w-[40vw] p-3 rounded-md text-[#151c2c] text-xl "
          />
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Paragraph (2nd Para)
          </label>
          <textarea
            name="p2"
            cols="12"
            rows="4"
            className=" w-[80vw]  md:w-[40vw] p-3 rounded-md text-[#151c2c] text-xl "
          />
        </div>
        <div className=" flex flex-col items-start my-2">
          <label className=" text-2xl my-2" htmlFor="title">
            Paragraph (3rd Para)
          </label>
          <textarea
            name="p3"
            cols="12"
            rows="4"
            className=" w-[80vw]  md:w-[40vw] p-3 rounded-md text-[#151c2c] text-xl "
          />
        </div>
        <div className=" text-center my-4">
          <input
            className=" btn btn-ghost hover:bg-white hover:text-[#151c2c] border-2 border-white transition-all duration-500  text-xl   "
            type="submit"
            value="Create Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
