import Image from "next/image";


const Advertisement = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <Image
                    objectFit="cover"
                    height={500}
                    width={500}
                    alt="Book"
                    className=" w-full h-full max-w-sm rounded-lg shadow-2xl"
                    src="https://i.postimg.cc/5ysWd310/Book.png" />
                <div>
                    <h1 className="text-5xl font-bold">Healthy Lifestyle!</h1>
                    <p className="py-6">This week-by-week plan, The Harvard Medical School 6-Week Plan for Healthy Eating, will help you transform your eating habits into a program of nutritious and delicious food choices that can last a lifetime. Applying the latest results from nutrition science, Harvard experts take you by the hand and guide you to create an eating plan to improve heart health, longevity, energy, and vitality.</p>
                    <button className="btn bg-red-800 text-white rounded-none">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;