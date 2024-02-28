import AllCourses from "@/components/Courses/AllCourses/AllCourses";
import CBanner from "@/components/Courses/CBanner/CBanner";
import Search from "@/components/Courses/Search/Search";



const page = () => {
    return (
        <div>
            <CBanner></CBanner>
            <Search></Search>
            <AllCourses></AllCourses>
        </div>
    );
};

export default page;