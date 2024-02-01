'use client'
import Image from 'next/image';
import Link from 'next/link';

const BookDetails1 = async({params}) => {

    // let selectedPrice = 30;
    // const handleRadioChange = (price) => {
    //     selectedPrice = price;
    //     console.log( selectedPrice)
    // }



    // console.log(params)
    //Book
    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/books/${params.id}`, {
        cache: "no-store"
    });
    const data = await res.json();
    const bookdata = data._id;
    // console.log(bookdata)



    return (
        <div>
            <h1 className='text-center font-bold text-5xl py-5'>Book Details</h1>
            <div className="hero min-h-full">

                <div className="hero-content flex-col md:flex-row gap-20">
                    <div className="rounded-lg">
                        <Link href={`/category/${params.id}`}><button className=" py-5 text-xl font-bold underline">Back To The Previous Page ...</button></Link>
                        <Image
                            height={500}
                            width={500}
                            alt='types'
                            objectFit="cover"
                            src={data.image}
                            className="w-full h-96"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl md:text-4xl font-bold">{data.BookName}</h1>
                        <p className="py-5 text-base">{data.description}</p>
                        <div className='py-5'>
                            <div className='flex justify-between items-center border-t-2 border-black'>
                                <div className='flex gap-2  py-2'>
                                    <input className=''
                                        type="radio"
                                        name='Hard Copy'
                                        value='Hard Copy'
                                        // onChange={() => handleRadioChange(data.FirstPrice)}
                                        checked={selectedPrice === data.FirstPrice}
                                    />Hard Copy
                                </div>
                                <div>
                                    <p>{data.FirstPrice}$</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center border-y-2 border-black'>
                                <div className='flex gap-2  py-2'>
                                    <input className=''
                                        type="radio"
                                        name='eBook Download (PDF/EPUB)'
                                        value='eBook Download (PDF/EPUB)'
                                        // onChange={() => handleRadioChange(data.SecondPrice)}
                                        checked={selectedPrice === data.SecondPrice}
                                    />eBook Download (PDF/EPUB)
                                </div>
                                <div>
                                    <p>{data.SecondPrice}$</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center border-b-2  border-black'>
                                <div className='flex gap-2  py-2'>
                                    <input className=''
                                        type="radio"
                                        name='Print & eBook Download'
                                        value='Print & eBook Download'
                                        // onChange={() => handleRadioChange(data.ThirdPrice)}
                                        checked={selectedPrice === data.ThirdPrice}
                                    />Print & eBook Download
                                </div>
                                <div>
                                    <p>{data.ThirdPrice}$</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn bg-red-800 text-white rounded-none uppercase">Add To Cart </button>
                        <Link href={`/category/bookOrderForm/${bookdata}?selectedPrice=${selectedPrice}`}>
                            <button className='btn bg-red-800 text-white rounded-none uppercase'>Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BookDetails1;