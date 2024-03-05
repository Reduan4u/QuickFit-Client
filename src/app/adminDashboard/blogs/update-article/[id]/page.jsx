import UpdateArticles from "@/components/AdminDashboard/Articles/UpdateArticles/UpdateArticles";


const page = ({params}) => {
    //;
    return (
        <div>
            <UpdateArticles params={params}></UpdateArticles>
        </div>
    );
};

export default page;