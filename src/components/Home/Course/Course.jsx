import Image from "next/image";
import Link from "next/link";
import './Course.css'
import LoginButton from "@/components/Common/LoginButton";


const Course = () => {
    return (
        <div class="relative w-full mx-auto flex flex-col justify-center overflow-hidden mt-20 py-16 sm:pt-12 bg-four ">
            <div class="w-full items-center">
                <div class="w-full md:w-10/12  mx-auto flex-row md:flex ">
                    <div class="overflow-hidden m-5 md:m-10 w-full md:w-2/5  relative">
                        <Image
                            height={1000}
                            width={1000}
                            alt="picture"
                            className="h-full w-full"
                            src="https://htmldemo.net/nutras/nutras/assets/images/about.jpg"
                        />
                        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent flex justify-center items-center  pt-32">
                            <Link href='/courses' className="w-3/4"><LoginButton>Start course</LoginButton></Link>
                        </div>
                    </div>



                    <div className=" w-full md:w-3/5 flex justify-center items-center">
                        <div class="pl-12">
                            <p class="text-base font-semibold leading-7 text-one">25+ YEARS OF EXPERIENCE</p>
                            <h1 class="my-5 text-5xl font-bold tracking-tight text-gray-900">We have expert instructor for help our students.</h1>
                            <p class="text-base">

                                Discover diverse courses spanning technology to arts, tailored for all skill levels with expert instruction and flexible schedules, empowering you to delve into subjects ranging from computer programming to visual arts with ease and confidence.
                            </p>
                            <p class="my-5 text-one text-2xl font-semibold">100+ Courses</p>
                            <p class="text-base">
                                Access flexible learning options, including self-paced online courses and interactive live sessions, to accommodate diverse schedules and preferences, ensuring you can seamlessly integrate learning into your busy lifestyle while receiving personalized guidance from experienced educators.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;