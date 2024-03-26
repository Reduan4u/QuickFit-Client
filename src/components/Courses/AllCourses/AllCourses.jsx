"use client"
import SectionHeading from '@/components/Common/SectionHeading';
import CourseCard from '../cards/CourseCard';
import UserReviews from '../CourseDetails/RightSide/TabContent/UserReviews';

const AllCourses = async () => {

    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/courses",  {
        cache: "no-store"
    }) ;
    const courses = await res.json()


    return (
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 gap-10 w-[70vw] mx-auto">
            {
                courses?.slice(0, 6).map(course => <CourseCard key={course?._id} course={course}/>)
            }
        </div>

        <div>
            <SectionHeading title="User Reviews"></SectionHeading>
            <div className='w-10/12 mx-auto'>
                <UserReviews></UserReviews>
            </div>
        </div>
       </>
    );
};

export default AllCourses;