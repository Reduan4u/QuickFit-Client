import Cart from "@/components/Eshop/cart/Cart";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";


function page({params}) {


    return <PrivateRoute><Cart params={params}></Cart></PrivateRoute>
}

export default page;