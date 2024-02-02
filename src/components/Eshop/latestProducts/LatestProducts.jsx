"use client";
import SectionHeading from "@/components/Common/SectionHeading";
import ProductCard from "@/components/cards/ProductCard/ProductCard";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";
import "swiper/swiper-bundle.css";

const LatestProducts = async (props) => {
  const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/eshop`, {
    cache: "no-store"
  });
  const products = await res.json();


  return (
    <div className="w-10/12 mx-auto my-20">

      <SectionHeading title={"New Arrivals"}></SectionHeading>


      {/* swiper for medium and large device */}
      <div className="hidden md:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          freeMode={true}
          initialSlide={3}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
        >
          {products.slice(0, 7).map((item) => (
            <div>
              {" "}
              <SwiperSlide className="border border-black border-b-0 border-t-0">
                <ProductCard product={item}></ProductCard>
              </SwiperSlide>
              <Pagination />
            </div>
          ))}
        </Swiper>
      </div>

      {/* swiper for mobile device */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          freeMode={true}
          // pagination={{ clickable: false }}
          navigation>
          {products.slice(0, 7).map((item) => (
            <div>
              {" "}
              <SwiperSlide className="border border-black border-b-0 border-t-0">
                <ProductCard product={item}></ProductCard>
              </SwiperSlide>
              <Pagination />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProducts;
