import React from 'react';

const page = ({ params }) => {
    return (
        <div className='text-center my-52'>
            Success : {params.id}
        </div>
    );
};

export default page;