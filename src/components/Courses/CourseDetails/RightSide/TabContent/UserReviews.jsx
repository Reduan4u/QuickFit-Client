import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Marquee from "react-marquee-slider";


const UserReviews = () => {
    const data =[
        {
            "reviewerName": "Alice Smith",
            "reviewerImg": "https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18659.jpg?w=360&t=st=1709296407~exp=1709297007~hmac=c96a7a22a5fb1f6871ad9ceff122aaca6427016d4adc8562893726cb92bf04d5",
            "profession": "Marketing Manager",
            "review": "I absolutely loved the course! It provided me with valuable insights and practical knowledge that I could apply in my daily life. Highly recommended!"
        },
        {
            "reviewerName": "Bob Johnson",
            "reviewerImg": "https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-266.jpg?w=360&t=st=1709296408~exp=1709297008~hmac=7f571eb05e54f0e9f5b807190e143220564777fbe689e90886c3463de336fc93",
            "profession": "Software Engineer",
            "review": "This course exceeded my expectations. The instructor was engaging, and the content was well-structured. I learned a lot and would definitely enroll in another course."
        },
        {
            "reviewerName": "Emily Brown",
            "reviewerImg": "https://img.freepik.com/free-psd/portrait-handsome-young-man-black-t-shirt-isolated-white-background_1142-60165.jpg?w=740&t=st=1709296414~exp=1709297014~hmac=fb10e77863c5451fbcf6d288da5c8f47ed1ea05ef06745dedd3988fca631c5b8",
            "profession": "Teacher",
            "review": "I found the course to be very informative. The material was presented clearly, and the quizzes helped reinforce my understanding. I'm grateful for the opportunity to learn from such knowledgeable instructors."
        }
    ]
    
    return (
        <div>
            <h1 className="text-2xl font-medium py-4">User Reviews :</h1>
            <div className=" flex justify-center items-center">
                <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true} >
                  
                  {data?.map((item, idx)=> <div key={idx}>

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
                                        <p class="font-semibold cursor-pointer">{item?.reviewerName}</p>
                                    </div>
                                    <div class="font-light text-md text-[#4b587c]">{item?.profession}</div>
                                </div>
                            </div>
                        </div>
                        <BiSolidQuoteLeft className="text-three w-10 h-10 rounded-full " />
                        <div class="italic mt-2 text-[18px] text-[#4b587c] font-normal text-justify">

                            Comprehensive health and fitness website offering expert advice, workout routines, nutritional guidance, and motivational content.

                        </div>
                    </div>
                  </div> )}

 

                </Marquee>
            </div>
        </div>


    );
};

export default UserReviews;