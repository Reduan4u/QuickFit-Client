
import AllArticle from "@/components/Home/healthAndFitness/AllArticle/AllArticle";
import Book from "@/components/Home/healthAndFitness/Book/Book";
import LeftBtn from "@/components/Home/healthAndFitness/Btn/LeftBtn";
import CategoryHeading from "@/components/Home/healthAndFitness/CategoryHeading/CategoryHeading";
import Questions from "@/components/Home/healthAndFitness/Questions/Questions";
import ShortDescription from "@/components/Home/healthAndFitness/shortDescription/ShortDescription";
import Link from "next/link";




const DynamicCategory = async ({ params }) => {
    //console.log(params)


    return (
        <div>
            <CategoryHeading params={params}></CategoryHeading>


           <div className="">
             {/* Recent Article */}
             <div className="bg-primary text-white font-semibold text-center my-8">Recent Articles</div>
            <div className=" mb-20 border-y-4 border-primary">
                <AllArticle params={params}></AllArticle>
            </div>


            {/* {Category shortDescription} */}
            <ShortDescription params={params}></ShortDescription>


            {/* Quesyions */}
            <Questions params={params}></Questions>


            {/* Book */}
            <Book params={params}></Book>

            <div className="flex justify-end items-center py-5 px-5 w-10/12 mx-auto">
                <Link href='/'><LeftBtn></LeftBtn></Link>
            </div>
           </div>


        </div>
    );
};

export default DynamicCategory;