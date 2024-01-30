import OrderForm from '@/components/Eshop/orderForm/OrderForm';
import React from 'react';

function DynamicOrder ({params}) {
    return <OrderForm params={params}></OrderForm>
}

export default DynamicOrder ;