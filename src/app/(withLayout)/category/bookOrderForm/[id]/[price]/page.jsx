import BookOrderForm from '@/components/Home/healthAndFitness/BookOrderForm/BookOrderForm';
import React from 'react';

const page = ({params}) => {
    return (
        <div>
       
            <BookOrderForm bookId={params.id} price={params.price}></BookOrderForm>
        </div>
    );
};

export default page;