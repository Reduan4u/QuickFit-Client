import Tracker from "@/components/Tracker/Tracker";
import TrackerNav from "@/components/Tracker/trackerNav/TrackerNav";

const TrackerPage = () => {
  return (
    <div className="bg-black pb-10">
      <TrackerNav />
      <Tracker />
    </div>
  );
};

export default TrackerPage;
