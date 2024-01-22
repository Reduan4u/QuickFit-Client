
import Link from 'next/link';
import Button1 from '@/components/Common/Button1';
import Image from 'next/image';

const page = async({params}) => {

    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/monthlyPicks/${params.id}`,{
        cache:"no-store"
    })
    const data = await res.json();

    console.log(data);
    
    return (
        <div className=' mx-auto container my-4 px-2'>
            <div className=' md:flex justify-between items-center my-12'>
            <h2 className=' md:text-6xl text-3xl font-extrabold'>Monthly Picks .</h2>
                <p className=' text-orange-500 font-bold'>#january_picks</p>
            </div>
            <div className=' my-4'>
                <Image 
                height={1080}
                width={1920}
                 src={data.image}
                 alt='image'/>
            </div>
            <div className=' md:flex md:justify-between md:items-start '>
                <div className=' my-12 text-orange-500'>
                <h2 className=' md:text-4xl text-2xl font-extrabold'>{data.title}</h2>
                    
                    <p className=' font-light text-lg mt-2 '>{new Intl.DateTimeFormat('en-US', { month: 'long', day: "numeric" }).format(new Date(data.date)).replace(" ",",")}</p>
                    <p className=' font-light text-lg'>{data.author}</p>
                </div>
                <div className=' my-10'>
                {data.paragraph.map((para,index) => <div className=' my-3' key={index}>
                        <p className=' md:max-w-[50vw] text-black/50 italic'>{para}</p>

                    </div>)}

                </div>
            </div>

            <div className=' my-9 flex justify-end items-center'>
                
                <Link href="/"><Button1 title={"Go Back"}/></Link>
            </div>
        </div>
    );
};

export default page;