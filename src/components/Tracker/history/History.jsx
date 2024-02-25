"use client";
import Loading1 from "@/components/Loading/Loading1";
import UseTracker from "@/hooks/UseTracker";
import TrackerNav from "../trackerNav/TrackerNav";
import EHeading from "@/components/Common/EHeading";
import PreviousTrackerCard from "../tracker_card/PreviousTrackerCard";

const History = () => {
  const { isPending, tracker } = UseTracker();

  const  currentDate = new Date()
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1
  const date = currentDate.getDate()
  const today = (year+"-"+month+"-"+date)
  const previousTracker = tracker?.filter(item => item?.date !== today)
  

  if (isPending) {
    return <Loading1 />;
  }
  return (
    <div className=" min-h-screen bg-black border">
      <div>
        <div>
          <TrackerNav />
          <EHeading>{"Previous Progress"}</EHeading>

          {/* showing previous progress card  */}
          <div className="my-10">
            {tracker?.length > 0 ?(
              <div>
                <div className="w-10/12 mx-auto flex flex-wrap lg:flex-row gap-8 lg:justify-center ">
                  { previousTracker?.map((item) => (
                    <PreviousTrackerCard key={item?._id} item={item}></PreviousTrackerCard>
                  ))}
                </div>
              </div>
            ) : 
              <h1 className="text-2xl md:text-4xl text-tertiary font-bold text-center my-20">You didn't Have Previous Days Exercises</h1>
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
