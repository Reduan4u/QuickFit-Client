import OrderForm2 from '@/components/Eshop/orderForm/orderForm2';
import React from 'react';

function DynamicOrder({ params }) {
    return <OrderForm2 params={params}></OrderForm2>
}

export default DynamicOrder;