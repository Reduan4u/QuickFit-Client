import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Book = async ({ params }) => {
    //Book
    const bookres = await fetch(`https://quick-fit-server.vercel.app/api/v1/books/${params.id}`, {
        cache: "no-store"
    });
    const book = await bookres.json();
    return (
        <div>
            <div className="hero min-h-full border border-y-2">
                <div className="hero-content flex-col md:flex-row gap-20">
                    <div className="rounded-lg">
                        <h1 className=" py-5 text-xl font-bold">You might also be interested in...</h1>
                        <Image
                            height={500}
                            width={500}
                            alt='types'
                            objectFit="cover"
                            src={book.image}
                            className="w-full h-96"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl md:text-4xl font-bold">{book.BookName}</h1>
                        <p className="py-6 text-base">{book.description}</p>
                        <Link href={`/category/${params.id}/${book._id}`}><button className="btn bg-red-800 text-white rounded-none uppercase">Read More <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;