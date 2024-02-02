"use client";
import SectionHeading from "@/components/Common/SectionHeading";
import ProductCard from "@/components/cards/ProductCard/ProductCard";

const LatestProducts = async (props) => {
  const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/eshop`, {
    cache: "no-store"
  });
  const products = await res.json();


  return (
    <div className="w-10/12 mx-auto my-20">

      <SectionHeading title={"New Arrivals"}></SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          products.slice(0, 3).map((item) => <ProductCard key={item._id} product={item}> </ProductCard>)
        }
      </div>

    </div>
  );
};

export default LatestProducts;
