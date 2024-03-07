"use client";

import Ebutton from "@/components/Common/Ebutton";
import Ebutton2 from "@/components/Common/Ebutton2";
import SectionHeading from "@/components/Common/SectionHeading";
import Loading1 from "@/components/Loading/Loading1";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Cart1 = ({ params }) => {
  const { isPending, refetch, products } = useCart();
  const axiosPublic = useAxiosPublic();
  const [qty, setQty] = useState({ num: 1 });


  //   increase qty handler 
  const handleQtyInc = () => {
    qyt.num
    setQty(qty + 1)
  }

  //   decrease qty handler 
  const handleQtyDcr = () => {
    if (qty - 1 >= !0)
      setQty(qty - 1)
  }

  // delete cart product
  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${id} will be delete`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/cart/${id}`).then((res) => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  //   if (isPending) {
  //     return <Loading1></Loading1>;
  //   }

  return (
    <div className="mt-10 mb-20 w-10/12 mx-auto ">
      {/* header left side  */}
      <SectionHeading title={"Shopping Cart"}></SectionHeading>



      {/* carts  */}
      {products?.map((product) => (
        <div
          key={product._id}
          className=" border-t py-5 border-gray-400 flex md:flex-row flex-col md:gap-10"
        >
          {/* image div  */}
          <div className="md:w-6/12 h-48 ">
            <Image   height={500}
                  width={500}F src={product?.image} className="w-full h-full object-cover" />
          </div>
          {/* product info div  */}
          <div className="md:w-4/12 space-y-3 p-5">
            <p className="text-2xl font-bold">{product?.title}</p>

            <p className="text-xl font-medium  text-black">
              Price:
              <span className="text-2xl mb-3 font-bold">{product?.price}</span>
            </p>
            <div>
              <Link
                href={`/eshop/products/${product?.category}/${product?.ProductID}`}
              >
                <Ebutton2>Details</Ebutton2>
              </Link>
            </div>
          </div>

          {/* increase and decrease Quantity  */}
          <div className="md:w-2/12">
            <button
              onClick={handleQtyInc}
              className="bg-primary text-black hover:shadow-xl hover:text-xl px-4 py-1 font-bold text-lg transition-all duration-200">
              +
            </button>
            <span className="text-xl font-semibold px-2">{qty.num}</span>
            <button
              onClick={handleQtyDcr}
              className="bg-primary text-black hover:shadow-xl hover:text-xl px-4 py-1 font-bold text-lg transition-all duration-200">
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart1;
{
  /* order summury div  */
}
{
  /* <div className="w-6/12 bg-tertiary p-5">
          <h3 className="text-2xl font-bold mb-5">Order Summury:</h3>

          <p className="flex justify-between my-1">
            Sub Totlal:<span>
              {price.id==product._id ? price.price : product.price}$
              </span>
          </p>
          <p className="flex justify-between my-1">
            Shipping Charge:<span>0.50$</span>
          </p>
          <hr />

          <p className="flex justify-between my-2 text-lg font-medium">
            Total:<span>
            {total.id==product._id ? total.price : parseFloat(product.price)+0.5}$
             </span>
          </p>

          <div className="flex justify-between items-center">
            <Ebutton>
              <Link  href={`/eshop/orderForm/${product._id}/${total.price?total?.price : product?.price}`}>Pay</Link>
          
              </Ebutton>
            <button>
              <AiFillDelete  onClick={()=>deleteProduct(product?._id)} className="text-2xl text-black hover:text-primary transition duration-200"></AiFillDelete>
            </button>
          </div>
        </div> */
}
