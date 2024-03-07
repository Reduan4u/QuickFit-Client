"use client"

import { AuthContext } from '@/components/Provider/AuthProvider';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';  // Import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });  // Use dynamic import with ssr: false

import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';

const Post = () => {

  const axiosPublic = useAxiosPublic();

  const { control, register, handleSubmit, reset } = useForm();

  const categories = ['Health', 'Food', 'Fitness', 'Others'];
  const { user } = useContext(AuthContext);

console.log(user?.displayName);
console.log(user?.photoURL);



  const onSubmit = async (data) => {

    const additionalData = {
      userName : user?.displayName,
      userPhoto: user?.photoURL,
      userEmail: user?.email,
      date: new Date(),
      likes : [],
      comments: []
      
    }

    const updatedData = {
      ...data,
      ...additionalData
    }

    console.log(updatedData);

  
      await axiosPublic.post("/forum", updatedData)
      .then((data)=>{
        if (data?.data?._id) {
          console.log(data?.data?._id)
          Swal.fire({
            icon: "success",
            title: `Posted!!`,
            text: "Your content was posted succesfully",
          });
        }
      })
    
      
      reset();


  };

  return (
    <div className=" mx-auto lg:w-[70%] mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">
            Category
          </label>
          <select
            id="category"
            {...register('category')}
            className={`mt-1 p-2 border rounded w-full bg-gray-300`}
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md bg-gray-300"
            {...register('title', { required: 'Title is required' })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-600 ">
            Content
          </label>
          {/* Use Controller from react-hook-form to integrate with ReactQuill */}
          <Controller
            name="content"
            control={control}
            defaultValue=""
           
            render={({ field }) => (
              <ReactQuill
                value={field.value}
                onChange={(value) => field.onChange(value)}
                className="bg-gray-300"
              />
            )}
          />
        </div>
        <div className="text-right ">
          <button type="submit" className="font-medium px-5 py-3 rounded-3xl bg-one hover:bg-three text-four  transition-all duration-500">
            Post
          </button>
        </div>
        
      </form>

    
    </div>
  );
};

export default Post;
