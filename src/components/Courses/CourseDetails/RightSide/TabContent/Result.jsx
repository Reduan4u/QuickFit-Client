"use client";
import LoginButton from "@/components/Common/LoginButton";
import UseContext from "@/hooks/UseContext";
import UseCourseDetails from "@/hooks/UseCourseDetails";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Result = ({ score, quiz, id, handleTryAgain }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseContext();
  const {refetch} = UseCourseDetails()

  const handleComplete = (result) => {
    const data = { id, email: user?.email };

    if (result == "passed") {
      // Certification email going to back end here
      axiosPublic.patch("/course-certificate", data).then((res) => {
        refetch()
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Congratulation!! You are now eligible for the certificate",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  return (
    <div className="border border-one bg-four flex flex-col md:flex-row justify-center items-center">
      <div className="text-xl font-medium py-10">
        {score >= 3 ? (
          <>
            <h1 className="text-2xl font-semibold text-two text-center">
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
            <h1 className="text-2xl font-semibold text-red-500 text-center">
              Failed
            </h1>
            <p>
              Your Score: <span className="font-bold mb-2">{score}</span>
            </p>
            <p>
              Total Score:<span className="font-bold">{quiz?.length}</span>
            </p>

            <div className="mt-5">
              <div onClick={handleTryAgain}>
                <LoginButton>Try Again</LoginButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
