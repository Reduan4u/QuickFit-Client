import MonthlyBlogs from "../MonthlyBlogs/MonthlyBlogs";

const MyBlogs = () => {
  return (
    <div>
      <div className=" bg-[#182237] py-4 mt-4 rounded-md">
        <h2 className=" text-left pl-4 text-2xl bg-[#182237] ">
          #Monthly Picks
        </h2>
      </div>

      <div>
        <MonthlyBlogs />
      </div>
    </div>
  );
};

export default MyBlogs;
