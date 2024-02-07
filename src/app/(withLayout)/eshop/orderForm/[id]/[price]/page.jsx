import React from 'react';

function page({params}) {
    return (
        <div>
            You have to pay {params.price}
        </div>
    );
}

export default page;