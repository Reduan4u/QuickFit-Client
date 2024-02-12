// pages/[id].js
import SinglePost from "@/components/ForumComponents/singlePost/SinglePost";

const Page = ({ params }) => {
    return <SinglePost params={params} />;
};

export default Page;
