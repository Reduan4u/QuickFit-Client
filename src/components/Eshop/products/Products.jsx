"use client";

import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";

const Products = () => {
  const products = [ 
    {
      category: "Food",
      image:
        "https://images.pexels.com/photos/5692230/pexels-photo-5692230.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      category: "Skincare",
      image:
        "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      category: "Fitness",
      image:
        "https://images.pexels.com/photos/6339607/pexels-photo-6339607.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="shadow-xl shadow-gray-200 w-10/12 mx-auto my-20 ">
      <SectionHeading title={"Products Category"}></SectionHeading>

      {/* product category div  */}

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <motion.div
          variants={fadeIn(`up`, 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className=" w-full relative overflow-hidden">
            <Link href={`/eshop/products/${item.category}`}>
              <div className="flex justify-center items-center p-28 bg-black bg-opacity-45">
                <h1 className={`text-white font-bold text-3xl`}>
                  {item.category}
                </h1>
              </div>

              <div className=" flex items-center justify-center text-one font-bold text-3xl absolute w-full h-full bg-three -bottom-20 opacity-0 hover:bottom-0 hover:opacity-100 transition-all duration-500">
               {item.category}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
