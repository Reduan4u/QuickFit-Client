import TrainerHireForm from "@/components/TrainerHireForm/TrainerHireForm";



const page = ({params}) => {
    return (
        <div>
            <TrainerHireForm params={params}></TrainerHireForm>
        </div>
    );
};

export default page;