"use client";
import SectionHeading from "@/components/Common/SectionHeading";
import ProductCard from "@/components/cards/ProductCard/ProductCard";

const RelevantProducts = async ({ product }) => {
  const res = await fetch(`https://quick-fit-server.vercel.app/api/v1/eshop`, {
    cache: "no-store",
  });
  const products = await res.json();

  const relevantProducts = products.filter(item => item.category == product.category)

  return (
    <div className="w-10/12 mx-auto my-20">
      <SectionHeading title={"Relevant Products"}></SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          relevantProducts.slice(0, 3).map((item) => <ProductCard key={item._id} product={item}> </ProductCard>)
        }
      </div>
    </div>
  );
}

export default RelevantProducts;
