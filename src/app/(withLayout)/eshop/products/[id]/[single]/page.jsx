import RelevantProducts from "@/components/Eshop/RelevantProducts/RelevantProducts";
import ProductDetails from "@/components/Eshop/productDetails/ProductDetails";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const ProductDetailsPage = async ({ params }) => {
  const res = await fetch(
    `https://quick-fit-server.vercel.app/api/v1/eshop/data/${params.single}`,
    { cache: "no-store" }
  );
  const product = await res.json();

  return (
   <PrivateRoute>
    <ProductDetails product={product} params={params}></ProductDetails>
    <RelevantProducts product={product}></RelevantProducts>
    </PrivateRoute>
  );
};

export default ProductDetailsPage;
