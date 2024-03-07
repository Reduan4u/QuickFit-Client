
import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


const RelatedCategory = async ({ params }) => {
    const result = await fetch('https://quick-fit-server.vercel.app/api/v1/category', {
        cache: "no-store"
    });
    const data = await result.json();
    const relatedData = data.filter(item => item.category !== params.id);
    const remainingCategories = relatedData.filter(item => item._id !== params.Category);

    return (
        <div className="w-10/12 mx-auto">
            <SectionHeading title='Related Category' />
            <div className="text-center">
                {remainingCategories.map((categories) => (
                    <Link key={categories.id} className="m-2" href={`${categories.category}`}>
                        <button className="transition-all duration-500 w-full justify-center gap-2 md:w-52 cursor-pointer inline-flex items-center rounded-full px-9 py-3 my-2 font-mono font-medium text-four border-2 hover:-translate-y-1 hover:scale-75 bg-one hover:bg-three focus:bg-transparent">                           
                            <p className='pl-4'>{categories.category}</p>
                            <MdArrowOutward />
                        </button>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default RelatedCategory;