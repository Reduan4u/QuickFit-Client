import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import WBanner from '@/components/WorkOuts/WBanner/WBanner';

const Workout = () => {
    return (
        <div>
            <PrivateRoute><WBanner></WBanner></PrivateRoute>
        </div>
    );
};

export default Workout;