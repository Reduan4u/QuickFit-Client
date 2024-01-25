import Image from "next/image";
import Link from "next/link";
import { FaInstagram,FaFacebook,FaTwitter, FaLinkedin } from "react-icons/fa6";

const Experts = () => {
    return (
        <div>
            <div className="hero min-h-[550px] w-11/12 mx-auto" style={{backgroundImage: 'url(https://img.livestrong.com/2880x1100/media-storage/livestrong-data/hub/1fce6d6b-05a4-49d9-9016-e412deff5323-meet_the_experts_hero_desktop.jpg)'}}>
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-white text-5xl font-bold">Meet Our Experts</h1>
             

            </div>
          </div>
        </div>
         
         <div>
         <p className='mx-auto my-16 w-7/12'>Doctors, nurses, registered dietitians, physical therapists, certified personal trainers and other credentialed experts <span className="text-blue-500 underline">review our articles to ensure they are accurate</span>, thorough and up-to-date. An article that has been reviewed by an expert displays the expert is name in the byline. Articles covering the most complicated health and science topics with the most direct effect on the lives of our readers take highest priority for our expert reviewers. <br /> <br />

We recruit our diverse team of reviewers from top medical institutions and established health organizations. If you are interested in becoming an expert reviewer, <span className="text-blue-500 underline"> we  love to hear from you.</span> <br /><br />

Learn more about our  <span className="text-blue-500 underline">expert reviewing process</span> here.</p>
         </div>

         <div className="my-16 w-2/4 flex-wrap mx-auto rounded-md py-12 text-lg font-medium border border-red-500 flex gap-2 justify-center">
        
        <a href="#featured" className="text-blue-600 scroll-link">Featured Experts -</a>
        <a href="#fitness" className="text-blue-600 scroll-link">Fitness Experts -</a>
        <a href="#nutrition" className="text-blue-600 scroll-link">Nutrition Experts -</a>
        <a href="#health" className="text-blue-600 scroll-link">Health Experts -</a>
        
      
      
      
      
              </div>


<div>
<div className='py-14 text-white text-center w-11/12 mx-auto bg-blue-900'> <h1 className='text-3xl font-bold'> FEATURED EXPERTS </h1> </div>

<div id="featured" className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center my-8 items-center gap-8 w-10/12 mx-auto ">

<div className="card w-[290px] h-[450px] bg-base-100 shadow-xl">
  <figure><Image className=""
  src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/7b260bab-0384-4a11-b241-a041648bfe0e-AngelaHollidayBell.jpg?type=webp"
  alt="Alt text for your image"
  width={500} // Set the width of the image
  height={500} // Set the height of the image
/></figure>
  <div className="card-body">
    <h2 className="card-title">Angela Holliday-Bell MD, CCSH</h2>
    
  </div>
</div>

<div className="card w-[290px] h-[450px]  bg-base-100 shadow-xl">
  <figure><Image className=""
  src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/bfe4a990-991a-4a87-b892-dfaf51746e9e-BrookeSchwartz.jpg?type=webp"
  alt="Alt text for your image"
  width={500} // Set the width of the image
  height={500} // Set the height of the image
/></figure>
  <div className="card-body">
    <h2 className="card-title">Brooke Schwartz, LCSW</h2>
    
  </div>
</div>

<div className="card w-[290px] h-[450px]  bg-base-100 shadow-xl">
  <figure><Image className=""
  src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/3a6e63ba-e7b7-4cb3-ba1d-7cc3bb767c18-BronteYang.jpg?type=webp"
  alt="Alt text for your image"
  width={500} // Set the width of the image
  height={500} // Set the height of the image
/></figure>
  <div className="card-body">
    <h2 className="card-title">Julián Saavedra, MD, FEBO</h2>
    
  </div>
</div>

<div className="card w-[290px] h-[450px]  bg-base-100 shadow-xl">
  <figure><Image className="h-[335px]"
  src="https://img.livestrong.com/368x514/media-storage/livestrong-data/hub/acdba984-b9f1-4cfb-a0e8-84e6f3b0eee2-JulianSaavedra.jpg?type=webp"
  alt="Alt text for your image"
  width={500} // Set the width of the image
  height={500} // Set the height of the image
/></figure>
  <div className="card-body">
    <h2 className="card-title">Bronte Yang, DO</h2>
    
  </div>
</div>

</div>
</div>

        <div id="fitness">
        <div className='py-14 text-white text-center w-11/12 mx-auto mb-16 bg-red-500'> <h1 className='text-3xl font-bold'> FITNESS EXPERTS </h1> </div>

        <div id="our-team" className="w-7/12 mx-auto  ">
     

      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] lg:h-[225px] mb-2 "
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/6/1/8099d376180f4c37a60fd7fb698d5cf6.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> 
K. Aleisha Fetters </h1>
        <p className="text-gray-400 py-2"> CSCS  she/her/hers</p>
        <p className="text-lg loading-8">Aleisha is an internationally syndicated fitness writer and strength coach. She holds a master’s degree in new media from the Medill School of Journalism at Northwestern University, where she concentrated in health and science reporting. There, she also completed undergraduate work in magazine journalism and gender studies. As a certified strength and conditioning specialist through the National Strength and Conditioning Association, Aleisha uses her background in research, writing and gender issues to help people empower themselves through smart strength training. She coaches online and in person, and her work has appeared in publications including SELF, Time, Women’s Health, Runner’s World, U.S. News & World Report, Stack and Girls Gone Strong. Her books include Give Yourself MORE, Fitness Hacks for Over 50 and The Woman’s Guide to Strength Training. She can usually be spotted in workout clothes and/or eating.  </p>
        <div className="text-2xl py-2 flex gap-4"> 
          
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px]  lg:h-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/2/22/0fa942572d11421c97693054d5f38735.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Mara Glover </h1>
        <p className="text-gray-400 py-2">CPT, LCPC  she/her/hers</p>
        <p className="text-lg loading-8">Mara Glover is a licensed mental health clinician, as well as an ACE certified personal trainer and fitness instructor. As a mental health clinician, Mara received her Masters in Counseling Psychology from Towson University, and is now a solo practitioner helping teenage and adult clients who may struggle with eating disorders, anxiety, depression, relationships, and more.
 fitness journey began with gymnastics, which she did up until college. She continued with her love of fitness by becoming a group instructor at University of Maryland. For over a decade, Mara has led fitness classes such as LesMills BODYPUMP, bootcamp, step aerobics, and strength. After graduation, Mara became a personal trainer and worked with adults at various gyms. As a personal trainer Mara is goal during each session is to help clients feel empowered and confident in their bodies through strength and cardio exercises.</p>
        <div className="text-2xl py-2 flex gap-4"> 
           <Link href="https://www.facebook.com" > <FaFacebook />  </Link>
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           
        </div>
      </div>

      </div>

      
      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] lg:h-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/9dc1064df9d64868ab35b58581dd1f33.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Allison Forsyth </h1>
        <p className=" py-2">A self-proclaimed  wellness career began in 2007 with a diploma from the National Personal Training Institute followed by an Advanced Certified Personal  certification. She has worked in a variety of roles to include yoga instructor, group fitness instructor, personal trainer, postural alignment specialist, physical therapy assistant, health coach and Registered Nurse. As a NASM certified Corrective Exercise Specialist,  fitness niche is in coaching proper movement in order to decrease pain and injury and promote optimal performance and function. Classically trained in Hatha, Ashtanga and pranayama in Rishkish, India; Jenn believes that being  is a multifaceted achievement that includes the mind and spirit just as much as the physical body. When she  bringing wellness to others, working out or hiking with her dogs; Jenn is likely expanding her knowledge of the industry with a book, podcast, course or conference</p>
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

     </div>

        </div>

        <div id="nutrition">
        <div className='py-14 text-white text-center w-11/12 mx-auto mb-16 bg-green-900'> <h1 className='text-3xl font-bold'> NUTRITION EXPERTS </h1> </div>

        <div id="our-team" className="w-7/12 mx-auto  ">
     


      

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

        </div>

        <div id="health">
        <div className='py-14 text-white text-center w-11/12 mx-auto mb-16 bg-blue-400'> <h1 className='text-3xl font-bold'>HEALTH EXPERTS</h1> </div>

        <div id="our-team" className="w-7/12 mx-auto  ">
     


        <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/b76613a7d8904284b2f51a9b371d8f57.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Kaitlin Ahern </h1>
        <p className=" py-2"> Melinda is a registered dietitian and certified diabetes care and education specialist with over 40 years experience. Nearly 30 of those years have been in leadership roles with Joslin Diabetes Center. Melinda is recognized nationally and internationally for her hundreds of publications and has lectured extensively on topics related to nutrition and diabetes. She is the 2010 recipient of the American Diabetes Association Diabetes Educator of the Year award and has served on the Board of Directors for the Association of Diabetes Care and Education Specialists, the American Diabetes Association and the Certification Board for Diabetes Care and Education Specialists.  </p>
        <div className="text-2xl py-2 flex gap-4"> 
           
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>

      
      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] lg:h-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/9dc1064df9d64868ab35b58581dd1f33.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Allison Forsyth </h1>
        <p className=" py-2">A self-proclaimed  wellness career began in 2007 with a diploma from the National Personal Training Institute followed by an Advanced Certified Personal  certification. She has worked in a variety of roles to include yoga instructor, group fitness instructor, personal trainer, postural alignment specialist, physical therapy assistant, health coach and Registered Nurse. As a NASM certified Corrective Exercise Specialist,  fitness niche is in coaching proper movement in order to decrease pain and injury and promote optimal performance and function. Classically trained in Hatha, Ashtanga and pranayama in Rishkish, India; Jenn believes that being  is a multifaceted achievement that includes the mind and spirit just as much as the physical body. When she  bringing wellness to others, working out or hiking with her dogs; Jenn is likely expanding her knowledge of the industry with a book, podcast, course or conference</p>
        <div className="text-2xl py-2 flex gap-4"> 
           <Link href="https://www.facebook.com" > <FaFacebook />  </Link>
           
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>


      <div className="lg:flex gap-8 mb-8">
      <Image className="lg:w-[225px] lg:h-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/9e216e9cf2df48c88baaf7c8e0cd4285.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Rachel Grice </h1>
        <p className="text-gray-400 py-2">CPT, RYT-200  Contributing Editor  she/her/hers </p>
        <p className="text-lg loading-8">Maya Feller, MS, RD, CDN of Maya Feller Nutrition is a registered dietitian nutritionist who works with patients looking for nutritional management of non-communicable chronic illnesses with medical nutrition therapy. Maya received her masters of science in clinical nutrition at New York University, where she is adjunct faculty. When working one on one and with groups, Maya believes in meeting the whole person where they are and using a patient-centered, culturally sensitive approach to effect agency and enable each client to meet their unique nutrition-related goals. Maya is dedicated to promoting nutrition education that helps the public to make informed food choices that support health and longevity. Maya shares her approachable, real food based solutions to millions of people through regular speaking engagements, writing in local and national publications, via Instagram, and as a national nutrition expert on Good Morning America, Dr. Oz and more.</p>
        <div className="text-2xl py-2 flex gap-4"> 
         
           <Link href="https://www.instagram.com" > <FaInstagram /> </Link>
           
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
      <Image className="lg:w-[225px] lg:h-[225px] mb-2"
        src="https://img.livestrong.com/315x315/media-storage/contentlab-data/profile/8/2/980d707e2f3c426ebca231489920aaf0.jpg?type=webp"
        alt="Alt text for your image"
        width={800} // Set the width of the image
        height={500} // Set the height of the image
      />
      <div>
        <h1 className="text-2xl font-bold"> Ciara Lucas </h1>
        <p className="text-gray-400 py-2"> RRCA, CPT  Health Writer  she/her/hers</p>
        <p className="text-lg loading-8">Chef Hector Diaz is the Chef De Cuisine at La Grande Boucherie, where he started in 2021 with the goal of instilling joie de vivre in his team members on a daily basis. Chef Diaz is a Puerto Rico native. He began learning cooking skills and recipes at a young age from his grandmothers. Diaz studied at Florida State University while cooking at the then-famous Buckhead Brewery. He later transferred to Johnson and Wales University in Miami. There he studied classical French and Asian techniques, graduating in the top percent of his class. Diaz started his culinary career at a Miami landmark, The Forge. He worked his way up from line cook to Executive Sous Chef. He traveled up and down the East Coast before settling in New York City with his wife and children. There, he worked at a popular, high-volume, upscale casual dining restaurant in lower Manhattan before joining The Group NYC. He is passionate about leading and educating the kitchen staff and team members of La Grande Boucherie. </p>
        <div className="text-2xl py-2 flex gap-4"> 
         
           <Link href="https://www.twitter.com" > <FaTwitter /> </Link>
           <Link href="https://www.linkedin.com" >   <FaLinkedin />  </Link>
        </div>
      </div>

      </div>

     

     
      

     </div>

        </div>



        </div>
    );
};

export default Experts;