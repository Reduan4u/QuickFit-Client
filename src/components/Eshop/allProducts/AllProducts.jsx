"use client";

import { fadeIn } from "@/components/Common/Animation1";
import { motion } from "framer-motion";
import ProductCard from "@/components/cards/ProductCard/ProductCard";

function AllProducts({ products }) {
  return (
    <motion.div
      variants={fadeIn(`right`, 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </motion.div>
  );
}

export default AllProducts;
