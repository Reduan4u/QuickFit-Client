import { FaBook, FaCertificate, FaLanguage, FaLevelUpAlt, FaUser } from "react-icons/fa";
import {  FaClock } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";

const LeftSide = ({params}) => {
    return (
        <div className="bg-[#F8F6F4] w-full md:w-2/6 p-8">
                <h1 className="font-bold text-3xl text-center py-5">Price</h1>
                <div className="flex justify-between items-center border-y-2 py-3">
                    <p className="flex justify-center items-center gap-2"><FaUser className="text-primary"/>Instructor</p>
                    <p>Instructor Name</p>
                </div>
                <div className="flex justify-between items-center py-3">
                    <p className="flex justify-center items-center gap-2"><FaClock className="text-primary"/>Duration</p>
                    <p>1 week</p>
                </div>
                <div className="flex justify-between items-center border-y-2 py-3">
                    <p className="flex justify-center items-center gap-2"><SiLevelsdotfyi className="text-primary" />Level</p>
                    <p>....</p>
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
                    <button className="btn rounded-full border-none bg-primary text-white uppercase px-5 hover:bg-black">Enroll Now</button>
                </div>
            </div>
    );
};

export default LeftSide;