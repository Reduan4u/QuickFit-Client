"use client"

import { fadeIn } from "@/components/Common/Animation1";
import { motion } from "framer-motion";
import Link from "next/link";
import "./product.css"
import Ebutton from "@/components/Common/Ebutton";

function ProductCard({ product }) {
  return (
    <div>
      <motion.div
      variants={fadeIn(`right`, 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}>

        {/* image div  */}
        <div className="zoom-img relative w-full h-72">
          
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover shadow-xl shadow-neutral-400"
          />
          <p className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-70 text-primary py-3 text-xl font-bold">{product.price}$</p>
        </div>

       {/* content div  */}
        <div className="text-center px-2 ">
          <h1 className="mt-5 text-xl font-bold">{product.title} </h1>
          <p className="mt-5">{product.subTitle.slice(0, 64)}... </p>
          <Link href={`/eshop/products/${product.category}/${product._id}`}>
           <Ebutton>Product Info</Ebutton>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductCard;
