
import Image from 'next/image';
import './FreeChallenges.css'
import Button1 from '@/components/Common/Button1';
import Link from 'next/link';
const FreeChallenges = () => {
    return (
        <div className="featured-item bg-fixed text-white my-20">
        <div className="flex justify-center items-center gap-2 bg-black bg-opacity-60 pb-20 pt-12 px-5 md:px-10 lg:px-36 ">
            {/* <div className=''>
                <img className='h-52' src='https://i.postimg.cc/kX0ykYsh/full-shot-man-doing-yoga-mat.jpg' alt="" />
            </div> */}
            <div className="md:ml-10">
                <p className="uppercase text-2xl text-center">Free 28 Day Fitness Challenge</p>
                <h1 className='text-4xl text-primary text-center  py-4'>Get Fit & Happy</h1>
                <p className='w-10/12 text-center mx-auto text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id, inventore eius fugit praesentium asperiores eaque voluptatem ipsum, ducimus delectus quod rem? Beatae praesentium blanditiis sed maiores laboriosam, fugit reiciendis.</p>
               <div className='flex justify-center items-center pt-2'>
               <Link href='/challenge'><button className='btn rounded-none uppercase border-primary bg-transparent text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300'>Get Started</button></Link>
               </div>
            </div>
        </div>
    </div>
    );
};

export default FreeChallenges;