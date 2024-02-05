import BookDetails from "@/components/Home/healthAndFitness/bookDetails/BookDetails";

const page = async ({ params }) => {
    console.log(params.id)
    return (
        <BookDetails params={params}></BookDetails>
    );
};

export default page;