import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";

const Experts = async () => {
  const res = await fetch("https://quick-fit-server.vercel.app/api/v1/experts", {
    cache: "no-store"
  });
  const data = await res.json();
  console.log(data)
  return (
    <div>
      <div className="hero min-h-[550px] w-11/12 mx-auto" style={{ backgroundImage: 'url(https://img.livestrong.com/2880x1100/media-storage/livestrong-data/hub/1fce6d6b-05a4-49d9-9016-e412deff5323-meet_the_experts_hero_desktop.jpg)' }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5  text-primary  text-5xl font-bold">Meet Our Experts</h1>


          </div>
        </div>
      </div>

      <div>
        <p className='mx-auto my-16 w-7/12'>Doctors, nurses, registered dietitians, physical therapists, certified personal trainers and other credentialed experts <span className="text-blue-500 underline">review our articles to ensure they are accurate</span>, thorough and up-to-date. An article that has been reviewed by an expert displays the expert is name in the byline. Articles covering the most complicated health and science topics with the most direct effect on the lives of our readers take highest priority for our expert reviewers. <br /> <br />

          We recruit our diverse team of reviewers from top medical institutions and established health organizations. If you are interested in becoming an expert reviewer, <span className="text-blue-500 underline"> we  love to hear from you.</span> <br /><br />

          Learn more about our  <span className="text-blue-500 underline">expert reviewing process</span> here.</p>
      </div>

      <div className="my-16 w-2/4 flex-wrap mx-auto  text-primary  rounded-md py-12 text-lg font-medium border border-one flex gap-2 justify-center">

        <a href="#featured" className=" text-secondary  scroll-link">Featured Experts -</a>
        <a href="#fitness" className=" text-secondary scroll-link">Fitness Experts -</a>
        <a href="#nutrition" className=" text-secondary scroll-link">Nutrition Experts -</a>
        <a href="#health" className=" text-secondary scroll-link">Health Experts -</a>





      </div>


      <div>
        <div className='py-14  text-center   text-primary   w-11/12 mx-auto bg-one'> <h1 className='text-3xl font-bold'> FEATURED EXPERTS </h1> </div>

        <div id="featured" className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center my-8 items-center gap-8 w-10/12 mx-auto ">
          <div className="card w-[290px] h-[450px] mx-auto bg-base-100 shadow-xl">
            <figure><Image className="h-[355px]"
              src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/7b260bab-0384-4a11-b241-a041648bfe0e-AngelaHollidayBell.jpg?type=webp"
              alt="Alt text for your image"
              width={500} // Set the width of the image
              height={500} // Set the height of the image
            /></figure>
            <div className="card-body">
              <h2 className="card-title  text-primary">Angela Holliday-Bell MD, CCSH</h2>

            </div>
          </div>

          <div className="card w-[290px] h-[450px] mx-auto bg-base-100 shadow-xl">
            <figure><Image className="h-[355px]"
              src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/bfe4a990-991a-4a87-b892-dfaf51746e9e-BrookeSchwartz.jpg?type=webp"
              alt="Alt text for your image"
              width={500} // Set the width of the image
              height={500} // Set the height of the image
            /></figure>
            <div className="card-body">
              <h2 className="  text-primary card-title">Brooke Schwartz, LCSW</h2>

            </div>
          </div>

          <div className="card w-[290px] h-[450px] mx-auto  bg-base-100 shadow-xl">
            <figure><Image className="h-[355px]"
              src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/3a6e63ba-e7b7-4cb3-ba1d-7cc3bb767c18-BronteYang.jpg?type=webp"
              alt="Alt text for your image"
              width={500} // Set the width of the image
              height={500} // Set the height of the image
            /></figure>
            <div className="card-body">
              <h2 className="card-title  text-primary">Julián Saavedra, MD, FEBO</h2>

            </div>
          </div>

          <div className="card w-[290px] h-[450px] mx-auto bg-base-100 shadow-xl">
            <figure><Image className="h-[355px]"
              src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/acdba984-b9f1-4cfb-a0e8-84e6f3b0eee2-JulianSaavedra.jpg?type=webp"
              alt="Alt text for your image"
              width={500} // Set the width of the image
              height={500} // Set the height of the image
            /></figure>
            <div className="card-body">
              <h2 className="card-title  text-primary">Bronte Yang, DO</h2>

            </div>
          </div>

        </div>
      </div>

      <div id="fitness">
        <div className='py-14   text-primary   text-center w-11/12 mx-auto mb-16 bg-one'> <h1 className='text-3xl font-bold'> FITNESS EXPERTS </h1> </div>

        <div id="our-team" className="w-7/12 mx-auto  ">

          <div>
            {data.map(item => {
              if (item.category === 'FITNESS') {
                return (
                  <div key={item._id} className="lg:flex gap-8 mb-16">
                    <Image
                      className="lg:w-[225px] lg:h-[250px] mb-2"
                      src={item.img}
                      alt="Alt text for your image"
                      width={800}
                      height={500}
                    />
                    <div>
                      <h1 className="text-2xl  text-secondary font-bold">{item.name}</h1>
                      <p className="text-two py-2">{item.jobTitle}</p>
                      <p className="text-lg loading-8">{item.description}</p>

                      <div className="text-2xl py-2 flex gap-3">
                        {item.social_media?.linkedin ? (
                          <Link href="https://www.linkedin.com">
                            <FaLinkedin /> {/* You can remove the {item.social_media?.linkedin} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.instagram ? (
                          <Link href="https://www.instagram.com">
                            <FaInstagram /> {/* You can remove the {item.social_media?.instagram} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.facebook ? (
                          <Link href="https://www.facebook.com">
                            <FaFacebook /> {/* You can remove the {item.social_media?.facebook} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.twitter ? (
                          <Link href="https://www.twitter.com">
                            <FaTwitter /> {/* You can remove the {item.social_media?.twitter} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // If the item's category is not 'FITNESS', return null to avoid rendering anything
            })}
          </div>






        </div>

      </div>

      <div id="nutrition">
        <div className='py-14   text-primary   text-center w-11/12 mx-auto mb-16 bg-one'> <h1 className='text-3xl font-bold'> NUTRITION EXPERTS </h1> </div>

        <div id="our-team" className="w-7/12 mx-auto  ">

          <div>
            {data.map(item => {
              if (item.category === 'NUTRITION') {
                return (
                  <div key={item._id} className="lg:flex gap-8 mb-16">
                    <Image
                      className="lg:w-[225px] lg:h-[250px] mb-2"
                      src={item.img}
                      alt="Alt text for your image"
                      width={800}
                      height={500}
                    />
                    <div>
                      <h1 className="text-2xl  text-secondary font-bold">{item.name}</h1>
                      <p className="text-two py-2">{item.jobTitle}</p>
                      <p className="text-lg loading-8">{item.description}</p>

                      <div className="text-2xl py-2 flex gap-3">
                        {item.social_media?.linkedin ? (
                          <Link href="https://www.linkedin.com">
                            <FaLinkedin /> {/* You can remove the {item.social_media?.linkedin} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.instagram ? (
                          <Link href="https://www.instagram.com">
                            <FaInstagram /> {/* You can remove the {item.social_media?.instagram} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.facebook ? (
                          <Link href="https://www.facebook.com">
                            <FaFacebook /> {/* You can remove the {item.social_media?.facebook} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.twitter ? (
                          <Link href="https://www.twitter.com">
                            <FaTwitter /> {/* You can remove the {item.social_media?.twitter} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // If the item's category is not 'FITNESS', return null to avoid rendering anything
            })}
          </div>


        </div>
      </div>

      <div id="health">
        <div className='py-14   text-primary   text-center w-11/12 mx-auto mb-16 bg-one'> <h1 className='text-3xl font-bold'>HEALTH EXPERTS</h1> </div>

        <div id="our-team" className="w-7/12 mx-auto  ">


          <div>
            {data.map(item => {
              if (item.category === 'HEALTH') {
                return (
                  <div key={item._id} className="lg:flex gap-8 mb-16">
                    <Image
                      className="lg:w-[225px] lg:h-[250px] mb-2"
                      src={item.img}
                      alt="Alt text for your image"
                      width={800}
                      height={500}
                    />
                    <div>
                      <h1 className="text-2xl  text-secondary font-bold">{item.name}</h1>
                      <p className="text-two py-2">{item.jobTitle}</p>
                      <p className="text-lg loading-8">{item.description}</p>

                      <div className="text-2xl py-2 flex gap-3">
                        {item.social_media?.linkedin ? (
                          <Link href="https://www.linkedin.com">
                            <FaLinkedin /> {/* You can remove the {item.social_media?.linkedin} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.instagram ? (
                          <Link href="https://www.instagram.com">
                            <FaInstagram /> {/* You can remove the {item.social_media?.instagram} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.facebook ? (
                          <Link href="https://www.facebook.com">
                            <FaFacebook /> {/* You can remove the {item.social_media?.facebook} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                        {item.social_media?.twitter ? (
                          <Link href="https://www.twitter.com">
                            <FaTwitter /> {/* You can remove the {item.social_media?.twitter} */}
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // If the item's category is not 'FITNESS', return null to avoid rendering anything
            })}
          </div>





        </div>

      </div>



    </div>
  );
};

export default Experts;