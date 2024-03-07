"use client"

import LoginButton from '@/components/Common/LoginButton';
import Image from 'next/image';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const FemalePage = async () => {
  const res = await fetch("https://quick-fit-server.vercel.app/api/v1/services", {
    cache: "no-store"
  });
  const data = await res.json();

  const expertData = await fetch("https://quick-fit-server.vercel.app/api/v1/experts", {
    cache: "no-store"
  });
  const trainers = await expertData.json();


  return (
    //        

    <div>
      <div>

        {data.map(item => {
          if (item.category === 'Female') {
            return <>
              <div key={item._id} className='text-lg'>
                <section className="flex lg:flex-nowrap md:flex-wrap gap-4 px-4 justify-center items-center">
                  <Image
                    className="text-center "
                    src={item.img}
                    alt="Alt text for your image"
                    width={1000} // Set the width of the image
                    height={1000} // Set the height of the image
                  />
                  <Image
                    className="text-center "
                    src={item.img2}
                    alt="Alt text for your image"
                    width={1000} // Set the width of the image
                    height={1000} // Set the height of the image
                  />
                </section>

                <section className='flex flex-col px-4 lg:flex-row  gap-10 items-center'>
                  <div className='flex-1'>
                    <h1 className='text-4xl text-one  font-bold my-4'>{item.title}</h1>
                    <p>{item.description1} <br /> <br />

                      {item.description2}</p>

                  </div>
                  <p className='flex-1'>
                    {item.description3}
                  </p>
                </section>

                <section className='my-8 px-4'>
                  <h1 className='text-4xl text-one  font-bold 
mb-4'>{item.benefitTitle}</h1>
                  <p>{item.benefitDescription}</p>
                </section>

                <section className='flex gap-10 flex-wrap justify-center'>

                  <div className='border-2 h-[300px] md:w-[264px] p-8 relative overflow-hidden mx-4 my-8'>
                    <h1 className='text-2xl py-2 text-primary  font-bold'>{item.fitnessCardTitle}</h1>
                    <p>{item.fitnessDescription}</p>
                    <div className="absolute inset-0 hover:bg-gradient-to-t from-one to-transparent"></div>
                  </div>

                  <div className='border-2 h-[300px] md:w-[264px] p-8 relative overflow-hidden mx-4 my-8'>
                    <h1 className='text-2xl py-2 text-primary  font-bold'>{item.nutritionalCardTitle}</h1>
                    <p>{item.nutritionalDescription}</p>
                    <div className="absolute inset-0 hover:bg-gradient-to-t from-one to-transparent"></div>
                  </div>

                  <div className='border-2 h-[300px] md:w-[264px] p-8 relative overflow-hidden mx-4 my-8'>
                    <h1 className='text-2xl text-primary  py-2 font-bold'>{item.getCardTitle}</h1>
                    <p>{item.getDescription}</p>
                    <div className="absolute inset-0 hover:bg-gradient-to-t from-one to-transparent"></div>
                  </div>
                </section>


                <section className='flex px-4 flex-col lg:flex-row items-center justify-center gap-16 my-12'>
                  <Image
                    className="md:w-64  "
                    src={item.resultImage} alt="Alt text for your image"
                    width={1000} // Set the width of the image
                    height={1000} // Set the height of the image
                  />

                  <div className='flex-1'>
                    <h1 className='text-4xl text-one   font-bold'>{item.resultTitle}</h1>
                    <p className="loading-[5px]  p-4">
                      {item.resultdes[0]}  <br />
                      {item.resultdes[2]}  <br />
                      {item.resultdes[3]}  <br />
                      {item.resultdes[4]}  <br />
                      {item.resultdes[5]}  <br />
                      {item.resultdes[6]}  <br />
                      {item.resultdes[7]}  <br />
                      {item.resultdes[8]}  <br />
                      {item.resultdes[9]}  <br />
                    </p>

                  </div>
                </section>

                <section className='mb-16 px-4'>
                  <h1 className='text-4xl text-one  font-bold mb-8'>{item.trainingProgramTitle}</h1>

                  <Tabs>
                    <TabList >
                      <Tab>Strategy</Tab>
                      <Tab>Fitness Improvement</Tab>
                      <Tab>Result</Tab>
                    </TabList>

                    <TabPanel>

                      <li>{item.strategy[0]}</li>
                      <li>{item.strategy[1]}</li>
                      <li>{item.strategy[2]}</li>

                    </TabPanel>

                    <TabPanel>

                      <li>{item.fitnessImprovement[0]}</li>
                      <li>{item.fitnessImprovement[1]}</li>

                    </TabPanel>

                    <TabPanel >

                      <li>{item.result[0]}</li>
                      <li>{item.result[1]}</li>
                      <li>{item.result[2]}</li>
                    </TabPanel>
                  </Tabs>

                </section>

              </div>
            </>
          }
        })
        }
      </div>

      <section>
        {
          trainers.filter(trainer => trainer.category === "HEALTH")
            .slice(0, 1)
            .map(trainer => (
              <div key={trainer._id}>
                <h1 className='text-3xl py-8 font-bold'>If you want to <span className=' text-one '>Hire Now</span> </h1>
                <div className='flex gap-8 flex-col lg:flex-row'>
                  <Image
                    className="lg:w-[225px] w-full lg:h-[250px] mb-2"
                    src={trainer.img}
                    alt="Alt text for your image"
                    width={800}
                    height={500}
                  />
                  <div>
                    <h1 className="text-2xl text-secondary  font-bold">{trainer.name}</h1>
                    <p className="text-two py-2">{trainer.jobTitle}</p>
                    <p className="text-lg loading-8">
                      {trainer.description.split(' ').slice(0, 50).join(' ')}...
                    </p>
                    <div className=" py-4 "> <Link href={`/services/hire-form/${trainer._id}`}>
                      <LoginButton>Hire Now</LoginButton>
                    </Link> </div>
                  </div>


                </div>


              </div>
            ))
        }
      </section>

    </div>


  );
};

export default FemalePage;