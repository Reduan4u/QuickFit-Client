import React from 'react';

function LatestProductCard({product}) {

    return (
        <div>
           <div className='h-[50vh]'>
           <img src={product?.image} className='h-full object-cover' />
           </div>
        </div>
    );
}

export default LatestProductCard;