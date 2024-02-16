import Link from "next/link";

const WBanner = async () => {
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/workout", {
        cache: "no-store"
    });
    const workout = await res.json();
    //console.log(workout)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/Bvb13vRz/strong-man-training-gym.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="text-center text-neutral-content">
                <h1 className='text-secondary text-4xl font-bold pb-10'>What type of workout?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {workout.map((workouts) => (
                        <Link href={`workout/${workouts.category}`}
                        key={workout._id} class="flex px-6 pb-8 sm:px-8">
                            <button aria-describedby="tier-starter" class="uppercase items-center justify-center w-full px-6 py-2.5 text-center text-primary bg-black duration-200 border-2 border-primary rounded-sm nline-flex  hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary before:ease-in-out before:z-[-1] ease-in-out hover:scale-105">
                                {workouts.category}
                            </button>
                        </Link>
                    ))}
                </div>
                <span className="text-gray-500 text-sm">Tap one</span>
            </div>
        </div>
    );
};

export default WBanner;