import Image from 'next/image';
import React from 'react';

function LatestProductCard({product}) {

    return (
        <div>
           <div className='h-[50vh]'>
           <Image
             height={500}
             width={500}
            src={product?.image} className='h-full object-cover' />
           </div>
        </div>
    );
}

export default LatestProductCard;