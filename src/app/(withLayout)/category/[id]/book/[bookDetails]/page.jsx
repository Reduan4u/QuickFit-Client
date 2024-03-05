import BookDetails from "@/components/Home/healthAndFitness/bookDetails/BookDetails";

const page = async ({ params }) => {
    //
    return (
        <BookDetails params={params}></BookDetails>
    );
};

export default page;