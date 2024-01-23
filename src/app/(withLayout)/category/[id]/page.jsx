
import SectionHeading from "@/components/Common/SectionHeading";
import Advertisement from "@/components/Home/healthAndFitness/Advertisement";
import Image from "next/image";


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



    return (
        <div>
            <h1 className="bg-black text-red-800 text-4xl md:text-6xl font-extrabold h-[30vh] flex py-10 my-10 justify-center items-center">{params.id}</h1>
            {/* Recent Article */}
            <div>
                <SectionHeading title={"Recent Articles"} />
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4  my-20 gap-10 border-y-4 border-black">
                    
                    {article.map((articles) => (
                        <div key={articles._id} className="shadow-2xl m-5">
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
                                    <h1 className="text-left pt-5 text-base md:text-base lg:text-base font-semibold">{articles?.title}</h1>
                                    <h1 className="text-basefont-medium text-right text-orange-400">{articles?.Category}</h1>
                                </div>
                            </div>
                        </div>
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
            <Advertisement></Advertisement>

        </div>
    );
};

export default DynamicCategory;