"use client"
import ProductCard from "@/components/cards/ProductCard/ProductCard";
import useCategoryProducts from "@/hooks/useCategoryProducts";

const AllProducts = async ({params}) => {

    const { products} = useCategoryProducts(params)


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default AllProducts;
