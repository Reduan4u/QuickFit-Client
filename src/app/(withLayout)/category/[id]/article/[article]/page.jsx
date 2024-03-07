
import LeftBtn from '@/components/Home/healthAndFitness/Btn/LeftBtn';
import RelatedArticle from '@/components/Home/healthAndFitness/RelatedArticle/RelatedArticle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleDetailsPage = async ({ params }) => {

    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/articles/${params.article}`, {
        cache: "no-store"
    });
    const data = await res.json();

    return (
        <div>
            <div key={data._id} className='w-full md:w-full lg:w-1/2 mx-auto py-5 px-5 md:px-5 lg:px-0'>
                <p className='text-lg text-three font-bold'>#{data.Category}</p>
                <h1 className='text-2xl md:text-4xl font-bold py-5'>{data.title}</h1>
                <p className='text-xl md:text-2xl font-medium'>{data.subTitle}</p>
                <p className='text-base py-5'>{data.publishDate}</p>
                <p className='text-base italic'>{data.publisher}</p>
                <p className='text-base py-5'>{data.reviewer}</p>
                <div className='w-full h-[65vh] border-t-4 border-one pt-5 '>
                    <Image
                        height={500}
                        width={500}
                        alt='Article'
                        src={data.image}
                        className="w-full h-full object-cover"
                    />
                </div>
                {data.Article.map((item) => (
                    <div key={item._id} className="">
                        <div className="">
                            <div className="py-5">
                                <p className="text-2xl font-medium">{item?.artTitle}</p>
                                <p className="text-base py-2">{item?.artDetail}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <RelatedArticle params={params}></RelatedArticle>
            <div className="flex justify-end items-center py-5 w-10/12 mx-auto">
                <Link href={`/category/${params.id}`}><LeftBtn></LeftBtn></Link>
            </div>
        </div>
    );
};

export default ArticleDetailsPage;