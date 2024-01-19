import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mt-5 rounded-sm">
            <div id="slide1" className="carousel-item relative w-full h-[80vh]">
                <Image
                    width={1000}
                    height={100}
                    style={{ width: '100%', height: '100%' }}
                    src="https://media.discordapp.net/attachments/1197418462570610719/1197802056019365958/Untitled-1.png?ex=65bc9718&is=65aa2218&hm=43f5d48e66ee39a472de1f6ba4c1f40435bc564695fc46e86f6f46ff1dddaf73&=&format=webp&quality=lossless&width=1050&height=591" alt="slider1" className="object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[80vh]">
                <Image width={1000}
                    height={400}
                    style={{ width: '100%', height: '100%' }} src="https://media.discordapp.net/attachments/1197418462570610719/1197802056581382174/Untitled-3.png?ex=65bc9718&is=65aa2218&hm=25b613bd90747814acac1116594d3493f909ebf7cf923ba72e655b9c5b63b210&=&format=webp&quality=lossless&width=1050&height=591" alt="slider2" className="object-fill" />
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
                    src="https://media.discordapp.net/attachments/1197418462570610719/1197802057504129134/Untitled-6.png?ex=65bc9718&is=65aa2218&hm=c7a94f5da43ba2ef8c3a4c8458d5dfcecd859fbda5ea54057075865de7f67a28&=&format=webp&quality=lossless&width=1050&height=591" alt="slider3" className="object-fill" />
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
                    src="https://media.discordapp.net/attachments/1197418462570610719/1197623477818110053/slider_2_updated.png?ex=65bbf0c7&is=65a97bc7&hm=2a12c8318d9852ab7af267f96acb39fc48af8740d860cbbb10fb484dc440ad1a&=&format=webp&quality=lossless&width=1391&height=640" alt="slider4" className="object-fill" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;