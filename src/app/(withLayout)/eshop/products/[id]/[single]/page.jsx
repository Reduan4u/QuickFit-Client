"use client"
import RelevantProducts from "@/components/Eshop/RelevantProducts/RelevantProducts";
import ProductDetails from "@/components/Eshop/productDetails/ProductDetails";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import useEshopProducts from "@/hooks/useEshopProducts";

const ProductDetailsPage = async ({ params }) => {
 const {products} = useEshopProducts()
 const product = products?.find(item => item._id == params.single)
 


  return (
   <PrivateRoute>
    <ProductDetails product={product} params={params}></ProductDetails>
    <RelevantProducts product={product}></RelevantProducts>
    </PrivateRoute>
  );
};

export default ProductDetailsPage;
