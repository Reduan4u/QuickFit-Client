"use client";
import React, { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const axios = require("axios");

const FavButton = ({ data }) => {
  const { user } = useContext(AuthContext);

  const handleFav = () => {
    const blogId = data?._id;
    const email = user?.email;
    const title = data?.title;
    const description = data?.description;
    const date = data?.date;
    const img = data?.img;
    const author = data?.author;
    const category = data?.category;
    const paragraph = data?.paragraph;

    const favData = {
      blogId,
      email,
      title,
      description,
      date,
      img,
      author,
      category,
      paragraph,
    };

    axios
      .post("https://quick-fit-server.vercel.app/api/v1/favourites", favData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully Added to Favourite");
        } else {
          toast.error("Already in favourite");
        }
      })
      .catch((err) => {
        
      });
    // console.log(blogId, email);
  };

  return (
    <div>
      <button
        onClick={handleFav}
        className=" btn btn-sm bg-transparent border-none hover:bg-transparent"
      >
        <FaBookmark className=" text-2xl text-orange-800" />
      </button>
    </div>
  );
};

export default FavButton;
