import Ebanner from "@/components/Eshop/Ebanner/Ebanner";
import AllProducts from "@/components/Eshop/allProducts/AllProducts";


const DynamicProducts = async ({ params }) => {
  const imgFood =
    "https://images.pexels.com/photos/5692230/pexels-photo-5692230.jpeg?auto=compress&cs=tinysrgb&w=600";
  const imgSkincare =
    "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600";
  const imgFitness =
    "https://images.pexels.com/photos/6339607/pexels-photo-6339607.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div>
      {/*== banner here === */}
      <div>
        {params.id == "Food" && (
          <Ebanner
            image={imgFood}
            heading={`QuickFit ${params.id} Products`}></Ebanner>
        )}
        {params.id == "Skincare" && (
          <Ebanner
            image={imgSkincare}
            heading={`QuickFit ${params.id} Products`}></Ebanner>
        )}
        {params.id == "Fitness" && (
          <Ebanner
            image={imgFitness}
            heading={`QuickFit ${params.id} Products`}></Ebanner>
        )}
      </div>

      {/*==== product list card here ===== */}
      <div className="w-10/12 mx-auto">
         <AllProducts params={params}></AllProducts>
      </div>
    </div>
  );
};

export default DynamicProducts;
