'use client'
import SectionHeading from "@/components/Common/SectionHeading";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";



const AllArticle = ({ params }) => {
    //
    //Article
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://quick-fit-server.vercel.app/api/v1/articles')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const filterData = data?.filter(item => item.Category == params.id)
    return (
        <div>
            <div className="">
                <SectionHeading title={'Recent Articles'}></SectionHeading>
                <div className=" flex justify-center items-center py-2 my-5 border-y-4 border-one">
                    <Marquee direction="left" speed={150} pauseOnHover={true} gradient={true} >
                        {filterData?.map((articles) => <Link href={`/category/${params.id}/article/${articles?._id}`} key={articles._id}>
                            <div class="flex flex-col p-4 m-2 rounded-sm shadow-xl bg-white border w-96">
                                <div class="flex">
                                    <div class="flex gap-4">
                                        <Image
                                            height={1000}
                                            width={1000}
                                            alt="pp"
                                            className="h-20 w-20 rounded-sm"
                                            src={articles?.image}
                                        />
                                        <div class="flex flex-col gap-1">
                                            <div class="flex gap-3 items-center -mt-1">
                                                <p class="font-semibold cursor-pointer">{articles?.title.slice(0, 30)}</p>
                                            </div>
                                            <div class="font-light text-md text-[#4b587c] flex justify-between"><p>{articles?.Category}</p>
                                            <p className="text-right text-three underline">click</p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                
                                
                            </div>
                        </Link>)}



                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default AllArticle;