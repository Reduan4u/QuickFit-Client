import StoriesBlogs from "../StoriesBlogs/StoriesBlogs";

const MyBlogs2 = () => {
  return (
    <div>
      <div className=" bg-[#182237] py-4 mt-4 rounded-md">
        <h2 className=" text-left pl-4 text-2xl bg-[#182237] ">#New Stories</h2>
      </div>

      <div>
        <StoriesBlogs />
      </div>
    </div>
  );
};

export default MyBlogs2;
