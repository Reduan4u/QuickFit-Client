import ForumComponents from "@/components/ForumComponents/ForumComponents";
import RightSideBar from "@/components/ForumComponents/rightSideBar/rightSideBar";

const Forum = () => {


    return (
        <div className='bg-[#0F172A]'>

            <div className='bg-[#131C2E] pt-8 pb-8'>

                <h2 className='text-[#7dd1fc] text-center  text-4xl uppercase mx-auto w-[50%] font-light'>
                    A community of People that grow together
                </h2>

                <p className='text-[#94A3B8] text-center mx-auto w-[50%] mt-8'>
                    Forums foster community, enabling diverse individuals to connect, share ideas, and collaborate, cultivating a space for meaningful interaction and collective engagement. </p>
            </div>

            <div className="flex items-start justify-between ">

                <div className="flex">
                    <ForumComponents></ForumComponents>

                </div>

                <div className="flex-1">
                    <RightSideBar></RightSideBar>

                </div>





            </div>
        </div>
    );
};

export default Forum;