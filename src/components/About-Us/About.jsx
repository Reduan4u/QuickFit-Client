import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Button1 from "../Common/Button1";

const AboutUs = async () => {
  const res = await fetch("https://quick-fit-server.vercel.app/api/v1/teams", {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <div>
      <div className="hero min-h-[550px] w-11/12 mx-auto" style={{ backgroundImage: 'url(https://img.livestrong.com/2880x1100/media-storage/livestrong-data/hub/316dd502-ade0-4123-b5cf-2f3fccb2a8fe-9391c05c79194d83a1fd1047fddc6a34herodesktop.jpg)' }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-primary text-5xl font-bold">About Us</h1>
            <p className="mb-5 font-medium text-xl text-white">QuickFit.com helps you live stronger, healthier and happier.</p>
          </div>
        </div>
      </div>

      <div className="my-16 w-2/4 flex-wrap mx-auto rounded-md py-12 text-lg font-medium border border-one flex gap-2 justify-center">

        <a href="#our-mission" className=" text-secondary scroll-link">Our Mission -</a>
        <a href="#our-editorial-standards" className="text-secondary scroll-link">Our Editorial Standards -</a>
        <a href="#our-team" className="text-secondary scroll-link">Our Team -</a>
        <a href="#our-experts" className="text-secondary scroll-link">Our Experts -</a>
        <a href="#contact-us" className="text-secondary scroll-link">Contact Us -</a>
        <a href="#advertise-with-us" className="text-secondary scroll-link">Advertise With Us</a>




      </div>

      <div id="our-mission" className="mx-auto text-center w-7/12">
        <h1 className="text-4xl  text-one  font-bold mb-4"> Our Mission</h1>
        <p className="leading-8"> QuickFit delivers trusted health, nutrition and fitness information. <br /> For all.We strive to give you the tools and knowledge you need to live a happier, healthier life.</p>


      </div>


      <div id="our-editorial-standards" className="m-20 text-center lg:flex gap-20 justify-center items-center">

        <Image className="w-[625px] h-[625px]"
          src="https://img.livestrong.com/768x768/media-storage/livestrong-data/hub/5cf4eaee-fca1-4761-821c-28bbe2c6cea3-squaraboutus.jpg?type=webp"
          alt="Alt text for your image"
          width={800} // Set the width of the image
          height={500} // Set the height of the image
        />

        <div className="lg:w-2/6">
          <h1 className="text-3xl pb-4 text-one  font-bold text-center">Our Editorial Standards</h1>
          <p className="text-lg leading-8 pb-4">We publish hundreds of articles each month. From the early stages of brainstorming all the way to publication, we always have one question in mind: How can this article best serve its readers? We strive to inform and encourage, never assume nor prescribe. Learn more about our editorial standards.</p>

          <Link href='/aboutUs' className="mt-10 md:w-1/4 w-1/2">
            <Button1 className="" title={"Read More..."} />
          </Link>
        </div>

      </div>


      <div id="our-team" className="w-7/12 mx-auto  ">
        <div className="text-center">
          <h1 className="text-4xl  text-one  font-bold mb-4 "> Our Team</h1>
          <p className="leading-8 mb-8">The QuickFit team is passionate about good health and good information. We are a team of experienced journalists, certified personal trainers, foodies, yogis, coffee fanatics, dog lovers, cat lovers and data geeks.</p>
        </div>


        <div >
          {
            data.map(item => <div key={item._id} className="lg:flex gap-8 mb-16">
              <Image className="lg:w-[225px] lg:h-[250px] mb-2"
                src={item.img}
                alt="Alt text for your image"
                width={800} // Set the width of the image
                height={500} // Set the height of the image
              />
              <div>
                <h1 className="text-2xl text-secondary font-bold">{item.name}</h1>
                <p className="text-two py-2">{item.jobTitle}</p>
                <p className="text-lg loading-8">{item.description}   </p>

                <div className="text-2xl py-2 flex gap-3">
                  {item.social_media?.linkedin ? <Link href="https://www.linkedin.com" >   <FaLinkedin> {item.social_media?.linkedin} </FaLinkedin>  </Link> : <></>
                  }
                  {item.social_media?.instagram ? <Link href="https://www.instagram.com" >   <FaInstagram> {item.social_media?.instagram} </FaInstagram>  </Link> : <></>
                  }
                  {item.social_media?.facebook ? <Link href="https://www.facebook.com" >   <FaFacebook> {item.social_media?.facebook} </FaFacebook>  </Link> : <></>
                  }
                  {item.social_media?.twitter ? <Link href="https://www.twitter.com" >   <FaTwitter> {item.social_media?.twitter} </FaTwitter>  </Link> : <></>
                  }
                </div>
              </div>

            </div>
            )
          }
        </div>


      </div>

      <div id="our-experts" className="m-20 text-center lg:flex gap-20 justify-center items-center">

        <div className="lg:w-2/6 mb-4">
          <h1 className="text-3xl pb-4  text-one  font-bold text-center">Meet Our Experts</h1>
          <p className="text-lg leading-8 pb-4">A team of credentialed health experts reviews our articles to ensure they are accurate, thorough and up-to-date. Learn more about our expert reviewing process.</p>

          <Link href='/aboutUs' className="mt-10 md:w-1/4 w-1/2">
            <Button1 className="" title={"Read More..."} />
          </Link>        </div>

        <Image className="w-[625px] h-[625px]"
          src="https://img.livestrong.com/625x625/media-storage/livestrong-data/hub/4d9e6547-2be3-4d5a-9d62-5ad61f363379-c978133aa457426981b2973026843d40meet_the_experts_hero_mobile.jpg?type=webp"
          alt="Alt text for your image"
          width={800} // Set the width of the image
          height={500} // Set the height of the image
        />
      </div>


      <div id="contact-us" className="mx-auto text-center w-7/12">
        <h1 className="text-4xl  text-one  font-bold mb-4"> We would Like to Hear From You</h1>
        <p className="leading-8 text-lg"> Got something to share or see something that does adhere to our standards? We want to know! We’re always working to improve our site and appreciate feedback.</p>

        <p className="underline cursor-pointer my-8 text-blue-500"> editorial@QuickFit </p>


        <p className="mt-8 text-lg">You can find additional ways to contact us at  </p>
        <p className="underline cursor-pointer text-blue-500"> https://www.QuickFit/contact-us/.</p>


        <p className="my-16 text-lg">Contact our official partner, Wright’s Media, about available usages, license fees and award seal artwork at <span className="underline cursor-pointer text-blue-500">worldofgoodbrands@wrightsmedia.com.</span> Please note Wright’s Media is the only authorized company that can provide World of Good Brands materials.</p>


        <div>
          <h1 className="text-3xl  text-one  font-bold ">Careers  </h1>
          <p className="text-lg my-8">We consider ourselves lucky to be able to help people through our work.</p>

          <p className="underline mb-8 text-blue-500 cursor-pointer"> Join our energetic, dedicated team.</p>
        </div>

      </div>


      <div id="advertise-with-us" className="hero min-h-[550px] mb-20 w-11/12 mx-auto " style={{ backgroundImage: 'url(https://img.livestrong.com/2880/media-storage/livestrong-data/hub/58748384-2f14-41ea-bc63-b5451cb45764-3e65accd0d2145f9a94fc60e79ee2abfaboutadvertisedesktop.jpg)' }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5  text-5xl  text-primary  font-bold">Advertise With Us</h1>
            <p className="mb-5 font-medium text-xl text-white">Send us a note, and a member of our sales team will be in touch.</p>

            <Link href='/contactUs' className="mt-10 md:w-1/4 w-1/2">
              <Button1 className="" title={"Contact Us"} />
            </Link>          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
