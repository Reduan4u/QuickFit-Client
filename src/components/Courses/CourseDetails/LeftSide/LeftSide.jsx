"use client"

import UseCourses from "@/hooks/UseCourses";
import { FaBook, FaCertificate, FaLanguage, FaLevelUpAlt, FaUser } from "react-icons/fa";
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
        <div className="bg-[#F8F6F4] w-full md:w-2/6 p-8">
                <h1 className="font-bold text-3xl text-center py-5">Price</h1>
                <div className="flex justify-between items-center border-y-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaUser className="text-primary"/>Instructor</p>
                    <p>{course?.courseProvider}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                    <p className="flex justify-center items-center gap-2"><FaClock className="text-primary"/>Duration</p>
                    <p>{course?.courseDuration} min</p>
                </div>
                <div className="flex justify-between items-center border-y-2 py-3">
                    <p className="flex justify-center items-center gap-2"><SiLevelsdotfyi className="text-primary" />Level</p>
                    <p>{course?.level}</p>
                </div>
                <div className="flex justify-between items-center border-b-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaBook className="text-primary"/>Language</p>
                    <p>English</p>
                </div>
                <div className="flex justify-between items-center border-b-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaCertificate className="text-primary"/>Certificate</p>
                    <p>Yes</p>
                </div>
                <div className="flex justify-center items-center py-5">
                    <button className="btn rounded-full border-none bg-primary text-white uppercase px-5 hover:bg-black disabled" onClick={handleCertificate}>Certificate</button>
                </div>
            </div>
    );
};

export default LeftSide;