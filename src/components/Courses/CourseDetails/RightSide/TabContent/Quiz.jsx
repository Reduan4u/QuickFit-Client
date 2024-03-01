import Ebutton2 from "@/components/Common/Ebutton2";
import { useState } from "react";

const Quiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Question {currentQuestionIndex + 1}:</h2>
        <p className="text-gray-700 mb-4">{quiz[currentQuestionIndex].question}</p>
        <div className="flex flex-col space-y-4">
          {quiz[currentQuestionIndex].options.map((option, index) => (
            <button 
              key={index} 
              className="bg-tertiary hover:bg-primary text-black border font-semibold py-2 px-4 rounded-lg shadow-md"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {currentQuestionIndex === quiz.length - 1 ? (
            <div>
              <Ebutton2>Complete</Ebutton2>
            </div>
          ) : (
            <div onClick={handleNextQuestion}>
              <Ebutton2>Next</Ebutton2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
