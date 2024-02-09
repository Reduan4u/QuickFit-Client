"use client"

import useAxiosPublic from '@/hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import moment from 'moment';
import Link from 'next/link';


const Health = () => {

    const axiosPublic = useAxiosPublic();
    const [posts, setPosts] = useState([]);



  
       const getData = async() => {
        await axiosPublic.get(`/forum/Health`)
        .then((data)=>{
           setPosts(data.data);

        })
       }
        
       useEffect(()=>{
        getData()
       },[getData])
      

    //   console.log(posts)

    return (
        <div className='pb-10'>

        {
            posts?.map(post=>(
                <div key={post._id} className='border border-gray-700 my-4 mx-4 text-[#fff] bg-[#102032]'>
            <div className='mx-8 my-6'>
                <div>
                    <div className='flex items-center justify-start gap-6'>

                        <div className='border border-gray-700 flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
                            <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span>
                        </div>

                        <div>
                            <Link href={`/forum/${post?._id}`}> <h3>{post?.title} </h3> </Link>
                           
                            
                           
                            <div className='flex items-center justify-start gap-2 mt-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrgQVEL_0Ulowu6YsjCffVSSFilGxKCAIOvYe2ARAuHYnqaMyvJuluOEiOn2PuRxOEt8&usqp=CAU" alt="avatar image" className='rounded-full h-4 w-4' />

                                <p className='text-[#2a4bf1ee] text-[14px]'>{post?.userEmail}</p>
                                <div className='text-gray-700 text-[15px] pb-1'> . </div>
                                {/* <span className='text-gray-700 text-[14px] align-middle'> . </span> */}
                                <p className='text-gray-700 text-[14px]'>{moment(post?.date).format("DD MMMM")}</p>
                                <div className='text-gray-700 text-[15px] pb-1'> . </div>
                                <p className='text-gray-700 text-[14px]'>{post?.comments.length} comments</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

            ))
        }
      


    </div>
  
    );
};

export default Health;