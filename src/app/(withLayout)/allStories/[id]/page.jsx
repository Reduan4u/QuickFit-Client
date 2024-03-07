import Link from "next/link";
import Button1 from "@/components/Common/Button1";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import FavButton from "@/components/FavouriteButton/FavButton";
import LikeFunction from "@/components/LikeFunction/LikeFunction";
import Comment from "@/components/Comment/Comment";
import LoginButton from "@/components/Common/LoginButton";

const page = async ({ params }) => {
  const res = await fetch(
    `https://quick-fit-server.vercel.app/api/v1/newStories/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className=" mx-auto max-w-4xl container my-4">
      <div className=" flex justify-between items-center my-12">
        <div className=" flex gap-5 items-center ">
          <h2 className=" text-5xl font-extrabold">{data.title}</h2>
          <FavButton data={data} />
        </div>
        <p className=" text-orange-500">
          #{data.category.replace(" ", "").toLowerCase()}
        </p>
      </div>
      <div className=" my-4">
        <Image height={1080} width={1920} src={data.img} alt="image" />
      </div>
      <div className=" ">
        <div className=" my-12 text-orange-800  italic">
          <p className="  text-lg mt-2 ">
            {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" })
              .format(new Date(data.date))
              .replace(" ", ",")}
          </p>
          <p className="  text-lg">{data.author}</p>
        </div>
        <div className=" my-4">
          {data.paragraph.map((para, index) => (
            <div className=" my-3" key={index}>
              <p>{para}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" my-9 flex justify-between items-center">
        <LikeFunction data={data} />
        <Link href="/allStories">
        <LoginButton>Read More</LoginButton>
        </Link>
      </div>
      <Comment data={data} />
    </div>
  );
};

export default page;
