import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Tracker from "@/components/Tracker/Tracker";
import TrackerNav from "@/components/Tracker/trackerNav/TrackerNav";

const TrackerPage = () => {
  return (
    <PrivateRoute>
    <div className=" pb-10">
      <TrackerNav />
      <Tracker />
    </div>
    </PrivateRoute>

  );
};

export default TrackerPage;
