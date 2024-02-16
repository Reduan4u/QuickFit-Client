import LeftBtn from "@/components/Home/healthAndFitness/Btn/LeftBtn";
import Link from "next/link";


const Duration = async ({ params }) => {
    //console.log(params);
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/workout/${params.id}`, {
        cache: "no-store"
    });
    const data = await result.json();
    //console.log(data)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${data.image})` }}>
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="text-center text-neutral-content">
                <h1 className='text-secondary text-4xl font-bold pb-10'>{params.id} Workouts</h1>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {data.types.map((workouts) => (
                        <Link href={`${params.id}/videos/${workouts.name}`}
                        key={data._id} class="flex px-6 pb-8 sm:px-8">
                            <button aria-describedby="tier-starter" class="uppercase items-center justify-center w-full px-6 py-2.5 text-center text-primary bg-black duration-200 border-2 border-primary rounded-sm nline-flex  hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary before:ease-in-out before:z-[-1] ease-in-out hover:scale-105">
                                {workouts.name}
                            </button>
                        </Link>
                    ))}
                </div>
                <span className="text-gray-500 text-sm">Tap one</span>
            </div>
        </div>
    );
};

export default Duration;