"use client";

import Ebutton from "@/components/Common/Ebutton";
import Ebutton2 from "@/components/Common/Ebutton2";
import SectionHeading from "@/components/Common/SectionHeading";
import Loading1 from "@/components/Loading/Loading1";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Cart = async ({params}) => {
  const {isPending, refetch, products } = useCart();
  const axiosPublic = useAxiosPublic()
  const [price, setPrice] = useState({})
  const [total, setTotal] = useState({})

  const qtyHandler = (e, productId) => {
    e.preventDefault()

    const priceNum = parseFloat(e.target.value)
    price.id = productId
    price.price = priceNum

    setPrice((prevPrice) => ({
      ...prevPrice,
      [productId]: priceNum 
    }));
    
    const totalNum = parseFloat(e.target.value)+0.5
    total.id = productId
    total.price = totalNum

    setTotal((prevPrice) => ({
      ...prevPrice,
      [productId]: totalNum 
    }));

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
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/cart/${id}`)
        .then(res=>{
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      
        })
      }
    });


  }


if(isPending){
return <Loading1></Loading1>
}


  return (
    <div className="mt-10 mb-20 w-10/12 mx-auto ">
      {/* header left side  */}
      <SectionHeading title={"Shopping Cart"}></SectionHeading>

      {/* carts  */}
      {
        products?.map(product=><div key={product._id} className=" border-t py-5 border-gray-400 flex gap-10">
        {/* image div  */}
        <div className="w-3/12 h-60 ">
          <img
            src={product?.image}
            className="w-full h-full object-cover"
          />
        </div>
        {/* product info div  */}
        <div className="w-3/12 space-y-3 p-5">
          <p className="text-2xl font-bold">{product?.title}</p>
          <p className="flex gap-5 items-center">
            <span className="text-xl font-medium ">Quantity:</span>
            <select
              onChange={(e)=>qtyHandler(e,product._id)}
              name="qty"
              className="w-16 border border-black font-bold px-2 py-1 rounded bg-tertiray text-black">
              <option value={product?.price*1}>1</option>
              <option value={product?.price*2}>2</option>
              <option value={product?.price*3}>3</option>
              <option value={product?.price*4}>4</option>
              <option value={product?.price*5}>5</option>
              <option value={product?.price*6}>6</option>
            </select>
          </p>
          <p className="text-xl font-medium  text-black">
            Price: <span className="text-2xl mb-3 font-bold">{product?.price}</span>
          </p>
          <div>
          <Link href={`/eshop/products/${product?.category}/${product?.ProductID}`}>
            <Ebutton2>Details</Ebutton2>
          </Link>
          </div>
        </div>

        {/* order summury div  */}
        <div className="w-6/12 bg-tertiary p-5">
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
        </div>
      </div>)
      }
    </div>
  );
};

export default Cart

