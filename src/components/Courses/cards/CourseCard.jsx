import { duration } from "moment";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const {
    _id,
    image,
    price,
    courseProvider,
    courseTitle,
    courseDuration,
    category,
    level,
  } = course;
  return (
    <div className=" max-w-md w-full">
      <div className="relative">
        <Image
          height={1000}
          width={1000}
          alt="Banner Profile"
          src={image}
          className="w-full rounded-none h-52"
        />
        <div className="absolute bg-black text-white flex justify-center items-center bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 font-bold border-white">
          ${price}
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-700 mt-5 ">By: {courseProvider}</p>
        <Link href={`/courses/${category}`}>
          <p className="text-2xl font-semibold text-gray-800 mt-3 hover:text-primary">
            {" "}
            {courseTitle}
          </p>
        </Link>

        <div className="flex justify-start gap-5 items-center pt-2">
          <li className="list-inside list-disc text-primary hover:underline">
            {" "}
            {courseDuration}
          </li>
          {/* <p className="text-primary">#{category}</p> */}
          <p className="text-primary">Level: {level}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
