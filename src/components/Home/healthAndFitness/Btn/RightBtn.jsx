
import { FaArrowRight } from 'react-icons/fa6';

const RightBtn = () => {
    return (
        <div>
            <button className="hover:text-primary flex font-semibold text-xl justify-center items-center cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back">Next
                    <FaArrowRight  className="stroke-primary w-12 h-6">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </FaArrowRight >
                </button>
        </div>
    );
};

export default RightBtn;