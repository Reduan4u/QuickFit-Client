import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";
import './RelatedCategory.css'
import { MdArrowOutward } from "react-icons/md";

const RelatedCategory = async ({ params }) => {
    const result = await fetch('https://quick-fit-server.vercel.app/api/v1/category', {
        cache: "no-store"
    });
    const data = await result.json();
    //console.log(data)

    const relatedData = data.filter(item => item.category !== params.id);
    const remainingCategories = relatedData.filter(item => item._id !== params.Category);
    //console.log(remainingCategories);

    return (
        <div className="w-10/12 mx-auto">
            <SectionHeading title='Related Category' />
            <div className="text-center">
                {remainingCategories.map((categories) => (
                    <Link key={categories.id} className="m-2" href={`${categories.category}`}>
                        <button className="w-full justify-between md:w-52 cursor-pointer inline-flex items-center rounded-full px-9 py-3 my-2 text-xl font-mono font-semibold text-primary hover:text-white border-2 border-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-primary duration-300  focus:bg-transparent">
                            
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