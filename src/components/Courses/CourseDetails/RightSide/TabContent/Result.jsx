"use client";
import LoginButton from "@/components/Common/LoginButton";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Result = ({ score, quiz, category }) => {
  const handleComplete = (result) => {
    if (result == "passed") {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Congratulation!! You are now eligible for the certificate",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="border border-one bg-four flex flex-col md:flex-row justify-center items-center">
      <div className="text-xl font-medium py-10">
        {score >= 3 ? (
          <>
            <h1 className="text-xl font-semibold text-one text-center">
              Passed
            </h1>
            <p>
              Your Score: <span className="font-bold mb-2">{score}</span>
            </p>
            <p>
              Total Score:<span className="font-bold">{quiz?.length}</span>
            </p>

            <div onClick={() => handleComplete("passed")} className="mt-5">
              <LoginButton>Complete</LoginButton>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-semibold text-one text-center">
              Failed
            </h1>
            <p>
              Your Score: <span className="font-bold mb-2">{score}</span>
            </p>
            <p>
              Total Score:<span className="font-bold">{quiz?.length}</span>
            </p>

            <div className="mt-5">
              <Link href={`/courses/${category}`}>
                <LoginButton>Try Again</LoginButton>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
