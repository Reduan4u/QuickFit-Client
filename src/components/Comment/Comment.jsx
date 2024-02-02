"use client";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Comment = ({ data }) => {
  console.log(data);
  const { user } = useContext(AuthContext);
  console.log(user?.photoURL);

  const [commentText, setCommentText] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/comments/${data._id}`)
      .then((res) => {
        console.log(res.data);
        setCommentText(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data._id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const dateSt = new Date();
    const date = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    })
      .format(new Date(dateSt))
      .replace(" ", ",");
    const blogId = data._id;
    const img = user?.photoURL;
    const name = user?.displayName;

    const commentData = { comment, date, blogId, img, name };

    setCommentText([...commentText, commentData]);
    e.target.comment.value = "";
    axios
      .post("http://localhost:4000/api/v1/comments", commentData)
      .then((res) => {
        if (res.data.blogId) {
          toast.success("Your comment has been posted");
        }
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="max-w-md bg-white shadow-md p-4 mt-4 left-1 mb-5">
        <h2 className="text-2xl font-bold mb-4">Comment Box</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Type your comment here..."
            name="comment"
          />
          <div className="mt-2">
            <input
              value="Submit Cmment"
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            />
          </div>
        </form>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-5">
        {commentText?.map((item, index) => (
          <div key={index} className=" bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={item?.img}
                  alt="something"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {item?.name}
                </p>
                <p className="text-xs text-gray-500">{item?.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-800">{item?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
