import Image from 'next/image';
import React from 'react';

const HealthAndFitness = () => {
    return (
        <div>
        
        <div className="w-[80vw] mx-auto grid h-96 my-20 grid-cols-6 grid-rows-4 gap-3">
            <div className="relative col-start-1 col-end-2  w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/FxwkyYq/yoga.jpg"
                    alt="Yoga"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Yoga</p>
                </div>
            </div>
            <div className="relative col-start-2 col-end-3  w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/BjJFJwD/strength-training.jpg"
                    alt="Strength Training"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Strength Training</p>
                </div>
            </div>
            <div className="relative col-start-3 col-end-5 row-start-1 row-end-3  w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/f8LcMHG/nutration.jpg"
                    alt="Nutration"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Nutration</p>
                </div>
            </div>
            <div className="relative col-start-5 col-end-7 row-start-1 row-end-3  w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://img.freepik.com/free-photo/smile-corporate-skyscraper-teeth-bare_1134-1439.jpg?w=1380&t=st=1705642608~exp=1705643208~hmac=b64ae8a7c950c4889d8abedb9e47f47cf8a0ced31e2a0928fe0c59a1be0e59f0"
                    alt="Running"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Runnung</p>
                </div>
            </div>
            <div className="relative col-start-1 col-end-3 row-start-2 row-end-4  w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/MN8FPY1/cyclingp.png"
                    alt="cycling"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Cycling</p>
                </div>
            </div>
            <div className="relative col-start-3 col-end-6 row-start-3 row-end-5  w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/WWw4PXm/active-swimmer-jumping-pool-competition-start-indoor-pool-european.jpg"
                    alt="swimming"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Swmming</p>
                </div>
            </div>
            <div className="relative w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/YLLk69L/silhouette-woman-doing-yoga-beach.jpg"
                    alt="meditation"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Meditation</p>
                </div>
            </div>
            <div className="relative w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/dbKPg0C/love-be-fit-inscription-board-with-food.jpg"
                    alt="weight management"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Cardio</p>
                </div>
            </div>
            <div className="relative w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/QcmcK4L/fit-man-with-cool-yoga-pose.jpg"
                    alt="pilates"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">pilates</p>
                </div>
            </div>
            <div className="relative w-full h-full">
                <Image
                    height={100}
                    width={100}
                    objectFit="cover"
                    src="https://i.ibb.co/wNNHNtt/strong-man-training-gym.jpg"
                    alt="Cardio"
                    className="w-full h-full"
                />
                <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <p class="text-white text-lg font-bold">Gym</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HealthAndFitness;