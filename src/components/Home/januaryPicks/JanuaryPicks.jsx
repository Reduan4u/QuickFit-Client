import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";

const JanuaryPicks = async () => {
  const res = await fetch("http://localhost:5000/api/v1/monthly-piks", {
    cache: "no-store",
  });
  const data = await res.json();

  const currentDate = new Date();
  const currentMonthNumber = currentDate.getMonth();

  const filteredData = data.filter(
    (picks) => Number(picks.date.split("-")[1]) === currentMonthNumber + 1
  );
  const slicedData = filteredData.slice(0, 4);
  console.log(slicedData);

  return (
    <div className=" my-32">
      <SectionHeading title={"January Picks"} />
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-2">
      {slicedData.map((monthsPicks) => (
        <div key={monthsPicks._id} className="">
          <div class="block rounded-none bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <div className=" h-72">
              <Image
              objectFit="cover"
              width={500}
              height={170}
                class=" rounded-none"
                src={monthsPicks.image}
                alt=""
              />
              </div>
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
               {monthsPicks.title}
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {monthsPicks.description}
              </p>
              <p className=" text-orange-400"><span className=" font-bold">|</span> {new Intl.DateTimeFormat('en-US', { year:"numeric",month: 'long', day: 'numeric' }).format(new Date(monthsPicks.date))}</p>
              
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default JanuaryPicks;
