import SectionHeading from "@/components/Common/SectionHeading";

const Route1MoreStories = async () => {
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/newStories", {
        cache: "no-store"
    });
    const allData = await res.json();

    const filterData = allData.filter(data => data.category == "Nutrition" || data.category == "Wellness" || data.category == "Preventive Care")

    return (
        <div className="w-11/12 mx-auto my-5">
            <SectionHeading title={"New Stories"} />
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  md:gap-2 gap-y-2  ">
                {
                    filterData.map((story, index) =>


                        <div key={index}>





                            {/* <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img className="h-full" src={story.img} alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{story.title}</h2>
                                    <p>{story.description}</p>
                                    <p className=" text-orange-400"><span className="  font-bold">|</span> {story.category}</p>

                                </div>
                            </div> */}

    {
        /*
        <div class="relative flex flex-col h-full min-w-0 p-4 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
  <div class="relative h-full overflow-hidden bg-cover rounded-xl" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/ivancik.jpg')">
    <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
    <div class="relative z-10 flex flex-col flex-auto h-full p-4">
      <h5 class="pt-2 mb-6 font-bold text-white">Work with the rockets</h5>
      <p class="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
      <a class="mt-auto mb-0 font-semibold leading-normal text-white group text-sm" href="javascript:;">
        Read More
        <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
      </a>
    </div>
  </div>
</div>
        */
    }


<div class="relative flex flex-col min-w-0 p-4 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
  <div class="relative h-44 md:h-64 lg:h-80 overflow-hidden bg-center rounded-xl" style={{ backgroundImage: `url(${story.img})` }}>
    <span class="absolute top-0 left-0 w-full h-full bg-center bg-contain bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
    <div class="relative z-10 flex flex-col flex-auto p-4 text-white lg:pt-36 ">
      <h5 class="pt-2 mb-6 font-bold text-lg md:text-xl lg:text-2xl">{story.title}</h5>
      <p class="text-sm md:text-base lg:text-lg lg: ">{story.description}</p>
      <a class="text-right mt-auto mb-0 font-semibold leading-normal group text-xs md:text-sm lg:text-base text-white" href="javascript:;">
        Read More
        <i class="fas fa-arrow-right ease-bounce text-xs md:text-sm lg:text-base group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
      </a>
    </div>
  </div>
</div>



                        </div>)
                }
            </div>
        </div>
    );
};

export default Route1MoreStories;
