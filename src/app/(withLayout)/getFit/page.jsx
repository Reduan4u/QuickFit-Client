import MotivationForGetFIt from '@/components/Home/MotivationForGetFIt/MotivationForGetFIt';
import Route2Heading from '@/components/Route2/route2Heading/Route2Heading';
import Route2MoreStories from '@/components/Route2/route2MoreStories/Route2MoreStories';
import Route2SpotLight from '@/components/Route2/route2SpotLight/Route2SpotLight';
import React from 'react';

const ManageWeight = () => {
    return (
        <div>
            <Route2Heading></Route2Heading>
            <Route2SpotLight></Route2SpotLight>
            <Route2MoreStories></Route2MoreStories>
            <MotivationForGetFIt></MotivationForGetFIt>

        </div>
    );
};

export default ManageWeight;