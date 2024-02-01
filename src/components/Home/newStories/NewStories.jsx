import Button1 from "@/components/Common/Button1";
import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const NewStories = async () => {
  const res = await fetch(
    "https://quickfit-server.vercel.app/api/v1/news-stories",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const slicedData = data.slice(0, 5);

  return (
    <div className="w-11/12 mx-auto my-2 px-2">
      <div className=" flex justify-between items-center">
        <SectionHeading title={"New Stories"} />
        <Link href="/allStories">
          <Button1 title={"See All"} />
        </Link>
      </div>
      <div className=" grid md:grid-cols-4 grid-cols-1  md:gap-2 gap-y-2  ">
        {slicedData.map((story, index) => (
          <Link
            className={`${
              index === 0 && "col-span-2 row-span-2 h-full w-full"
            } hover:scale-95 transition-all duration-700 hover:border-yellow-300 hover:border-5 hover:z-40 cursor-pointer`}
            href={`/allStories/${story._id}`}
            key={index}
          >
            <div key={index}>
              <div className="relative overflow-hidden image-full rounded-none">
                <figure>
                  <img
                    className={`rounded-none `}
                    src={story.img}
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute inset-0 flex flex-col items-start justify-end px-6 py-4 bg-black bg-opacity-60 text-white">
                  <h2 className="text-2xl font-bold">{story.title}</h2>
                  <p className=" text-white/80 text-sm">{story.description}</p>
                  <p className=" text-orange-400">
                    <span className="  font-bold">|</span> {story.category}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewStories;
