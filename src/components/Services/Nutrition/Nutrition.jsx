"use client"

import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const NutritionPage = () => {
    return (
        <div className='w-[890px] mx-auto'>
            
            <section className="flex justify-center items-center">
  <Image
    className="text-center"
    src="http://old3.commonsupport.com/mvrichard/wp-content/uploads/2019/08/service-8.jpg"
    alt="Alt text for your image"
    width={1000} // Set the width of the image
    height={1000} // Set the height of the image
  />
</section>

<section className='flex gap-10 items-center'>
    <div className='flex-1'>
    <h1 className='text-4xl font-bold my-4'>Nutrition Plan</h1>
    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service. <br /> <br />

Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered. Efficiently unleash cross-media information without cross.</p>

    </div>
    <p className='flex-1'>
Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. Leverage agile frameworks to provide a robust synopsis for high level overviews.
</p>
</section>

<section className='my-8'>
<h1 className='text-4xl font-bold 
mb-4'>Benefit of Nutrition Plan</h1>
<p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior</p>
</section>

<section className='flex gap-12 items-center justify-center'>




    
    <div className='border-2 h-[300px] w-[264px] p-8 relative overflow-hidden'>
  <h1 className='text-2xl py-2 font-bold'>Fitness Training</h1>
  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.</p>
  <div className="absolute inset-0 hover:bg-gradient-to-t from-red-500 to-transparent"></div>
</div>

    <div className='border-2 h-[300px] w-[264px] p-8 relative overflow-hidden'>
  <h1 className='text-2xl py-2 font-bold'>Fitness Training</h1>
  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.</p>
  <div className="absolute inset-0 hover:bg-gradient-to-t from-red-500 to-transparent"></div>
</div>

    <div className='border-2 h-[300px] w-[264px] p-8 relative overflow-hidden'>
  <h1 className='text-2xl py-2 font-bold'>Fitness Training</h1>
  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.</p>
  <div className="absolute inset-0 hover:bg-gradient-to-t from-red-500 to-transparent"></div>
</div>


    
</section>

<section className='flex gap-16 my-12'>
<Image
    className="w-64 "
    src="http://old3.commonsupport.com/mvrichard/wp-content/uploads/2019/08/service-9.jpg"
    alt="Alt text for your image"
    width={1000} // Set the width of the image
    height={1000} // Set the height of the image
  />

  <div className='flex-1'>
    <h1 className='text-4xl py-4 font-bold'>What to Expect</h1>
    <p className="loading-[5px]  p-4">
  - Decreased Total Cholesterol <br />
  - Improved Coordination<br />
  - Enhanced Immune System<br />
  - Improved Cardiovascular Fitness<br />
  - Decreased Body Fat Stores<br />
  - Increased Muscle Strength, Endurance & Tone<br />
  - Reduction in Blood Pressure<br />
  - Decreased Symptoms of Anxiety, Stress, Tension<br />
  - Increased Energy, Stamina & Endurance<br />
  - Strengthened Skeletal System
</p>

  </div>
</section>

<section className='mb-16'>
    <h1 className='text-4xl font-bold mb-8'>Result Oriential Fitness Training</h1>

    <Tabs>
    <TabList>
      <Tab>Strategy</Tab>
      <Tab>Fitness Improvement</Tab>
      <Tab>Result</Tab>
    </TabList>

    <TabPanel>
      
      <li>Taking seamless key performance indicators offline to maximise the long tail.</li>
      <li>Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive</li>
        <li>Efficiently unleash cross-media information without cross-media value quickly maximize</li>
    </TabPanel>

    <TabPanel>

     <li>Podcasting operational change management inside of workflows to establis</li>
     <li>Efficiently unleash cross-media information without cross-media value quickly maximize</li>

    </TabPanel>
    <TabPanel >

      <li>Taking seamless key performance indicators offline to maximise the long tail.</li>
     <li>Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive</li>
    </TabPanel>
  </Tabs>



</section>

        </div>
    );
};

export default NutritionPage;