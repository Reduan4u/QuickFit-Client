
import SectionHeading from "@/components/Common/SectionHeading";
import AllArticle from "@/components/Home/healthAndFitness/AllArticle/AllArticle";
import Book from "@/components/Home/healthAndFitness/Book/Book";
import CategoryHeading from "@/components/Home/healthAndFitness/CategoryHeading/CategoryHeading";
import Questions from "@/components/Home/healthAndFitness/Questions/Questions";
import ShortDescription from "@/components/Home/healthAndFitness/shortDescription/ShortDescription";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


const DynamicCategory = async ({ params }) => {
    //console.log(params)


    return (
        <div>
            <CategoryHeading params={params}></CategoryHeading>


            {/* Recent Article */}
            <SectionHeading title='Recent Articles'></SectionHeading>
            <div className=" mb-20 border-y-4 border-orange-400">
                <AllArticle params={params}></AllArticle>
            </div>


            {/* {Category shortDescription} */}
            <ShortDescription params={params}></ShortDescription>


            {/* Quesyions */}
            <Questions params={params}></Questions>


            {/* Book */}
            <Book params={params}></Book>


        </div>
    );
};

export default DynamicCategory;