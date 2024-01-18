import Footer from "@/components/Home/footer/Footer";
import Navbar from "@/components/Home/navbar/Navbar";

const layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                {children}
            </div>
            <Footer> </Footer>
        </div>
    );
};

export default layout;