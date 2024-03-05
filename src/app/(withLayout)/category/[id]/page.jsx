
import AllArticle from "@/components/Home/healthAndFitness/AllArticle/AllArticle";
import Book from "@/components/Home/healthAndFitness/Book/Book";
import LeftBtn from "@/components/Home/healthAndFitness/Btn/LeftBtn";
import CategoryHeading from "@/components/Home/healthAndFitness/CategoryHeading/CategoryHeading";
import Questions from "@/components/Home/healthAndFitness/Questions/Questions";
import RelatedCategory from "@/components/Home/healthAndFitness/RelatedCategory/RelatedCategory";
import ShortDescription from "@/components/Home/healthAndFitness/shortDescription/ShortDescription";
import Link from "next/link";




const DynamicCategory = async ({ params }) => {
    //


    return (
        <div>
            <CategoryHeading params={params}></CategoryHeading>


            <div className="">
                {/* Recent Article */}
                    <AllArticle params={params}></AllArticle>



                {/* {Category shortDescription} */}
                <ShortDescription params={params}></ShortDescription>


                {/* Quesyions */}
                <Questions params={params}></Questions>


                {/* Book */}
                <Book params={params}></Book>

                {/* Related Category */}
                <RelatedCategory  params={params}></RelatedCategory>

                <div className="flex justify-end items-center py-5 px-5 w-10/12 mx-auto">
                    <Link href='/'><LeftBtn></LeftBtn></Link>
                </div>
            </div>


        </div>
    );
};

export default DynamicCategory;