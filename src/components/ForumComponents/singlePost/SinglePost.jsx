"use client"

import Loading1 from '@/components/Loading/Loading1';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleUp, FaBan, FaCross } from 'react-icons/fa';
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

                        <p className='text-[18px] mt-6'>{singlePostData?.comments.length} comments</p>

                    </div>


                    <div>
                        {/* Comment Section */}
                        <div className='mt-5 mb-10 pb-6'>


                            <CommentForm postId={params?.id} />
                        </div>


                        {
                            singlePostData?.comments?.map((comment, index) => (
                                <div key={index} className="py-4">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <div className='flex items-center justify-end gap-4 mb-2'>
                                            <p className="text-blue-500 text-sm font-semibold">{comment?.userEmail}</p>
                                            <p className="text-gray-500 text-sm">{moment(comment?.date).format("DD MMMM")}</p>
                                        </div>
                                        <div className='flex items-center justify-center gap-2 text-red-500 text-[14px]'>
                                           <button >Report</button> <FaBan></FaBan> 
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#f2f2f2] mt-6">{comment?.text}</p>
                                </div>
                            ))
                        }



                    </div>

                </div>
            </div>

        </div>
    );
};

export default SinglePost;