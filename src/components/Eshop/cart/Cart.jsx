"use client"

import { AuthContext } from '@/components/Provider/AuthProvider';
import React, { useContext } from 'react';

const Cart = async({params}) =>{
    const {user} = useContext(AuthContext)

    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/cart/${user?.email}`,{cache:"no-store"})
    const cart = await res.json()

    const myCart = cart?.filter(item => item.email == user?.email)
    console.log(myCart)
    return (
        <div>
            dfs
        </div>
    );
}

export default Cart;