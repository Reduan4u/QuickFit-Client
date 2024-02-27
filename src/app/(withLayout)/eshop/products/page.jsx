import Ebanner from '@/components/Eshop/Ebanner/Ebanner'
import ProductCard from '@/components/cards/ProductCard/ProductCard';

const page = async () => {

  const res = await fetch ("https://quick-fit-server.vercel.app/api/v1/eshop") ;
  const products = await res.json()

  return (
    <>
      <Ebanner image={"https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-189.jpg?size=626&ext=jpg&ga=GA1.1.64102172.1708667602&semt=ais"} heading={"All Products"} />

    {/* all the products of all category */}
      <div className='my-20 w-10/12 mx-auto'>
             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
             {
          products.map(product => <ProductCard key={product?._id} product={product}/>)
        }
             </div>
      </div>
      </>
  )
}

export default page