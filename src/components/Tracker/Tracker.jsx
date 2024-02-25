"use client";
import EHeading from "../Common/EHeading";
import AddExerciseForm from "./AddExerciseForm";
import Loading1 from "../Loading/Loading1";
import TrackerCard from "./tracker_card/TrackerCard";
import UseTracker from "@/hooks/UseTracker";

const Tracker = () => {
  const { isPending, tracker } = UseTracker();

  const  currentDate = new Date()
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1
  const date = currentDate.getDate()
  const today = (year+"-"+month+"-"+date)
  const todayTracker = tracker?.filter(item => item?.date == today)


  if (isPending) {
    return <Loading1 />;
  }

  return (
    <div>
      {tracker?.length > 0 && (
        <div>
          <EHeading>Todays Progress</EHeading>
          <div className="w-10/12 mx-auto flex flex-wrap lg:flex-row gap-8 lg:justify-center ">
            {todayTracker?.map((item) => (
              <TrackerCard key={item?._id} item={item}></TrackerCard>
            ))}
          </div>
        </div>
      )}

      <div id="exerciseForm" className="mt-12">
        <EHeading>Add Exercise+</EHeading>
        <AddExerciseForm />
      </div>
    </div>
  );
};

export default Tracker;
