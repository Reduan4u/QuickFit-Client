"use client"

import LoginButton from "@/components/Common/LoginButton";
import UseCourses from "@/hooks/UseCourses";
import { FaBook, FaCertificate, FaUser } from "react-icons/fa";
import {  FaClock } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import Swal from "sweetalert2";

const LeftSide = ({params}) => {
    const {refetch, isPending, courses} = UseCourses()
    const course = courses?.find(item => item?.category == params.id)

    const handleCertificate= () => {
 Swal.fire({
            icon: "error",
            title: `Not eligible for the certificate`,
            text: `Not eligible for the certificate`,
          })
    }

    return (
        <div className="bg-four rounded-sm w-full md:w-2/6 p-8">
                <h1 className="font-bold text-3xl text-one text-center py-5">${course?.price}</h1>
                <div className="flex justify-between items-center border-y-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaUser className="text-three"/>Instructor</p>
                    <p>{course?.courseProvider}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                    <p className="flex justify-center items-center gap-2"><FaClock className="text-three"/>Duration</p>
                    <p>{course?.courseDuration} min</p>
                </div>
                <div className="flex justify-between items-center border-y-2 py-3">
                    <p className="flex justify-center items-center gap-2"><SiLevelsdotfyi className="text-three" />Level</p>
                    <p>{course?.level}</p>
                </div>
                <div className="flex justify-between items-center border-b-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaBook className="text-three"/>Language</p>
                    <p>English</p>
                </div>
                <div className="flex justify-between items-center border-b-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaCertificate className="text-three"/>Certificate</p>
                    <p>Yes</p>
                </div>
                <div className="py-5">
                <LoginButton onClick={handleCertificate}>Certificate</LoginButton>
                </div>
            </div>
    );
};

export default LeftSide;