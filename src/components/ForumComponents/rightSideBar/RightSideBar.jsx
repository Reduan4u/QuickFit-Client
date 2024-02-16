"use client"

import Loading1 from '@/components/Loading/Loading1';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';



const RightSideBar = () => {

    const axiosPublic = useAxiosPublic();
    const [newestPost, setNewestPost] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = async() => {

       await axiosPublic.post('/forum/search', {searchTerm})
       console.log(searchTerm)
    }


    React.useEffect(() => {
        const fetchData = async () => {
            const data = await axiosPublic.get('/forum/find/newestpost')
            setNewestPost(data?.data)
        }

        fetchData();
    }, [axiosPublic])

    if (!newestPost) {
        return <Loading1></Loading1>;
    }

    return (
        <div className='my-6 mx-auto w-[70%]'>

            {/* Search bar*/}

            <div className=' flex '>
                <input
                    type="text"
                    className='w-64 border-gray-700 rounded-box bg-[#102032] pl-5 text-white py-1'
                    placeholder='Search...'
                    onChange={handleInputChange}
                    value={searchTerm}
                />

            <button onClick={handleSearch}>Search</button>
              
            </div>


            {/* NEW DISCUSSIONS renderding */}

            <div className="text-[#fff] mt-5">
                <h2 className="text-gray-700 ">NEW DISCUSSIONS</h2>

                {
                    newestPost?.slice(0, 7).map((post, index) => (
                        <div key={index}>

                            <div className='flex items-center justify-start gap-2 mt-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrgQVEL_0Ulowu6YsjCffVSSFilGxKCAIOvYe2ARAuHYnqaMyvJuluOEiOn2PuRxOEt8&usqp=CAU" alt="avatar image" className='rounded-full h-4 w-4' />

                                <Link href={`userprofile/${post?.userEmail}`} >
                                <p className="text-[#2a4bf1ee] text-[14px]">{post?.userName ? post.userName : post?.userEmail}</p>
                                </Link>
                            </div>

                            <div className="mt-1">
                                <Link href={`/forum/${post?._id}`}>  <h2> {post?.title}</h2> </Link>
                               
                            </div>

                            <div className='flex items-center justify-start gap-2 mt-1'>
                                <p className='text-gray-700 text-[14px]'>{moment(post?.date).format("DD MMMM")}</p>
                                <div className='text-gray-700 text-[15px] pb-1'> . </div>
                                <p className='text-gray-700 text-[14px]'>{post?.comments?.length} Comments</p>
                            </div>

                        </div>
                    ))
                }

            </div>



            {/* POPULAR POSTS renderding */}

            <div className="text-[#fff] mt-10">
                <h2 className="text-gray-700 ">POPULAR POSTS</h2>

                <div>
                    <div className='flex items-center justify-start gap-2 mt-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrgQVEL_0Ulowu6YsjCffVSSFilGxKCAIOvYe2ARAuHYnqaMyvJuluOEiOn2PuRxOEt8&usqp=CAU" alt="avatar image" className='rounded-full h-4 w-4' />

                        <p className="text-[#2a4bf1ee] text-[14px]">SouravDutta</p>
                    </div>

                    <div className="mt-1">
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h2>
                    </div>

                    <div className='flex items-center justify-start gap-2 mt-1'>
                        <p className='text-gray-700 text-[14px]'>24 Feb</p>
                        <div className='text-gray-700 text-[15px] pb-1'> . </div>
                        <p className='text-gray-700 text-[14px]'>14 Comments</p>
                    </div>

                </div>

            </div>

        </div>


    );
};

export default RightSideBar;