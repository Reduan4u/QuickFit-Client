import LeftBtn from "@/components/Home/healthAndFitness/Btn/LeftBtn";
import Link from "next/link";

const WorkoutVideos = async ({ params }) => {

    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/workout/${params.id}`, {
        cache: "no-store"
    });
    const workout = await res.json();
    const data = workout.types.find(type => type.name === params.videos);

    return (
        <div className="w-full mx-auto">
            <h1 className="text-center text-4xl font-bold py-5 text-primary">{params.id} - {params.videos} Workout</h1>
            {data.paragraphs.map((workouts) => (
                <div
                    key={data._id}>
                    <p className="text-center text-base font-base">{workouts}</p>
                </div>
            ))}
            {data.videos.map((video, index) => (
                <div key={data._id}>
                    <div className="py-5">
                        <section class="py-5 bg-black dark:bg-gray-900 w-full md:w-full lg:w-1/2 mx-auto border rounded-xl shadow-xl">
                            <div class="px-5">
                                <p class="text-primary dark:text-white block text-xl leading-snug mt-3 text-center">({index + 1}) {video.title}</p>
                                <iframe class="w-full py-3 h-64 rounded-lg md:h-80" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5"> {video.subtitle}</p>
                                <div class="border-primary dark:border-gray-600 border border-b-0 my-1"></div>
                                <div class="relative z-40 flex items-center justify-end pt-2 gap-2">
                                    <a class="text-primary font-bold hover:text-blue-500" href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </a>
                                    <a class="text-primary font-bold hover:text-blue-500" href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </a>
                                    <a class="text-primary font-bold hover:text-blue-500" href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </section>
                        {/* <div class="relative mx-auto w-full max-w-lg pt-6 ">
                            <div className="bg-black">
                            <div class="text-white text-center pt-2">({index + 1}) {video.title}</div>
                            <a href="#" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
                                <div class="rounded-lg">
                                    <div class="relative flex h-full justify-center overflow-hidden rounded-lg">
                                        <div class="w-full">
                                            <iframe class="w-full py-0 h-64 rounded-lg md:h-80" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div class="text-blue-700 mx-2">{video.subtitle}</div>
                                </div>
                            </a>
                            </div>
                        </div> */}

                    </div>
                </div>
            ))}
            <div className="flex justify-end items-center py-5 px-5 w-full mx-auto">
                <Link href={`/workout/${params.id}`}><LeftBtn></LeftBtn></Link>
            </div>
        </div>
    );
};

export default WorkoutVideos;