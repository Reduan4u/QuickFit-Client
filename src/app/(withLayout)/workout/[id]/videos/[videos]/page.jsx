
import WorkoutVideos from '@/components/WorkOuts/WorkoutVideos/WorkoutVideos';
import React from 'react';

const page = async({params}) => {
    console.log(params)
    return (
        <div>
            <WorkoutVideos params={params}></WorkoutVideos>
        </div>
    );
};

export default page;