
import Ebanner from "@/components/Eshop/Ebanner/Ebanner";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";



const CourseDetails = ({ params }) => {


    return (
        <div>
            <Ebanner heading={"Course Details"} image={'https://i.postimg.cc/ZnpdjtjN/desk-workspace-with-various-elements.jpg'}></Ebanner>
            <div className="flex-row md:flex justify-between gap-12 items-start w-[70vw] mx-auto py-10">

                {/* Left Side */}
                <LeftSide params={params}></LeftSide>

                {/* Right Side */}
                <RightSide params={params}></RightSide>
            </div>
        </div>
    );
};

export default CourseDetails;