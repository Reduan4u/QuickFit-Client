const Tracker = () => {
 const cardClass1 = "flex flex-col justify-center item-center w-36 bg-white text-center px-2 py-4 rounded shadow-md"

  const data = [
    {
      name: "Steps",
      value: 5000,
      unit: "steps",
      goal: 10000,
    },
    {
      name: "Calories Burned",
      value: 250,
      unit: "kcal",
      goal: 500,
    },
    {
      name: "Water Intake",
      value: 1500,
      unit: "ml",
      goal: 2000,
    },
    {
      name: "Weight",
      value: 70,
      unit: "kg",
      goal: 65,
    },
    {
      name: "Sleep",
      value: 7,
      unit: "hours",
      goal: 8,
    },
  ];

  return (
<div className="bg-black">
<div className="w-10/12 mx-auto flex flex-wrap lg:flex-row gap-8 lg:justify-center py-10">
      {data?.length > 0 &&
        data?.map((item, idx) => (
          <div key={idx} className="bg-gradient-to-r from-primary to-secondary p-3">
            {/* value and target start */}
            <div className="flex items-center justify-between gap-4">
              {/* 1st card  */}
              <div className={cardClass1}>
                <h2 className="text-lg font-semibold">{item?.name}</h2>
                <p>
                  {item?.value} {item?.unit}
                </p>
              </div>

              {/* 2nd card  */}
              <div className={cardClass1}>
                <h2 className="text-lg font-semibold">Target</h2>
                <p>
                  {item?.goal} {item?.unit}
                </p>
              </div>
            </div>
            {/* value and target end */}

            {/* progress bar  */}
            <div className="flex justify-center items-center flex-row mt-4">
              <div
                className="radial-progress bg-tertiary"
                style={{ "--value": (item.value/item.goal)*100 }}
                role="progressbar">
                { parseInt((item.value/item.goal)*100) }%
              </div>
            </div>
            {/* progress bar end  */}
          </div>
        ))}
    </div>
</div>
  );
};

export default Tracker;
