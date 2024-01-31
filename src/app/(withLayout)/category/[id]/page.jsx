
import Button1 from "@/components/Common/Button1";
import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


const DynamicCategory = async ({ params }) => {
    console.log(params)
    //Article
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/articles", {
        cache: "no-store"
    });
    const data = await res.json();
    const filterData = data.filter(item => item.Category === params.id);
    const article = filterData.slice(0, 4);

    // Category
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();

    //Book
    const bookres = await fetch(`https://quick-fit-server.vercel.app/api/v1/books/${params.id}`, {
        cache: "no-store"
    });
    const book = await bookres.json();


    return (
        <div>
            <div className="relative w-full h-[70vh]">
                <Image
                    height={1080}
                    width={1920}
                    alt='types'
                    src={cat.image}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p className="text-white text-4xl md:text-6xl font-extrabold flex py-10 my-10 justify-center items-center">{params.id}</p>
                </div>
            </div>
            {/* Recent Article */}
            <h1 className="bg-orange-400 text-white text-center font-semibold py-1">Recent Articles</h1>
            <div className="py-5">
                {/* <SectionHeading title={"Recent Articles"} /> */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-20 gap-5 border-b-4 border-orange-400">

                    {article.map((articles) => (
                        <Link key={articles._id} href={`/category/article/${articles._id}`}>

                            <div
                                className=" cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-full h-28 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-orange-400"
                            >
                                <Image
                                    height={500}
                                    width={500}
                                    alt='types'
                                    objectFit="cover"
                                    src={articles.image}
                                    className="w-1/4 h-full"
                                />
                                <div className="w-3/4">
                                    <span className="font-semibold">{articles?.title.slice(0, 30)}</span>
                                    <p className="line-clamp-3 text-base text-orange-400">
                                        {articles?.Category}
                                    </p>
                                </div>
                            </div>


                        </Link>
                    ))}
                </div>

            </div>
            {/* {Category shortDescription} */}
            <div className="pb-20">
                <div className="bg-orange-400 h-[70vh] w-[75vw] px-10 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20" alt="" data-aos="fade-up">
                    <h1 className='w-2/3 text-sm md:text-base text-white lg:text-4xl font-semibold' >{cat.category}</h1>
                    <p className='py-10 text-white text-justify w-2/3 text-xs md:text-sm lg:text-xl'>{cat.shortDescription}</p>
                </div>
                <Image
                    height={500}
                    width={500}
                    alt='types'
                    objectFit="cover"
                    className='bg-fixed lg:visible mr-0 -mt-60 h-[65vh] w-2/5 mx-auto' src={cat.image} data-aos="fade-down" />
            </div>
            {/* Quesyions */}
            <div>
                <SectionHeading title={"Explore the Unknown? "} />
                <div className="p-5">
                    {cat.questions.map((item) => (
                        <div key={item._id} className="w-full md:w-1/2 mx-auto m-5">
                            <div className="">
                                <div className="pb-6">
                                    <h1 className="text-2xl font-semibold">{item?.question}</h1>
                                </div>
                                <div className="text-justify text-base">
                                    <p>{item?.answer?.details?.para1}</p>
                                    <p className="py-5">{item?.answer?.details?.para2}</p>
                                    <p>{item?.answer?.details?.para3}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            {/* Book */}
            {/* <div class="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-800 rounded-none md:flex-row">
                <div class="flex justify-center items-center w-28 h-full   rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
                    <Image
                        height={500}
                        width={500}
                        alt='types'
                        objectFit="cover"
                        src={book.image}
                        className="w-full h-full"
                    />
                </div>
                <div className="max-w-sm h-auto space-y-3">
                    <div className="flex justify-center items-center sm:justify-between">
                        <h2 className="text-white text-2xl font-bold tracking-widest">{book.BookName}</h2>
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="hidden sm:flex hover:scale-150 duration-300 fill-white cursor-pointer"><path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"></path></svg>
                    </div>
                    <p className="text-sm text-gray-200">{book.description}</p>
                    <div className="flex gap-6 items-center justify-center">
                    </div>
                    <Button1 title='Read More'></Button1>
                </div>
            </div> */}

            {/* Book2 */}
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


        </div>
    );
};

export default DynamicCategory;