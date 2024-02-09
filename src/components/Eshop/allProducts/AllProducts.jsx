"use client"
import Loading1 from "@/components/Loading/Loading1";
import ProductCard from "@/components/cards/ProductCard/ProductCard";
import useCategoryProducts from "@/hooks/useCategoryProducts";

const AllProducts = async ({params}) => {

    const {isPending, products} = useCategoryProducts(params)

    if(isPending){
      <Loading1></Loading1>
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default AllProducts;
