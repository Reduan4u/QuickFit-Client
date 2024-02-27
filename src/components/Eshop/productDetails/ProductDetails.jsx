"use client";

import Title from "@/components/Common/Title";
import Link from "next/link";
import { fadeIn } from "@/components/Common/Animation1";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "@/components/Provider/AuthProvider";
import Ebutton from "@/components/Common/Ebutton";
import EshopNav from "../eshopNavbar/EshopNav";

function ProductDetails({ product, params }) {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const email = user?.email;
 

  const { _id, category, title, subTitle, image, price, features } = product;

  const handleAddToCart = async () => {
    const obj = {
      ProductID: _id,
      email,
      category,
      title,
      subTitle,
      image,
      price,
    };

    axiosPublic.post("/cart", obj).then((data) => {
      console.log(data.data)
      if (data.data.message) {
        Swal.fire({
          icon: "error",
          title: `${title}`,
          text: `${data.data.message}`,
        });
      }
      if (data.data.ProductID) {
        Swal.fire({
          icon: "success",
          title: `${title}`,
          text: "Added to the cart!",
          footer: `<a href="/eshop/cart/${email}"  className="font-semibold hover:text-orange-700 border-b-2 border-black hover:border-orange-700 transition-all duration-300">Click to see your cart</a>`,
        });
      }
    });
  };

  return (
    <div className="w-10/12 lg:w-9/12 mx-auto ">
      <EshopNav></EshopNav>
      {/* title  */}
      <motion.div
        variants={fadeIn(`bottom`, 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}>
        <Title heading={"Product Details"}></Title>
      </motion.div>

      <div>
        <div className="flex flex-col md:flex-row gap-5 items-center my-10">
          {/* image div  */}
          <motion.div
            variants={fadeIn(`right`, 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2">
            <Link href={`/eshop/products/${params.id}`}>
              <button className="mb-5 text-secondary font-semibold hover:text-primary border-b-2 border-primary hover:border-primary transition-all duration-300">
                Back To {params.id} Products
              </button>
            </Link>
            <img src={image} className="w-full h-[50vh] object-cover" />
          </motion.div>

          {/* content div  */}
          <motion.div
            variants={fadeIn(`right`, 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" md:w-1/2 md:pl-16 md:mt-0">
            <h1 className="text-3xl mb-2 font-semibold">{title}</h1>
            <p className="pb-2 border-b-2 border-gray-600">{subTitle}</p>
            <p className="text-xl font-medium mt-5">
              Why Should You Purchase This Product?
            </p>

            <div className="mb-2">
              {features.map((item) => (
                <p key={_id} className="font-medium py-1">
                  | {item}
                </p>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-5">
              {price}$
            </h2>

            <div className="flex flex-col md:flex-row gap-5">
              <Ebutton>
                <span onClick={handleAddToCart}>  Add To Cart</span>
              </Ebutton>
              <Link href={`/eshop/orderForm/${_id}`}>
                <Ebutton>
                  Order Now
                </Ebutton>
              </Link>
            </div>
          </motion.div>
          {/* all content end  */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
