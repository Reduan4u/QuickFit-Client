"use client";
import React, { useContext, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const axios = require("axios");

const LikeFunction = (data) => {
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const handleLike = () => {
    axios
      .patch(`https://quick-fit-server.vercel.app/api/v1/likes/${user.email}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Liked");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        onClick={() => {
          setLike(!like);
          handleLike();
        }}
        className=" btn bg-transparent hover:bg-transparent border-none  text-3xl"
      >
        {like ? <AiFillLike /> : <AiOutlineLike />}
      </button>
    </div>
  );
};

export default LikeFunction;
