
import Link from 'next/link';
import Button1 from '@/components/Common/Button1';
import Image from 'next/image';

const page = async({params}) => {

    const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/newStories/${params.id}`,{
        cache:"no-store"
    })
    const data = await res.json();

    console.log(data.paragraph);
    
    return (
        <div className=' mx-auto container my-4'>
            <div className=' flex justify-between items-center my-12'>
            <h2 className=' text-5xl font-extrabold'>{data.title}</h2>
                <p className=' text-orange-500'>#{data.category.replace(" ","").toLowerCase()}</p>
            </div>
            <div className=' my-4'>
                <Image 
                height={1080}
                width={1920}
                 src={data.img}
                 alt='image'/>
            </div>
            <div className=' '>
                <div className=' my-12 text-orange-800  italic'>
                    
                    <p className='  text-lg mt-2 '>{new Intl.DateTimeFormat('en-US', { month: 'long', day: "numeric" }).format(new Date(data.date)).replace(" ",",")}</p>
                    <p className='  text-lg'>{data.author}</p>
                </div>
                <div className=' my-4'>
                    {data.paragraph.map((para,index) => <div className=' my-3 text-black/60 italic' key={index}>
                        <p>{para}</p>

                    </div>)}

                </div>
            </div>

            <div className=' my-9 flex justify-end items-center'>
                
                <Link href="/allStories"><Button1 title={"More Stories"}/></Link>
            </div>
        </div>
    );
};

export default page;