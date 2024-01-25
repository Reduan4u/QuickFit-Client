
import Button1 from "@/components/Common/Button1";
import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";


const DynamicCategory = async ({ params }) => {
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
            <div
                class="w-full mx-auto h-64 duration-500 group overflow-hidden relative rounded  text-neutral-50 p-4 flex flex-col justify-evenly"
            >
                <div
                    class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-red-900 right-1 -bottom-24"
                ></div>
                <div
                    class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-red-700 right-12 bottom-12"
                ></div>
                <div
                    class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-red-800 right-1 -top-12"
                ></div>
                <div
                    class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-red-700 rounded-full group-hover:-translate-x-12"
                ></div>
                <div class="z-10 flex flex-col justify-evenly w-full h-full">
                    <span class="text-red-800 text-4xl md:text-6xl font-extrabold flex py-10 my-10 justify-center items-center">{params.id}</span>
                </div>
            </div>

            {/* Recent Article */}
            <h1 className="bg-black text-white text-center font-semibold py-1">Recent Articles</h1>
            <div>
                {/* <SectionHeading title={"Recent Articles"} /> */}
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4  mb-20 gap-10 border-b-4 border-black">


                    {article.map((articles) => (
                        <Link key={articles._id} href={`/category/article/${articles._id}`}>

                            <div className="shadow-2xl m-5">
                                <div className="flex justify-between h-36">
                                    <div className="relative overflow-hidden image-full rounded-none">
                                        <Image
                                            height={500}
                                            width={500}
                                            alt='types'
                                            objectFit="cover"
                                            src={articles.image}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="my-4 mx-4">
                                        <h1 className="text-left pt-1 text-base md:text-base lg:text-base font-semibold">{articles?.title}</h1>
                                        <h1 className="text-basefont-medium text-right text-orange-400">{articles?.Category}</h1>
                                    </div>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>

            </div>
            {/* {Category shortDescription} */}
            <div className="pb-20">
                <div className="bg-red-800 h-[70vh] w-[75vw] text-white px-10 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20" alt="" data-aos="fade-up">
                    <h1 className='w-2/3 text-sm md:text-base lg:text-4xl font-semibold' >{cat.category}</h1>
                    <p className='py-10 w-2/3 text-xs md:text-sm lg:text-xl'>{cat.shortDescription}</p>
                </div>
                <Image
                    height={500}
                    width={500}
                    alt='types'
                    objectFit="cover"
                    className='bg-fixed lg:visible mr-0 -mt-96 h-[65vh] w-2/5 mx-auto' src={cat.image} data-aos="fade-down" />
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
                                    <p>{item?.answer?.details?.para2}</p>
                                    <p>{item?.answer?.details?.para3}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            {/* Book */}
            <div class="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-800 rounded-none md:flex-row">
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
                <div class="max-w-sm h-auto space-y-3">
                    <div class="flex justify-center items-center sm:justify-between">
                        <h2 class="text-white text-2xl font-bold tracking-widest">{book.BookName}</h2>
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" class="hidden sm:flex hover:scale-150 duration-300 fill-white cursor-pointer"><path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"></path></svg>
                    </div>
                    <p class="text-sm text-gray-200">{book.description}</p>
                    <div class="flex gap-6 items-center justify-center">
                        <p class="text-white font-bold text-lg">$300.00</p>
                        <p class="text-gray-300 font-semibold text-sm line-through">$320.00</p>
                    </div>
                    <div class="flex justify-around items-center my-2">
                        <Button1 title='Buy Now'></Button1>
                        <Button1 title='Add to Cart' class=""></Button1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DynamicCategory;