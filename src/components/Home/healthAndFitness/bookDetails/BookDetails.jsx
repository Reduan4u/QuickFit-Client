'use client'
import Button1 from '@/components/Common/Button1';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LeftBtn from '../Btn/LeftBtn';

const BookDetails = ({ params }) => {

  // State to keep track of the selected radio button value
  const [selectedValue, setSelectedValue] = useState(null);
  const [bookData, setBookData] = useState(null);
 // console.log(selectedValue)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/books/${params.id}`, {
          cache: "no-store"
        });
        const data = await res.json();
        setBookData(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [params.id]);


  //console.log(bookData?._id)
  const handleOrder = (e) => {
    e.preventDefault()
    //console.log("heloo")
  }



  return (
    <div>
      <h1 className='text-center font-bold text-5xl py-5'>Book Details</h1>
      <div className="hero min-h-full">

        <div className="hero-content flex-col md:flex-row gap-20">

          {/* image div  */}
          <div className="rounded-lg">
            <Link href={`/category/${params.id}`}><button className=" py-5 text-xl font-bold underline">Back To The Previous Page ...</button></Link>
            <Image
              height={500}
              width={500}
              alt='types'
              objectFit="cover"
              src={bookData?.image}
              className="w-full h-96"
            />
          </div>

          {/* content div for order a book starts */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleOrder}>
              <h1 className="text-2xl md:text-4xl font-bold">{bookData?.BookName}</h1>
              <p className="py-5 text-base">{bookData?.description}</p>
              <div className="py-5">
                {/* Input for hardcopy */}
                <div className="flex justify-between items-center border-t-2 border-black">
                  <div className="flex gap-2  py-2">
                    <input
                      id={bookData?.FirstPrice}
                      type="radio"
                      name="hard"
                      value={bookData?.FirstPrice}
                      checked={selectedValue === bookData?.FirstPrice}
                      onChange={() => setSelectedValue(bookData?.FirstPrice)}
                    />
                    Hard Copy
                  </div>
                  <div>
                    <p>{bookData?.FirstPrice}$</p>
                  </div>
                </div>

                {/* Input for eBook Download */}
                <div className="flex justify-between items-center border-y-2 border-black">
                  <div className="flex gap-2  py-2">
                    <input
                      id={bookData?.SecondPrice}
                      type="radio"
                      name="pdf"
                      value={bookData?.SecondPrice}
                      checked={selectedValue === bookData?.SecondPrice}
                      onChange={() => setSelectedValue(bookData?.SecondPrice)}
                    />
                    eBook Download (PDF/EPUB)
                  </div>
                  <div>
                    <p>{bookData?.SecondPrice}$</p>
                  </div>
                </div>

                {/* Input for Print & eBook Download */}
                <div className="flex justify-between items-center border-b-2  border-black">
                  <div className="flex gap-2  py-2">
                    <input
                      id={bookData?.ThirdPrice}
                      type="radio"
                      name="print"
                      value={bookData?.ThirdPrice}
                      checked={selectedValue === bookData?.ThirdPrice}
                      onChange={() => setSelectedValue(bookData?.ThirdPrice)}
                    />
                    Print & eBook Download
                  </div>
                  <div>
                    <p>{bookData?.ThirdPrice}$</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-5'>
              <div>
              <button className="btn bg-primary text-white rounded-none uppercase">Add To Cart
              </button>
              </div>
              <div>
              <Link href={`/category/bookOrderForm/${bookData?._id}/${selectedValue}`}>
                <button
                  className=" bg-primary btn text-white rounded-none uppercase"
                  disabled={!selectedValue}
                >
                  Order Now
                </button>
              </Link>
              </div>
              </div>
            </form>
          </div>
          {/* content div for order a book ends */}
        </div>
      </div>
      <div className="flex justify-end items-center py-5 px-5 w-10/12 mx-auto">
                <Link href={`/category/${params.id}`}><LeftBtn></LeftBtn></Link>
                {/* <RightBtn></RightBtn> */}
            </div>
    </div>
  );
};

export default BookDetails;