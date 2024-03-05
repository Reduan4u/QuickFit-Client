"use client"
import RelevantProducts from "@/components/Eshop/RelevantProducts/RelevantProducts";
import ProductDetails from "@/components/Eshop/productDetails/ProductDetails";
import Loading1 from "@/components/Loading/Loading1";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import useEshopProducts from "@/hooks/useEshopProducts";

const ProductDetailsPage = ({ params }) => {
  const {products} = useEshopProducts()
//  const {isPending, product} = useSingleProducts(params)
 const product = products?.find(item => item?._id == params?.single)
   if(!product){
    return <Loading1 />
   }
  return (
   <PrivateRoute>
    <ProductDetails product={product} params={params}></ProductDetails>
    <RelevantProducts product={product}></RelevantProducts>
    </PrivateRoute>
  );
};

export default ProductDetailsPage;
