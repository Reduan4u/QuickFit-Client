import ProductDetails from "@/components/Eshop/productDetails/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  const res = await fetch(
    `https://quick-fit-server.vercel.app/api/v1/eshop/data/${params.single}`,
    { cache: "no-store" }
  );
  const product = await res.json();

  return (
   <ProductDetails product={product} params={params}></ProductDetails>
  );
};

export default ProductDetailsPage;
