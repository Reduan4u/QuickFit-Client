import Image from "next/image";




const Banner = () => {
    return (
        <div className="carousel w-full mt-5 rounded-sm">
            <div id="slide1" className="carousel-item relative w-full h-[80vh]">
                <Image
                    width={1000}
                    height={100}
                    style={{ width: '100%', height: '100%' }}
                    src="https://i.ibb.co/YR7zZQp/banner1.png" alt="slider1" className="object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[80vh]">
                <Image width={1000}
                    height={400}
                    style={{ width: '100%', height: '100%' }} src="https://i.ibb.co/QJXwLGJ/banner2.png" alt="slider2" className="object-fill" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[80vh]">
                <Image
                    width={1000}
                    height={400}
                    style={{ width: '100%', height: '100%' }}
                    src="https://i.ibb.co/7YSVCD6/banner3.png" alt="slider3" className="object-fill" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[80vh]">
                <Image
                    width={1000}
                    height={400}
                    style={{ width: '100%', height: '100%' }}
                    src="https://i.ibb.co/L8LFLrT/banner4.png" alt="slider4" className="object-fill" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>


    );
};

export default Banner;