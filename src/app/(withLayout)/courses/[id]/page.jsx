import CourseDetails from "@/components/Courses/CourseDetails/CourseDetails";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <PrivateRoute>
        <CourseDetails params={params}></CourseDetails>
      </PrivateRoute>
    </div>
  );
};

export default page;
