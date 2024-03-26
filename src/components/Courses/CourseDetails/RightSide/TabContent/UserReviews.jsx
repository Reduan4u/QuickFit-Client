import UseCourseReviews from "@/hooks/UseCourseReviews";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Marquee from "react-marquee-slider";

const UserReviews = async () => {
  const { reviews } = UseCourseReviews();
  return (
    <div>
      {/* <h1 className="text-2xl font-medium py-4">User Reviews :</h1> */}
      <div className=" flex justify-center items-center ">
        <Marquee
          direction="left"
          speed={70}
          pauseOnHover={true}
          gradient={true}
        >
          {reviews?.map((item, idx) => (
            <div key={item._id}>
              {/* 1st div */}
              <div class="flex flex-col p-8 rounded-2xl bg-white border w-96">
                <div class="flex pb-5">
                  <div class="flex gap-4">
                    <Image
                      height={1000}
                      width={1000}
                      alt="pp"
                      className="h-14 w-14 rounded-full"
                      src={item?.reviewerImg}
                    />

                    <div class="flex flex-col gap-1">
                      <div class="flex gap-3 items-center -mt-1">
                        <p class="font-semibold cursor-pointer">
                          {item?.reviewerName}
                        </p>
                      </div>
                      <div class="font-light text-md text-[#4b587c]">
                        {item?.profession}
                      </div>
                    </div>
                  </div>
                </div>
                <BiSolidQuoteLeft className="text-three w-10 h-10 rounded-full " />
                <div class="italic mt-2 text-[18px] text-[#4b587c] font-normal text-justify">
                  {item?.review}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default UserReviews;
