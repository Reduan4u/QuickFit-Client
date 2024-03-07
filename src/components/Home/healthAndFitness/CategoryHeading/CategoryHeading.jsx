import Ebanner from "@/components/Eshop/Ebanner/Ebanner";
import Image from "next/image";


const CategoryHeading = async ({ params }) => {
    return (
        <div>
            <Ebanner heading={params.id} image={'https://i.postimg.cc/DySjxdZ2/cate.jpg'}></Ebanner>
        </div>
    );
};

export default CategoryHeading;