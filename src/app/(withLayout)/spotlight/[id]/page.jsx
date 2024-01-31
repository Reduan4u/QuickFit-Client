import Image from 'next/image';

const page = async ({params}) => {
   
        const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/spotlight/${params.id}`);
        const data = await res.json();
    


    return (
   

<div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded shadow">
<h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
<p className="text-gray-600 mb-2 font-extrabold">#{data?.category}</p>

<div className="flex items-center justify-between">
  
  <p className="text-gray-600 mb-2 font-light">Posted By : {data?.author}</p>

  <p className="text-gray-500">{data?.date}</p>
</div>


<div className="relative h-48 mb-4 mt-6">
  <Image
    src={data.img}
    alt={data.title}
    layout="fill"
    objectFit="cover"
    className="rounded"
  />
</div>
<p className="text-gray-700 mb-4 mt-6">
    {
        data?.description
    }

<br></br>
<br></br>
</p>

 <p className="text-gray-700 mb-4 mt-6">Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle. Learn about the importance of incorporating a variety of nutrients into your diet.Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle. Learn about the importance of incorporating a variety of nutrients into your diet.Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle.

<br></br>
<br></br>

 Learn about the importance of incorporating a variety of nutrients into your diet.Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle. Learn about the importance of incorporating a variety of nutrients into your diet.</p>

 <p className="text-gray-700 mb-4 mt-6">Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle. Learn about the importance of incorporating a variety of nutrients into your diet.Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle. Learn about the importance of incorporating a variety of nutrients into your diet.Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle.

 Learn about the importance of incorporating a variety of nutrients into your diet.Explore a guide to balanced meals that promote wholesome nutrition for a healthier lifestyle. Learn about the importance of incorporating a variety of nutrients into your diet.</p>

</div>
    
    );
};

export default page;