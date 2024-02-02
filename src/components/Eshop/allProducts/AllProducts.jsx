"use client";

import ProductCard from "@/components/cards/ProductCard/ProductCard";

const AllProducts = async ({params}) => {
    const res = await fetch(
    `https://quick-fit-server.vercel.app/api/v1/eshop/${params.id}`,  {cache:"no-store"}
  );
  const products = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default AllProducts;
