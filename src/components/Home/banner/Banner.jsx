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
                    src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="slider1" className="object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[80vh]">
                <Image width={1000}
                    height={400}
                    style={{ width: '100%', height: '100%' }} src="https://media.discordapp.net/attachments/1197418462570610719/1197627788828610760/dan-gold-4_jhDO54BYg-unsplash.jpg?ex=65bbf4cb&is=65a97fcb&hm=ed9a667462872333478b0fa47e84f3199892afec314644fa628a336f1e89c570&=&format=webp&width=800&height=533" alt="slider2" className="object-fill" />
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
                    src="https://media.discordapp.net/attachments/1197418462570610719/1197628422902534225/kaylee-garrett-GaprWyIw66o-unsplash.jpg?ex=65bbf562&is=65a98062&hm=01860762272384b00cad32faadd5fc226408107efe869bae7eb8e9253b69075c&=&format=webp&width=800&height=533" alt="slider3" className="object-fill" />
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