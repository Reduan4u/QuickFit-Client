"use client";
import useGetTracker from "@/hooks/useGetTracker";
import EHeading from "../Common/EHeading";
import AddExerciseForm from "./AddExerciseForm";
import Loading1 from "../Loading/Loading1";
import Link from "next/link";

const Tracker = () => {
  const { isPending, tracker } = useGetTracker();

  const cardClass1 =
    "flex flex-col justify-center item-center p-2 w-28 md:w-32 bg-white text-center  rounded shadow-md";

  const data = [
    {
      name: "Steps",
      value: 5000,
      unit: "steps",
      goal: 10000,
    },
    {
      name: "Water Intake",
      value: 1500,
      unit: "ml",
      goal: 2000,
    },
    {
      name: "Sleep",
      value: 7,
      unit: "hours",
      goal: 8,
    },
    {
      name: "Push-ups",
      value: 20,
      unit: "reps",
      goal: 30,
    },
    {
      name: "Swimming",
      value: 1000,
      unit: "meters",
      goal: 1500,
    },
    {
      name: "Cycling",
      value: 15,
      unit: "km",
      goal: 20,
    },
  ];

  if (isPending) {
    return <Loading1 />;
  }

  return (
    <div>
      <EHeading>Todays Progress</EHeading>

      <div className="w-10/12 mx-auto flex flex-wrap lg:flex-row gap-8 lg:justify-center ">
        {tracker?.map((item) => (
          <div
            key={item?._id}
            className="bg-gradient-to-r from-primary to-secondary p-3">
            {/* value and target start */}
            <div className="flex items-center justify-between gap-4">
              {/* 1st card  */}
              <div className={cardClass1}>
                <h2 className="text-lg font-semibold">{item?.exercise}</h2>
                <p>
                  {item?.value} {item?.unit}
                </p>
              </div>

              {/* 2nd card  */}
              <div className={cardClass1}>
                <h2 className="text-lg font-semibold">Target</h2>
                <p>
                  {item?.target} {item?.unit}
                </p>
              </div>
            </div>
            {/* value and target end */}

            {/* progress bar  */}
            <div className="flex justify-center items-center flex-row mt-4">
              <Link href={`/tracker/update/${item?._id}`}>
                <div
                  className="radial-progress bg-tertiary hover:scale-105 transition duration-300"
                  style={{ "--value": (item.value / item?.target) * 100 }}
                  role="progressbar">
                  {parseInt((item.value / item?.target) * 100)}%
                </div>
              </Link>
            </div>
            {/* progress bar end  */}
          </div>
        ))}
      </div>

      <div id="exerciseForm" className="mt-12">
        <EHeading>Add Exercise+</EHeading>
        <AddExerciseForm />
      </div>
    </div>
  );
};

export default Tracker;
