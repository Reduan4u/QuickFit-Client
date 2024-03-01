import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Marquee from "react-marquee-slider";


const UserReviews = () => {
    return (
        <div>
            <h1 className="py-5 font-semibold text-2xl">User Reviews :</h1>
            <div className=" flex justify-center items-center">
                <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true} >
                    {/* 1st div */}
                    <div class="flex flex-col p-8 rounded-2xl bg-white border w-96">
                        <div class="flex pb-5">
                            <div class="flex gap-4">
                                <Image
                                    height={1000}
                                    width={1000}
                                    alt="pp"
                                    className="h-14 w-14 rounded-full"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />

                                <div class="flex flex-col gap-1">
                                    <div class="flex gap-3 items-center -mt-1">
                                        <p class="font-semibold cursor-pointer">Super Petya</p>
                                    </div>
                                    <div class="font-light text-md text-[#4b587c]">Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <BiSolidQuoteLeft className="text-primary w-10 h-10 rounded-full " />
                        <div class="italic mt-2 text-[18px] text-[#4b587c] font-normal text-justify">

                            Comprehensive health and fitness website offering expert advice, workout routines, nutritional guidance, and motivational content.

                        </div>
                    </div>
                    {/* 2nd div */}
                    <div class="flex flex-col p-8 rounded-2xl bg-white border w-96">
                        <div class="flex pb-5">
                            <div class="flex gap-4">
                                <Image
                                    height={1000}
                                    width={1000}
                                    alt="pp"
                                    className="h-14 w-14 rounded-full"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />

                                <div class="flex flex-col gap-1">
                                    <div class="flex gap-3 items-center -mt-1">
                                        <p class="font-semibold cursor-pointer">Super Petya</p>
                                    </div>
                                    <div class="font-light text-md text-[#4b587c]">Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <BiSolidQuoteLeft className="text-primary w-10 h-10 rounded-full " />
                        <div class="italic mt-2 text-[18px] text-[#4b587c] font-normal text-justify">

                            Comprehensive health and fitness website offering expert advice, workout routines, nutritional guidance, and motivational content.

                        </div>
                    </div>
                    {/* 3rd div */}
                    <div class="flex flex-col p-8 rounded-2xl bg-white border w-96">
                        <div class="flex pb-5">
                            <div class="flex gap-4">
                                <Image
                                    height={1000}
                                    width={1000}
                                    alt="pp"
                                    className="h-14 w-14 rounded-full"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />

                                <div class="flex flex-col gap-1">
                                    <div class="flex gap-3 items-center -mt-1">
                                        <p class="font-semibold cursor-pointer">Super Petya</p>
                                    </div>
                                    <div class="font-light text-md text-[#4b587c]">Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <BiSolidQuoteLeft className="text-primary w-10 h-10 rounded-full " />
                        <div class="italic mt-2 text-[18px] text-[#4b587c] font-normal text-justify">

                            Comprehensive health and fitness website offering expert advice, workout routines, nutritional guidance, and motivational content.

                        </div>
                    </div>

                </Marquee>
            </div>
        </div>


    );
};

export default UserReviews;