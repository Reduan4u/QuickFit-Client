import React from 'react';
import useEshopProducts from "@/hooks/useEshopProducts";
import Marquee from "react-marquee-slider";

function ProductStat(props) {
    const { products } = useEshopProducts();

    return (
        <div className='bg-dashPrimary p-5 rounded shadow-xl'>
            <h2 className='text-3xl font-semibold tracking-wide mb-5'>Available Products:</h2>
            <Marquee>
                {products.map(product => ( <div key={product._id} className='mr-5 relative'>
                    <img src={product.image} alt={product.name} className='h-72 w-60 object-cover' />
                    <p className='absolute bottom-0 left-0 right-0 h-16 py-2 bg-black bg-opacity-70 tracking-wide text-center font-semibold text-xl text-dashTertiary flex items-center justify-center'><span>{product?.title}</span></p>
                </div>
                   
                ))}
            </Marquee>
        </div>
    );
}

export default ProductStat;
