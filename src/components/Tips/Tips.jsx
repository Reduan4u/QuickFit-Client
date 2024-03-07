import Image from "next/image";
import Ebanner from "../Eshop/Ebanner/Ebanner";


const Tips = async () => {
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/tips", {
        cache: "no-store",
    });
    const tips = await res.json();

    return (

        <div>
            <Ebanner heading={'QuickFit Health Tips'} image={'https://i.postimg.cc/vBdYpbx8/top-view-abstract-assortment-with-innovation-elements.jpg'}></Ebanner>
            <div className="w-10/12 md:w-full mx-auto lg:w-1/2 text-justify px-0 md:px-5 lg:px-0">

                <h1 className="text-3xl md:text-4xl font-bold py-5">{tips?.length} Natural Health and Nutrition Tips That Are Evidence-Based</h1>
                {tips.map((tip, i) => (
                    <div key={tip?._id}>

                        <div className=' pt-5 text-justify'>

                            <h1 className='text-xl md:text-2xl font-bold py-5'>{i + 1}. {tip?.title}</h1>
                            <Image
                                height={500}
                                width={500}
                                alt='Article'
                                src={tip.image}
                                className='w-full mx-auto h-[75vh] object-cover border-t-4 border-one py-5'
                            />
                            <div className="text-base">
                                <p>{tip?.details?.para1}</p>
                                <p className="py-5">{tip?.details?.para2}</p>
                                <p>{tip?.details.para3}</p>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default Tips;