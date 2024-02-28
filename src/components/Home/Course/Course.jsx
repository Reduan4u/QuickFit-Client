import Button1 from "@/components/Common/Button1";
import Image from "next/image";
import Link from "next/link";
import './Course.css'


const Course = () => {
    return (
        <div class="relative w-full mx-auto flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div class="w-full items-center">
                <div class="w-full md:w-3/4  mx-auto flex-row md:flex ">
                    <div class="overflow-hidden m-5 md:m-10 w-full md:w-2/5  relative">
                        <Image
                            height={1000}
                            width={1000}
                            alt="picture"
                            className="h-full w-full"
                            src="https://htmldemo.net/nutras/nutras/assets/images/about.jpg"
                        />
                        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent flex justify-center items-center  pt-32">
                            <Link href='courses'><button className="btn rounded-none border-none bg-primary text-white uppercase px-5 hover:bg-black">Start course</button></Link>
                        </div>
                    </div>
                    
                                       

                    <div className=" p-10 bg-white shadow-xl w-full md:w-3/5">
                        <div class="pl-12">
                            <p class="text-base font-semibold leading-7 text-primary">25+ YEARS OF EXPERIENCE</p>
                            <h1 class="my-5 text-5xl font-bold tracking-tight text-gray-900">We have expert instructor for help our students.</h1>
                            <p class="text-base">
                                Discover diverse courses spanning technology to arts, tailored for all skill levels with expert instruction and flexible schedules.
                            </p>
                            <p class="my-5 text-primary text-2xl font-semibold">100+ Courses</p>
                            <p class="text-base">
                                Access flexible learning options, including self-paced online courses and interactive live sessions, to accommodate diverse schedules and preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;