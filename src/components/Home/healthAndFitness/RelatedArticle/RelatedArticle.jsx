import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";


const RelatedArticle = async ({ params }) => {
    //

    const result = await fetch('https://quick-fit-server.vercel.app/api/v1/articles', {
        cache: "no-store"
    });
    const data = await result.json();
    //console.log(data)
    const relatedData = data.filter(item => item.Category == params.id)
    //console.log(relatedData)
    const remainigArticle = relatedData.filter(item => item._id !== params.article)
    //console.log(remainigArticle)

    return (
        <div className="w-10/12 mx-auto">
            <SectionHeading title='Related Articles' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {remainigArticle.map((articles) => (
                    <Link key={articles._id} href={`/category/${params.id}/article/${articles._id}`}>
                        <div className="p-3">
                            <div
                                className=" cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-full h-28 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-orange-400"
                            >
                                <Image
                                    height={500}
                                    width={500}
                                    alt='types'

                                    src={articles.image}
                                    className="w-1/4 h-full object-cover"
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
            </div>
        </div>
    );
};

export default RelatedArticle;