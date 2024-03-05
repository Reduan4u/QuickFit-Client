'use client'
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
        .then(res=>res.json())
        .then(data=>setData(data))
     },[])

    //console.log(data)
    const filterData = data?.filter(item => item.Category == params.id)
    return (
        <div>

            <div className="py-3">
                    <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true} >
                        {filterData?.map((articles) => (
                            <Link key={articles._id} href={`/category/${params.id}/article/${articles._id}`}>
                                    <div className="p-3">
                                    <div
                                        className=" cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-full h-28 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-primary"
                                    >
                                        <Image
                                            height={500}
                                            width={500}
                                            alt='types'
                                            objectFit="cover"
                                            src={articles.image}
                                            className="w-1/4 h-full"
                                        />
                                        <div className="w-3/4 pl-2">
                                            <span className="font-semibold">{articles?.title.slice(0, 30)}</span>
                                            <p className="line-clamp-3 text-base text-orange-400">
                                                {articles?.Category}
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                            </Link>
                        ))}
                    </Marquee>
            </div>
        </div>
    );
};

export default AllArticle;