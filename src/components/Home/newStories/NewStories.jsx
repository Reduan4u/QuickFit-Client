import Image from "next/image";

const NewStories = async () => {
  const res = await fetch("http://localhost:5000/api/v1/news-stories");
  const data = await res.json();
  const slicedData = data.slice(0,5);
  console.log(slicedData);
  return (
    <div className=" my-2">
        <div className=" grid md:grid-cols-4 grid-cols-1  gap-2  ">
        {
            slicedData.map((story,index)=><div className={`${index===0 && "col-span-2 row-span-2 h-full w-full" }`} key={index}>
                <div className="relative overflow-hidden image-full rounded-none">
  <figure>
    <img  className={`rounded-none `} src={story.img} alt="Shoes" />
  </figure>
  <div className="absolute inset-0 flex flex-col items-start justify-end px-6 py-4 bg-black bg-opacity-50 text-white">
    <h2 className="text-2xl font-bold">{story.title}</h2>
    <p>{story.description}</p>
  </div>
</div>

            </div>)
        }
    </div>
    </div>
  );
};

export default NewStories;
