'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LeftBtn from '../Btn/LeftBtn';
import SectionHeading from '@/components/Common/SectionHeading';
import LoginButton from '@/components/Common/LoginButton';
import Ebanner from '@/components/Eshop/Ebanner/Ebanner';

const BookDetails = ({ params }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [bookData, setBookData] = useState(null);

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
  const handleOrder = (e) => {
    e.preventDefault()
  }



  return (
    <div>
      {/* <SectionHeading title={'Book Details'}></SectionHeading> */}
      <Ebanner heading={'Book Details'} image={'https://i.postimg.cc/1Xj55DnK/notepad-table.jpg'}></Ebanner>
      <SectionHeading title={'Book Details'}></SectionHeading>
      <div className="hero min-h-full">

        <div className="hero-content flex-col md:flex-row gap-20">

          {/* image div  */}
          <div className="rounded-lg">
            <Link href={`/category/${params.id}`}><button className="text-two py-5 text-xl font-bold underline">Back To The Previous Page ...</button></Link>
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
              <h1 className="text-2xl text-one md:text-4xl font-bold">{bookData?.BookName}</h1>
              <p className="py-5 text-base text-justify">{bookData?.description}</p>
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
                  <LoginButton>Add to Cart</LoginButton>
                </div>
                <div>
                  <Link href={`/category/bookOrderForm/${bookData?._id}/${selectedValue}`}>
                    <LoginButton disabled={!selectedValue}>Order Now</LoginButton>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          {/* content div for order a book ends */}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;