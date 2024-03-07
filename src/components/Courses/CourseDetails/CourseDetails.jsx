
import Ebanner from "@/components/Eshop/Ebanner/Ebanner";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";



const CourseDetails = ({ params }) => {
  const category = params?.id

    return (
        <div>
            <Ebanner heading={"Course Details"} image={'https://img.freepik.com/free-vector/natural-exotic-leaves-background_23-2148521958.jpg?w=740&t=st=1709724977~exp=1709725577~hmac=ad8882772d8e1cdc2d5a320be5c6752e0ec739884d65682fb9db220142a34c65'}></Ebanner>
            <div className="flex-row md:flex justify-between gap-12 items-start w-[70vw] mx-auto py-10">

                {/* Left Side */}
                <LeftSide category={category}></LeftSide>

                {/* Right Side */}
                <RightSide category={category}></RightSide>
            </div>
        </div>
    );
};

export default CourseDetails;