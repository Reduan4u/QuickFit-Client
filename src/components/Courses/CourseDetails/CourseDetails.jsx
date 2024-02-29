
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";



const CourseDetails = () => {


    return (
        <div className="flex-row md:flex justify-between gap-12 items-start w-[70vw] mx-auto py-10">
            {/* Left Side */}
            <LeftSide></LeftSide>

            {/* Right Side */}
            <RightSide></RightSide>
        </div>
    );
};

export default CourseDetails;