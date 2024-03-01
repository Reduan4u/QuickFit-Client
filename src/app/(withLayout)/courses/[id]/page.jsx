import CourseDetails from '@/components/Courses/CourseDetails/CourseDetails';
import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <CourseDetails params={params}></CourseDetails>
        </div>
    );
  
}

export default page