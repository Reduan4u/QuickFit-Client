import Cart from "@/components/Eshop/cart/Cart";

import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";


function page({params}) {
    return <PrivateRoute><Cart params={params}></Cart></PrivateRoute>
    // return <PrivateRoute><Cart1 params={params}></Cart1></PrivateRoute>
}

export default page;