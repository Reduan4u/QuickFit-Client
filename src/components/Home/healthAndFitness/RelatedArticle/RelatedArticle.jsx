import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";


const RelatedArticle = async ({ params }) => {
    const result = await fetch('https://quick-fit-server.vercel.app/api/v1/articles', {
        cache: "no-store"
    });
    const data = await result.json();
    const relatedData = data.filter(item => item.Category == params.id)
    const remainigArticle = relatedData.filter(item => item._id !== params.article)

    return (

        <div className="">
            <SectionHeading title={'Remaining Articles'}></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-4 py-2 my-5">
                {remainigArticle?.map((articles) => <Link key={articles._id} href={`/category/${params.id}/article/${articles._id}`}>
                    <div class="flex flex-col p-4 m-2 rounded-sm shadow-xl bg-white border w-96">
                        <div class="flex">
                            <div class="flex gap-4">
                                <Image
                                    height={1000}
                                    width={1000}
                                    alt="pp"
                                    className="h-20 w-20 rounded-sm"
                                    src={articles.image}
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
            </div>
        </div>
    );
};

export default RelatedArticle;