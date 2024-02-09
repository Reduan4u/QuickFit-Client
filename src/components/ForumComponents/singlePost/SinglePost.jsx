"use client"

import Loading1 from '@/components/Loading/Loading1';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleUp } from 'react-icons/fa';
import CommentForm from '../commentForm/CommentForm';

const SinglePost = ({ params }) => {

    const axiosPublic = useAxiosPublic();
    const [singlePostData, setSinglePostData] = React.useState(null);
    const { control, register, handleSubmit, reset } = useForm();

    React.useEffect(() => {

        const fetchData = async () => {
            const data = await axiosPublic.get(`/forum/single/${params.id}`);
            setSinglePostData(data?.data);
        };

        fetchData();

    }, [axiosPublic, params.id]);

    if (!singlePostData) {
        return <Loading1></Loading1>; 
    }

    // const onSubmit = async (data) => {
    //     // You can send the comment data to the server here
    //     // For example, using axios.post or fetch API
    //     // After submitting, update the singlePostData or fetch the updated data
        
    //     // For demonstration, let's log the comment data
    //     console.log('New Comment:', data);
    //     reset();
    // };

    return (
        <div className='text-[#f2f2f2] mx-auto max-w-3xl'>
        <div className='flex items-center justify-start gap-10'>

            <div className='border border-gray-700 px-1 py-1 rounded-sm'>
                <FaAngleUp className='text-[#818CF8] text-center ' /> 
                
            <div className='text-[#2a4bf1ee] text-[14px] text-center'>{singlePostData?.likes.length}</div>
            </div>

            <span className='text-6xl'>{singlePostData?.title}</span>
        </div>

        <div>

            <div className=' mt-6 max-w-xl mx-auto'>

                <div className='flex items-center justify-start gap-2 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrgQVEL_0Ulowu6YsjCffVSSFilGxKCAIOvYe2ARAuHYnqaMyvJuluOEiOn2PuRxOEt8&usqp=CAU" alt="avatar image" className='rounded-full h-4 w-4' />

                    <p className='text-[#2a4bf1ee] text-[14px]'>{singlePostData?.userEmail}</p>
                    <div className='text-gray-700 text-[15px] pb-1'> . </div>
                    {/* <span className='text-gray-700 text-[14px] align-middle'> . </span> */}
                    <p className='text-gray-700 text-[14px]'>{moment(singlePostData?.date).format("DD MMMM")}</p>
                    <div className='text-gray-700 text-[15px] pb-1'> . </div>
                    <p className='text-gray-700 text-[14px]'>{singlePostData?.comments.length} comments</p>
                </div>

                <div className='mt-10'>
                    <div dangerouslySetInnerHTML={{ __html: singlePostData?.content }} />
                </div>
                
                <div>
                    
                <p className='text-[18px]'>{singlePostData?.comments.length} comments</p>

                </div>


                <div>
                    {/* Comment Section */}
            <div className='mt-10'>
                <h2 className='text-2xl font-bold mb-4'>Comments</h2>

                {/* Display existing comments */}
                {/* {singlePostData?.comments.map((comment, index) => (
                    <div key={index} className='mb-4'>
                        <p>{comment.text}</p>
                    </div>
                ))} */}

                {/* Comment Input Form */}
                {/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <textarea
                        {...register('comment', { required: true })}
                        placeholder='Add a comment...'
                        className='border p-2 rounded'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 text-white px-4 py-2 rounded'
                    >
                        Submit
                    </button>
                </form> */}

                <CommentForm postId ={params?.id}/>
            </div>
                </div>

            </div>
        </div>

    </div>
    );
};

export default SinglePost;