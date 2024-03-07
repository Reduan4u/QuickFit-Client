import LoginButton from "@/components/Common/LoginButton";
import SectionHeading from "@/components/Common/SectionHeading";
import Ebanner from "@/components/Eshop/Ebanner/Ebanner";
import Link from "next/link";
import { SlArrowLeftCircle } from "react-icons/sl";


const Duration = async ({ params }) => {
    //;
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/workout/${params.id}`, {
        cache: "no-store"
    });
    const data = await result.json();
    //console.log(data)
    return (
        <div>
        <Ebanner heading={`${params.id} Workout`} image={'https://i.postimg.cc/85PG3DTv/workout.png'}></Ebanner>
        <div className="hero py-10">
            <div className="text-center">
                <SectionHeading title={`${params.id} Workout`}></SectionHeading>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {data.types.map((workouts) => (
                        <Link href={`${params.id}/videos/${workouts.name}`}
                        key={data._id} className="flex px-6 pb-8 sm:px-8">
                            <div className="w-full md:w-44">
                                    <LoginButton >{workouts?.name}</LoginButton>
                                </div>
                        </Link>
                    ))}
                </div>
                <span className="text-sm">Tap one</span>
                <a href='/workout' className="flex justify-center items-center pt-4">
                <SlArrowLeftCircle className="text-4xl text-one hover:text-three hover:scale-105" /> 
                </a>
            </div>
        </div>
        </div>
    );
};

export default Duration;