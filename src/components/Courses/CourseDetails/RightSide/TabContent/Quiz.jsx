"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import { useState } from "react";
import Result from "./Result";
import UseContext from "@/hooks/UseContext";

const Quiz = ({ course }) => {
  const {user} = UseContext()
  const quiz = course?.quiz;
  const isCertified = course?.certification.includes(user?.email);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = () => {
    updateScore();
    if (currentQuestionIndex !== quiz?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setClickedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption == quiz[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setClickedOption(null);
  };

  const buttonClass =
    "font-medium  w-full px-5 py-3 rounded-3xl bg-one hover:bg-three hover:text-black text-four  transition-all duration-500";

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="lg:w-3/5 py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden "
    >
      {isCertified ? (
        <>
        <div className="capitalize w-full flex justify-center items-center text-center text-one md:p-10">
          <div className="text-xl font-semibold space-y-3">
          <h1 className="text-2xl text-two ">You passed the quiz</h1>
          <h2>Please Download your certificate</h2>
          </div>
        </div>
        </>
      ) : (
        <>
          {showResult ? (
            <Result
              score={score}
              quiz={quiz}
              id={course?._id}
              handleTryAgain={handleTryAgain}
            ></Result>
          ) : (
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                Question {currentQuestionIndex + 1}:
              </h2>
              <p className="text-gray-700 mb-4">
                {quiz[currentQuestionIndex].question}
              </p>
              <div className="flex flex-col space-y-4">
                {quiz[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setClickedOption(index + 1)}
                    className={`${
                      clickedOption == index + 1 ? "bg-three" : null
                    } hover:bg-three hover:text-white transition-all border font-medium py-2 px-4 rounded-lg shadow-md`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="mt-7">
                <div className="w-10/12 mx-auto">
                  <button
                    disabled={!clickedOption}
                    className={buttonClass}
                    onClick={handleNextQuestion}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Quiz;
