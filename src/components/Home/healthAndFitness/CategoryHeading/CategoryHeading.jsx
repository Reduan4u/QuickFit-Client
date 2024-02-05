import Image from "next/image";


const CategoryHeading = async ({ params }) => {
    //console.log(params)
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    //console.log(cat)
    return (
        <div className="relative w-full h-[60vh]">
            <Image
                height={1080}
                width={1920}
                alt='types'
                src={cat.image}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <p className="text-white text-4xl md:text-6xl font-extrabold flex py-10 my-10 justify-center items-center">{params.id}</p>
            </div>
        </div>
    );
};

export default CategoryHeading;