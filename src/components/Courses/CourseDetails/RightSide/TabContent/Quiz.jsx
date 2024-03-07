"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import LoginButton from "@/components/Common/LoginButton";
import { useState } from "react";


const Quiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden"
    >
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
              className="bg-tertiary hover:bg-three hover:text-white transition-all border font-medium py-2 px-4 rounded-lg shadow-md"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-7">
          {currentQuestionIndex === quiz.length - 1 ? (
            <div>
              <LoginButton>Complete</LoginButton>
            </div>
          ) : (
            <div onClick={handleNextQuestion} className="w-10/12 mx-auto">
              <LoginButton>Next</LoginButton>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;
