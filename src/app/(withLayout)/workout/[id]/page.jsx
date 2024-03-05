import Duration from '@/components/WorkOuts/Duration/Duration';
import React from 'react';

const DynamicType = async({params}) => {
    //

    return (
        <div>
            {/* dfsfdffg :{params.type} */}
            <Duration params={params}></Duration>
        </div>
    );
};

export default DynamicType;