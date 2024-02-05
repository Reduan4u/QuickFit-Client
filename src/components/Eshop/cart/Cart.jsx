"use client"

import SectionHeading from '@/components/Common/SectionHeading';
import { AuthContext } from '@/components/Provider/AuthProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const Cart = async({params}) =>{
    const {user} = useContext(AuthContext)

    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/cart/${user?.email}`,{cache:"no-store"})
    const cart = await res.json()

    const myCart = cart?.filter(item => item.email == user?.email)
    
    return (
        <div className='mt-10 mb-20 w-10/12 mx-auto'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* header left side  */}
            <SectionHeading title={"Shopping Cart"}></SectionHeading>

             {/* right side where payment will show  */}
             <div className='text-xl font-bold flex flex-col items-center'>
                <p>Total Amount : 120$</p>
                <Link href={`/eshop/orderForm/pay/`}>
                </Link>
                <button className='px-7 py-1 mt-2 border border-neutral-800 font-medium hover:text-white hover:bg-neutral-800 transition-all duration-300'>Pay</button>
             </div>

             {/* carts */}
            </div>

            
        </div>
    );
}

export default Cart;