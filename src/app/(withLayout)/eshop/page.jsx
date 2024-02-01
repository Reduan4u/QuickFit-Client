import Ebanner from "@/components/Eshop/Ebanner/Ebanner";
import LatestProducts from "@/components/Eshop/latestProducts/LatestProducts";
import Products from "@/components/Eshop/products/Products";

const Eshop = () =>{


    return (
        <div>
          <div><Ebanner></Ebanner></div>
          <div><Products></Products></div>
          <div><LatestProducts></LatestProducts></div>
        </div>
    )
}

export default Eshop ;

