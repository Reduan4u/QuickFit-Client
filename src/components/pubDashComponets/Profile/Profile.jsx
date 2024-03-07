"use client";
import useUser from "@/hooks/useUser";
// import Image from "next/image";
import React, { useContext, useState } from "react";


const Profile = () => {
  const { data } = useUser();
  console.log(data)

  return (
    <div>

      <div className="max-w-md mx-auto my-8 p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">My Profile</h1>

        <div className="flex flex-col items-center">
          <img
            src={data?.image}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <div>
            <h2 className="text-xl font-bold uppercase ">{data?.role}</h2>
            <h2 className="text-xl font-medium">{data?.name}</h2>
            <p className="text-gray-600">{data?.email}</p>
          </div>
        </div>
        <div className="my-6">
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
            Upload Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            // onChange={handleImageChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
          />
        </div>
        <button
          //onClick={() => handleProfileUpdate(data._id)}
          className="w-full mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:border-indigo-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
