import OrderForm from '@/components/Eshop/orderForm/OrderForm';
import React from 'react';

function page({params}) {
    return  <OrderForm params={params}></OrderForm>
}

export default page;