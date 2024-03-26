"use client";
import UseTracker from "@/hooks/UseTracker";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import Loading1 from "@/components/Loading/Loading1";

const TrackerCard = ({ item }) => {
  const axiosPublic = useAxiosPublic();
  const { refetch, isPending } = UseTracker();
  const cardClass1 =
    "flex flex-col justify-center item-center p-2 w-28 md:w-32 bg-white text-center  rounded shadow-md";

  const { value, target, unit, _id, exercise, status } = item;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tracker/${id}`).then((res) => {
          refetch()
        });
        Swal.fire({
          title: "Deleted!",
          text: `${exercise} has been deleted.`,
          icon: "success"
        });
      }
    });

  };

  if(isPending){
    return <Loading1 />
  }

  return (
    <motion.div
    variants={fadeIn("left", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0 }}
  >
    <div className="bg-gradient-to-r from-three to-one p-3 rounded-lg">
      {/* value and target start */}
      <div className="flex items-center justify-between gap-4">
        {/* 1st card  */}
        <div className={cardClass1}>
          <h2 className="text-lg font-semibold capitalize">{exercise}</h2>
          <p>
            {value} {unit}
          </p>
        </div>

        {/* 2nd card  */}
        <div className={cardClass1}>
          <h2 className="text-lg font-semibold">Target</h2>
          <p>
            {target} {item?.unit}
          </p>
        </div>
      </div>
      {/* value and target end */}

      {/*== progress bar , edit, delete== */}
      <div className="flex justify-center  items-center flex-row mt-4 mx-2 ">
        {/* progress  */}
        <div className="flex justify-end items-center w-2/3">
          <div
            className="radial-progress bg-white text-lg transition duration-300"
            style={{ "--value": (value / target) * 100 }}
            role="progressbar">
            {parseInt((value / target) * 100) > 99.99 ||
            status == "complete" ? (
              <BsCheck className="text-green-500 w-20 h-20" />
            ) : (
              parseInt((value / target) * 100) + "%"
            )}
          </div>
        </div>

        {/*= edit , delete  =*/}
        <div className="w-1/3 flex justify-end items-baseline gap-5 text-white">
          {/* edit  */}
          <button className={`hover:scale-125 transition duration-200 ${parseInt((value / target) * 100) > 99.99 || status == "complete" ? "hidden" : ''}`}>
            <Link href={`/tracker/update/${_id}`}>
              <FaEdit />
            </Link>
          </button>
          {/* delete  */}
          <button
            onClick={() => handleDelete(_id)}
            className="hover:scale-125 transition duration-200">
            <FaTrash />
          </button>
        </div>
      </div>
      {/*=== progress bar , edit ,delete end === */}
    </div>
  </motion.div>

  );
};

export default TrackerCard;
