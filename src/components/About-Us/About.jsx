import Image from "next/image";
import Link from "next/link";
import { FaInstagram,FaFacebook,FaTwitter, FaLinkedin } from "react-icons/fa6";

const AboutUs = () => {
    return (
      <div>
        <div className="hero min-h-[550px] w-11/12 mx-auto" style={{backgroundImage: 'url(https://img.livestrong.com/2880x1100/media-storage/livestrong-data/hub/316dd502-ade0-4123-b5cf-2f3fccb2a8fe-9391c05c79194d83a1fd1047fddc6a34herodesktop.jpg)'}}>
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-white text-5xl font-bold">About Us</h1>
              <p className="mb-5 font-medium text-xl text-white">QuickFit.com helps you live stronger, healthier and happier.</p>
            </div>
          </div>
        </div>
  
        <div className="my-16 w-2/4 flex-wrap mx-auto rounded-md py-12 text-lg font-medium border border-red-500 flex gap-2 justify-center">
        
  <a href="#our-mission" className="text-blue-600 scroll-link">Our Mission -</a>
  <a href="#our-editorial-standards" className="text-blue-600 scroll-link">Our Editorial Standards -</a>
  <a href="#our-team" className="text-blue-600 scroll-link">Our Team -</a>
  <a href="#our-experts" className="text-blue-600 scroll-link">Our Experts -</a>
  <a href="#contact-us" className="text-blue-600 scroll-link">Contact Us -</a>
  <a href="#advertise-with-us" className="text-blue-600 scroll-link">Advertise With Us</a>




        </div>

      <div id="our-mission" className="mx-auto text-center w-7/12">
        <h1 className="text-4xl font-bold mb-4"> Our Mission</h1>
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
        <h1 className="text-3xl pb-4 font-bold text-center">Our Editorial Standards</h1>
        <p className="text-lg leading-8 pb-4">We publish hundreds of articles each month. From the early stages of brainstorming all the way to publication, we always have one question in mind: How can this article best serve its readers? We strive to inform and encourage, never assume nor prescribe. Learn more about our editorial standards.</p>

      <button className="btn bg-white border-orange-600 border-2 rounded-md  hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300 " > Read More </button>

      </div>

      </div>


     <div id="our-team" className="w-7/12 mx-auto  ">
     <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 "> Our Team</h1>
        <p className="leading-8 mb-8">The QuickFit team is passionate about good health and good information. We are a team of experienced journalists, certified personal trainers, foodies, yogis, coffee fanatics, dog lovers, cat lovers and data geeks.</p>
      </div>

      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2 "
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/b76613a7d8904284b2f51a9b371d8f57.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Kaitlin Ahern </h1>
        <p className="text-gray-400 py-2"> Health Director  she/her/hers </p>
        <p className="text-lg loading-8">Kaitlin Ahern is QuickFit Health Director. She is a New Jersey-based writer and editor who has been covering health and wellness for more than 10 years. She is a graduate of the S.I. Newhouse School of Public Communications at Syracuse University, where she earned a degree in magazine journalism.  </p>
        <div className="text-2xl py-2 flex gap-4"> 
          
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/1/27/d54988e2cf3240b3a805f145715171aa.jpeg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Jessica Campbell-Salley </h1>
        <p className="text-gray-400 py-2"> Senior Fitness Editor  she/her/hers</p>
        <p className="text-lg loading-8">Jessica Campbell-Salley is Senior Fitness Editor for QuickFit. She has a journalism degree from the University of Tennessee and is based in Colorado, where she spends as much time as possible getting outside. She previously worked as Managing Editor for Women is Running magazine.</p>
        <div className="text-2xl py-2 flex gap-4"> 
           <Link href="https://www.facebook.com" > <FaFacebook />  </Link>
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           
        </div>
      </div>

      </div>

      
      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/9dc1064df9d64868ab35b58581dd1f33.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Allison Forsyth </h1>
        <p className="text-gray-400 py-2">Associate Health Editor  she/her/hers</p>
        <p className="text-lg loading-8">Allison Forsyth is QuickFit associate health editor. She is a Sarasota, Florida-based writer, editor and ballet teacher. She has previously worked at Sarasota Magazine. She is a graduate of Southeastern University is Digital Media & Design program.</p>
        <div className="text-2xl py-2 flex gap-4"> 
           <Link href="https://www.facebook.com" > <FaFacebook />  </Link>
           
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/9e216e9cf2df48c88baaf7c8e0cd4285.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Rachel Grice </h1>
        <p className="text-gray-400 py-2">CPT, RYT-200  Contributing Editor  she/her/hers </p>
        <p className="text-lg loading-8">Rachel Grice is a contributing fitness editor for QuickFit, an ACE-certified personal trainer and registered yoga instructor (RYT-200). She completed her undergraduate education at the University of Southern California and has worked for Men is Health, FitPregnancy and People magazines.</p>
        <div className="text-2xl py-2 flex gap-4"> 
         
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>

      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/b76613a7d8904284b2f51a9b371d8f57.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Kaitlin Ahern </h1>
        <p className="text-gray-400 py-2"> Health Director  she/her/hers </p>
        <p className="text-lg loading-8">Kaitlin Ahern is QuickFit Health Director. She is a New Jersey-based writer and editor who has been covering health and wellness for more than 10 years. She is a graduate of the S.I. Newhouse School of Public Communications at Syracuse University, where she earned a degree in magazine journalism.  </p>
        <div className="text-2xl py-2 flex gap-4"> 
           
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/1/4f34b1284b514872aba3249d96330124.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Sarah Klein </h1>
        <p className="text-gray-400 py-2">CPT  Former Senior Director of Content + Editor in Chief  she/her/hers </p>
        <p className="text-lg loading-8">Sarah Klein is QuickFit senior director of content and editor in chief. She is a Boston-based writer, editor, and certified personal trainer. She has previously worked at Health.com, Prevention magazine, and The Huffington Post. She is a graduate of the Arthur L. Carter Journalism Institute at New York University, a SXSW 2022 panel moderator, a National Press Foundation vaccine boot camp fellow, and a 2019 Mayo Clinic resident journalist. </p>
        <div className="text-2xl py-2 flex gap-4"> 
           <Link href="https://www.facebook.com" > <FaFacebook />  </Link>
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/980d707e2f3c426ebca231489920aaf0.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Ciara Lucas </h1>
        <p className="text-gray-400 py-2"> RRCA, CPT  Health Writer  she/her/hers</p>
        <p className="text-lg loading-8">Ciara Lucas is QuickFit’s health writer. She is a Philadelphia-based journalist, certified personal trainer, marathoner, and indoor cycling instructor. She has previously worked at HealthDigest.com and ABC/FOX News affiliates. Ciara is a graduate of the Park School of Communications at Ithaca College.  </p>
        <div className="text-2xl py-2 flex gap-4"> 
         
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>

      
      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/5/18/df5bb97205a24a40ba8478a6c63c58db.png?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Dayan Marquina</h1>
        <p className="text-gray-400 py-2"> Director  she/her/hers </p>
        <p className="text-lg loading-8">Dayan is a Peruvian digital designer based in Brooklyn, New York and a graduate of graphic design programs at Central Piedmont Community College in North Carolina and The New School. She has been helping companies conceptualize their ideas into  nearly a decade through web and editorial design, illustration and branding. She truly enjoys designing for LIVESTRONG.</p>
        <div className="text-2xl py-2 flex gap-4"> 
      
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/856d15c23275454dbd7c741a4078ac88.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold">Sarah McNaughton</h1>
        <p className="text-gray-400 py-2">VP, Content  she/her/hers</p>
        <p className="text-lg loading-8">Sarah McNaughton is QuickFit Vice President of Content. She previously worked for Bauer Xcel Media, Hearst and Everyday Health. Sarah received her master is degree in magazine journalism from Columbia University Graduate School of Journalism, as well as dual bachelor is degrees in news/editorial and magazine journalism from the University of Oregon School of Journalism and Communication.   </p>
        <div className="text-2xl py-2 flex gap-4"> 
           <Link href="https://www.facebook.com" > <FaFacebook />  </Link>
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>

     
      

     </div>

     <div id="our-experts" className="m-20 text-center lg:flex gap-20 justify-center items-center">

<div className="lg:w-2/6 mb-4">
  <h1 className="text-3xl pb-4 font-bold text-center">Meet Our Experts</h1>
  <p className="text-lg leading-8 pb-4">A team of credentialed health experts reviews our articles to ensure they are accurate, thorough and up-to-date. Learn more about our expert reviewing process.</p>

<button className="btn bg-white border-orange-600 border-2 rounded-md  hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300 " > Read More </button>
</div>

<Image className="w-[625px] h-[625px]"
  src="https://img.livestrong.com/625x625/media-storage/livestrong-data/hub/4d9e6547-2be3-4d5a-9d62-5ad61f363379-c978133aa457426981b2973026843d40meet_the_experts_hero_mobile.jpg?type=webp"
  alt="Alt text for your image"
  width={800} // Set the width of the image
  height={500} // Set the height of the image
/>


</div>


<div id="contact-us" className="mx-auto text-center w-7/12">
        <h1 className="text-4xl font-bold mb-4"> We would Like to Hear From You</h1>
        <p className="leading-8 text-lg"> Got something to share or see something that doesn’t adhere to our standards? We want to know! We’re always working to improve our site and appreciate feedback.</p>

       <p className="underline cursor-pointer my-8 text-blue-500"> editorial@QuickFit </p>


       <p className="mt-8 text-lg">You can find additional ways to contact us at  </p>
       <p className="underline cursor-pointer text-blue-500"> https://www.QuickFit/contact-us/.</p>


      <p className="my-16 text-lg">Contact our official partner, Wright’s Media, about available usages, license fees and award seal artwork at <span className="underline cursor-pointer text-blue-500">worldofgoodbrands@wrightsmedia.com.</span> Please note Wright’s Media is the only authorized company that can provide World of Good Brands materials.</p>


      <div>
        <h1 className="text-3xl font-bold ">Careers  </h1>
        <p className="text-lg my-8">We consider ourselves lucky to be able to help people through our work.</p>

        <p className="underline mb-8 text-blue-500 cursor-pointer"> Join our energetic, dedicated team.</p>
      </div>
        
      </div>


      <div id="advertise-with-us" className="hero min-h-[550px] mb-20 w-11/12 mx-auto " style={{backgroundImage: 'url(https://img.livestrong.com/2880/media-storage/livestrong-data/hub/58748384-2f14-41ea-bc63-b5451cb45764-3e65accd0d2145f9a94fc60e79ee2abfaboutadvertisedesktop.jpg)'}}>
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-white text-5xl font-bold">Advertise With Us</h1>
              <p className="mb-5 font-medium text-xl text-white">Send us a note, and a member of our sales team will be in touch.</p>

              <button  className="btn bg-white border-orange-600 border-2 rounded-md  hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300">Contact Us</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default AboutUs;
  