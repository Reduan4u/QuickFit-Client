import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

const Announcement = () => {
    return (
        <div className='pb-10'>

            <div className='border border-gray-700 my-4 max-w-2xl mx-auto text-[#fff] bg-[#102032]'>
                <div className='mx-4 md:mx-8 my-6'> {/* Added responsive margin on small screens */}

                    <div>
                        <div className='flex flex-col md:flex-row items-center justify-start gap-6'> {/* Updated to flex-column on small screens */}

                            <div className='border border-gray-700 flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
                                <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>244</span>
                            </div>

                            <div className='mt-4 md:mt-0'> {/* Added margin-top on small screens */}
                                <h3 className='text-base  lg:text-2xl'>The Silent Epidemic: Understanding and Addressing the Impact of Stress on Your Health</h3> {/* Adjusted heading size on small screens */}

                                <div className='flex items-center justify-start gap-2 mt-2 md:mt-4'> {/* Adjusted margin-top on small screens */}
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrgQVEL_0Ulowu6YsjCffVSSFilGxKCAIOvYe2ARAuHYnqaMyvJuluOEiOn2PuRxOEt8&usqp=CAU" alt="avatar image" className='rounded-full h-4 w-4 md:h-8 md:w-8' /> {/* Adjusted image size on small screens */}

                                    <p className='text-secondary text-[14px] md:text-[16px]'>SouravDutta</p> {/* Adjusted text size on small screens */}
                                    <div className='text-gray-700 text-[15px] md:text-[16px] pb-1'> . </div>
                                    <p className='text-gray-700 text-[14px] md:text-[16px]'>24 Feb</p>
                                    <div className='text-gray-700 text-[15px] md:text-[16px] pb-1'> . </div>
                                    <p className='text-gray-700 text-[14px] md:text-[16px]'>14 Comments</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Announcement;
