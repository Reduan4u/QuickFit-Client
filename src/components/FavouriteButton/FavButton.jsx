import React from "react";
import { FaBookmark } from "react-icons/fa";

const FavButton = ({ data }) => {
  console.log(data);
  return (
    <div>
      <button className=" btn btn-sm bg-transparent border-none hover:bg-transparent">
        <FaBookmark className=" text-3xl text-orange-800" />
      </button>
    </div>
  );
};

export default FavButton;
