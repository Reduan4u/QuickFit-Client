"use client";
import Loading1 from "@/components/Loading/Loading1";
import UseTracker from "@/hooks/UseTracker";
import TrackerNav from "../trackerNav/TrackerNav";
import EHeading from "@/components/Common/EHeading";
import PreviousTrackerCard from "../tracker_card/PreviousTrackerCard";

const History = () => {
  const { isPending, tracker } = UseTracker("history");

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
            {tracker?.length > 0 && (
              <div>
                <div className="w-10/12 mx-auto flex flex-wrap lg:flex-row gap-8 lg:justify-center ">
                  {tracker?.map((item) => (
                    <PreviousTrackerCard key={item?._id} item={item}></PreviousTrackerCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
