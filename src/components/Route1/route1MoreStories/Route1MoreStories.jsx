import SectionHeading from "@/components/Common/SectionHeading";

const Route1MoreStories = async () => {
    const res = await fetch("https://quickfit-server.vercel.app/api/v1/news-stories", {
        cache: "no-store"
    });
    const allData = await res.json();

    const filterData = allData.filter(data => data.category == "Nutrition" || data.category == "Wellness" || data.category == "Preventive Care")
    //console.log(filterData);

    return (
        <div className="w-11/12 mx-auto my-5">
            <SectionHeading title={"New Stories"} />
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-2 gap-y-2  ">
                {
                    filterData.map((story, index) =>
                        <div key={index}>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img className="h-full" src={story.img} alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{story.title}</h2>
                                    <p>{story.description}</p>
                                    <p className=" text-orange-400"><span className="  font-bold">|</span> {story.category}</p>

                                </div>
                            </div>


                        </div>)
                }
            </div>
        </div>
    );
};

export default Route1MoreStories;
