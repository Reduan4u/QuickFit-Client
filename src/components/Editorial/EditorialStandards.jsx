"use client";
import Image from 'next/image';
import React from 'react';
import Button1 from '../Common/Button1';
import Link from "next/link";

const EditorialStandards = () => {
  return (
    <div>

      <div className="hero min-h-[550px] w-11/12 mx-auto" style={{ backgroundImage: 'url(https://img.livestrong.com/2880x1100/media-storage/livestrong-data/hub/2d0c0809-aca5-4f77-a55a-54717aef40f6-heroillos.jpg)' }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-white text-5xl font-bold">Our Editorial Standards</h1>


          </div>
        </div>
      </div>



      <div className="my-16 w-2/4 flex-wrap mx-auto rounded-md py-12 text-lg font-medium border border-red-500 flex gap-2 justify-center">

        <a href="#cover" className="text-blue-600 scroll-link">How We Decide What We Cover -</a>
        <a href="#products" className="text-blue-600 scroll-link">How We Cover Products -</a>
        <a href="#sources" className="text-blue-600 scroll-link">How We Work With Sources -</a>
        <a href="#works" className="text-blue-600 scroll-link">How Expert Reviewing Works -</a>
        <a href="#writers" className="text-blue-600 scroll-link">How We Work With Writers -</a>
        <a href="#commitment" className="text-blue-600 scroll-link">Our Commitment to DEI</a>
        <a href="#talk" className="text-blue-600 scroll-link">Talk to Us</a>




      </div>


      <div className="m-20 text-center lg:flex lg:flex-row-reverse gap-20 justify-center items-center">



        <Image className="w-[625px] h-[625px]"
          src="https://img.livestrong.com/550x550/media-storage/livestrong-data/hub/a01cdbba-305d-4cb9-9389-30690927e86b-MaskGroup.jpg?type=webp"
          alt="Alt text for your image"
          width={500} // Set the width of the image
          height={500} // Set the height of the image
        />


        <div className="lg:w-2/6 mb-4">
          <h1 className="text-3xl py-4 font-bold text-center">Our Mission</h1>
          <p className="text-lg leading-8 pb-4">QuickFit delivers trusted health, nutrition and fitness information — for all. We strive to give you the tools and knowledge you need to live a happier, healthier life.</p>


        </div>



      </div>



      <div className="m-20 text-center lg:flex gap-20 justify-center items-center">



        <Image className="w-[625px] h-[625px]"
          src="https://img.livestrong.com/550x550/media-storage/livestrong-data/hub/117fb576-54a7-41c2-a7f0-a58d47a08563-MaskGroup1.jpg?type=webp"
          alt="Alt text for your image"
          width={500} // Set the width of the image
          height={500} // Set the height of the image
        />


        <div className="lg:w-2/6 mb-4">
          <h1 className="text-3xl py-4 font-bold text-center">Who We Are</h1>
          <p className="text-lg leading-8 pb-4">We are a team of experienced health journalists who believe everyone should have access to trustworthy, science-backed health information. Learn more about the  team below.</p>

          <Link href='/editorial' className="mt-10 md:w-1/4 w-1/2">
            <Button1 className="" title={"Learn About the Team"} />
          </Link>
        </div>


      </div>


      <div id='cover'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-red-500'> <h1 className='text-3xl font-bold'> How We Decide What We Cover </h1> </div>

        <div className='mx-auto my-16 w-7/12'>
          <p>
            We publish and update hundreds of articles each month. From the early stages of brainstorming all the way through to publication, we always have one question in mind: How can this article best serve its readers? We strive to inform and encourage, never assume nor prescribe. <br /> <br />

            We believe in playing to one’s strengths here at QuickFit and what we do best is creating clear, authoritative, actionable articles that will be just as accurate and useful a year from now as they are today. <br /><br />

            The comprehensive articles we publish take considerable time to research and fact check, which is why you won’t find breaking news on our site. But you will find in-depth articles about timely subjects that look closely at the evidence (or lack thereof) behind popular and budding trends within our verticals. <br /> <br />

            Our articles are informed and inspired by many things: current events, newly published research, pitches from writers and experts (if you have a pitch for us, you can submit it here!), questions from our friends and families, experiences we’ve had in our own lives, emails from readers like you (write to us at editorial@livestrong.com), popular Google searches and much more.  <br /> <br />

            When considering these story ideas, we ask ourselves many questions, but these three are always at the top of our list: <br /> <br />

            • Is the subject related to at least one of our three core verticals? <br />
            • Will our coverage be useful for readers? <br />
            • Will the story still be relevant to readers a month from now? A year from now? <br />

          </p>
        </div>

      </div>



      <div id='products'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-blue-900'> <h1 className='text-3xl font-bold'>How We Cover Products</h1> </div>

        <div className='mx-auto my-16 w-7/12'>
          <p>
            Sometimes our aim to inform and encourage you along your health journey involves reviewing and recommending products or services. We may earn a commission through links to some products in our articles — but we also promise to always include the products we believe in, regardless of whether or not they will make us a commission. <br /> <br />

            The revenue made from these commissions helps support our independent editorial mission of providing the highest-quality health and fitness information to our readers for free; no staff members or contributors are directly compensated. <br />  <br />

            Our readers come before our revenue. We only recommend products that we truly believe will help you, and we are confident in our recommendations because each one goes through our rigorous evaluation process: <br /> <br />

            <span className='text-2xl font-medium'>First, We Do Our Homework</span> <br />
            This process starts with listening and learning: We analyze reader feedback and internet search trends to determine what health problems our readers are trying to solve, what types of products they’re  shopping for and how we can help with both. Then we dig deeper into all the factors that are important to  consider before buying a particular product, including: <br /> <br />     </p>








          <li> cost <br /> </li>
          <li> sustainability <br />  </li>
          <li> accessibility<br />  </li>
          <li> versatility <br />  </li>
          <li>  quality<br /> </li>
          <li> user experience <br />  </li> <br />

          <p>
            <span className='text-2xl font-medium'> Then We Speak to (Independent) Experts <br /> <br /></span>

            We interview experts who are not associated with products or brands for their input. They help us identify the most important features to consider when purchasing a particular product and share their personal recommendations for products they have used and loved.<br /><br />

            <span className='text-2xl font-medium'>Finally, We Create a Rubric, Cite Top Sources and Provide the Full Picture <br /> <br /></span>
            We use the experts’ feedback in addition to our own in-depth analyses and personal tests when applicable to create a rubric to evaluate and review each product. This rubric varies by product, but we always take these key elements into consideration: <br /><br />   </p>







          <li> price<br /> </li>
          <li> efficacy<br />  </li>
          <li>accessibility<br />  </li>
          <li> materials and/or ingredients<br />  </li>
          <br />

          <p>When writing about products, we include any relevant, credible scientific research and highlight certifications or endorsements from reliable third-party organizations. We also personally test as many products as possible so we can share personal insights and experiences from our writers, editors and experts. <br /><br />

            To best suit your needs and preferences, we try to link to multiple retailers from which to shop as often as possible. And to maintain our editorial integrity, we clearly detail the pros and the cons of each product.<br /><br />

            Whenever possible, we aim to highlight products from companies owned by members of marginalized and underrepresented communities. Are you a business owner who would like to be considered for one of our articles? Please reach out to us at <span className='text-blue-500 underline'>editorial@livestrong.com.</span>    </p>



        </div>

      </div>

      <div id='sources'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-sky-600'> <h1 className='text-3xl font-bold'>How We Choose and Work With Sources</h1> </div>

        <div className=' my-16 '>
          <p className='w-7/12 mx-auto'>
            We have strict guidelines for the kind of research we cite in our articles: You will rarely find studies or papers cited on LIVESTRONG.com that are outdated (i.e. published prior to 2015) or preliminary (i.e. conducted on animals or in petri dishes rather than in humans; presented at a conference rather than published in a respected, peer-reviewed journal; or carried out on a small and/or not representative sample of people) — and when you do, we will always explain the reasoning behind making an exception for that research to be included in an article. <br /> <br />

            We do not cite research that is published in predatory or questionable journals, shows clear signs of conflict of interest or is untrustworthy or problematic in any other way. <br /> <br />
          </p>

          <div id="our-experts" className=" w-9/12 mx-auto lg:flex text-center items-center justify-center gap-20 ">



            <Image className="w-full flex-1 "
              src="https://img.livestrong.com/550x550/media-storage/livestrong-data/hub/b4865b1f-3eb9-4dd1-8c5d-9b48fef1bef1-factcheckedsquare.jpg?type=webp"
              alt="Alt text for your image"
              width={1000} // Set the width of the image
              height={1000} // Set the height of the image
            />


            <div className=" mb-4 flex-1">

              <p className="text-lg leading-8 pb-4">When you see the Fact Checked icon, that means all of the cited sources in that article adhere to our editors pre-approved list of top-quality reference materials.</p>


            </div>

          </div>

          <p className='w-7/12 mx-auto '>When you see an icon at the top of an article that says “Fact Checked,” that means the story only uses approved sources that meet our strict guidelines. (You may also see “Expert Reviewed” — more on that in the next section.) <br /> <br />

            We also have high standards when it comes to the experts we interview for our articles: They must be credentialed in the field they are speaking about. For nutrition-focused content, for example, we speak with registered dietitians, who have earned a degree in the field and passed a national exam (as opposed to nutritionists, who may not hold any degrees or credentials).  <br /> <br />

            All of that said, QuickFit is a large website and we are human: We make mistakes. If you ever see questionable research or expert sources in one of our articles, <span className='text-blue-500 underline'>please let us know! </span>
          </p>


        </div>

      </div>


      <div id='works'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-green-700'> <h1 className='text-3xl font-bold'>How Expert Reviewing Works</h1> </div>

        <p className='w-7/12 mx-auto my-16'>Doctors, nurses, registered dietitians, physical therapists, certified personal trainers and other credentialed experts review our articles to ensure they are accurate, thorough and up-to-date. An article that has been reviewed by an expert displays the expert’s name in the byline. Articles covering the most complicated health and science topics with the most direct effect on the lives of our readers take highest priority for our expert reviewers.</p> <br />


        <div id="our-experts" className=" w-9/12 mx-auto lg:flex text-center items-center justify-center gap-20 ">
          <div className=" mb-4 flex-1">
            <p className="text-lg leading-8 pb-4">Articles that have been reviewed by a credentialed subject-matter expert will display that expert is name and credentials in the byline.</p>
          </div>

          <Image className="w-full flex-1 "
            src="https://img.livestrong.com/550x550/media-storage/livestrong-data/hub/1bdfc302-d462-4dd6-b325-93a1a162b716-reviewedbysquare.jpg?type=webp"
            alt="Alt text for your image"
            width={1000} // Set the width of the image
            height={1000} // Set the height of the image
          />


        </div>

        <p className='w-7/12 mx-auto mb-16'>The expert review process is pretty simple: Experts read through articles related to their fields of expertise and leave notes anywhere something is unclear, lacks context, t accurate, cites outdated or unreliable research or poses any other kind of factual problem. Once we receive an  comments on an article, we address all issues and implement the expert is recommendations before publishing. <br /> <br />

          We recruit our diverse team of reviewers from top medical institutions and established health organizations. If you’re interested in becoming an expert reviewer, <span className='text-blue-500 underline'>we love to hear from you.</span>  <br /><br />

          <span className='text-blue-500 underline'>Learn more about our experts here.</span> </p>

      </div>


      <div id='writers'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-red-400'> <h1 className='text-3xl font-bold'>How We Choose and Work With Writers</h1> </div>
        <p className='w-7/12 mx-auto my-16'>We carefully assess contributing writers and editors for subject matter expertise, train them on com best practices and provide regular feedback. <br /> <br />

          Freelance writers have the opportunity to pitch stories to our editors via this form. We only approve a select number of pitches from this form due to the size and bandwidth of our team, but we always welcome fresh perspectives.</p>
      </div>


      <div id='commitment'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-indigo-600'> <h1 className='text-3xl font-bold'>Our Commitment to Diversity, Equity and Inclusion</h1> </div>
        <p className='w-7/12 mx-auto my-16'>The QuickFit team acknowledges, respects and appreciates everyone for who they are. <br /> <br />

          We believe discrimination is a public health issue, and stand strong against discrimination of any kind, including biases based on race, ethnicity, sex, gender, sexual orientation, body type, age, ability, income, religion or any other aspect of identity. <br /><br />

          We are committed to making  a better, more inclusive site. With millions of monthly visitors and social media followers, we believe we have a platform from which to help spark positive, lasting change in the health publishing industry and the world.<br /><br />

          Our goal is to work toward achieving equity for excluded and marginalized groups through health, fitness and nutrition information that makes health a shared value and creates more equitable communities.<br /><br />

          Achieving these goals requires active, ongoing work, which includes dismantling our own biases and educating ourselves while exploring our own unique identities and experiences. To do so, we are committed to the following ongoing initiatives:<br /><br />

          • <span className='font-bold'>Listening to Experts:</span> We host monthly internal Q&A events in which health, fitness and nutrition experts from marginalized communities are paid to discuss their work and experiences with the QuickFit team. Interested in speaking with us? Get in touch at <span className='text-blue-500 underline'> editorial@livestrong.com.</span><br /><br />

          • <span className='font-bold'>Continuing Education:</span> As part of the Leaf Group family of brands, we participate in QuickFit DEI employee empowerment coursework to better understand and support our teams and communities.<br /><br />

          • <span className='font-bold'>Increasing Representation:</span> We have implemented an optional, confidential self-identification process for our contributors to list their race, ethnicity and gender. This helps us ensure our contributor base is representative of all members of our audience. We also make a point of working with and highlighting diverse organizations, businesses and individuals in health, fitness and nutrition in our articles.<br /><br />

          • <span className='font-bold'>Changing Language:</span> We update our style guide and continue to improve our existing content library to ensure all language is consistent with our brand’s values of diversity, equity and inclusion.<br /><br />
        </p>
      </div>


      <div id='talk'>
        <div className='py-14 text-white text-center w-11/12 mx-auto bg-gray-600'> <h1 className='text-3xl font-bold'>Talk to Us</h1> </div>
        <p className='w-7/12 mx-auto my-16'>
          At QuickFit we are all about helping you live stronger, healthier and happier.  <br /> <br />

          So if you have a question, comment or concern about the site is articles or editorial process, we want to hear it! You can reach us at editorial@livestrong.com or <span className='text-blue-500 underline'>https://www.livestrong.com/contact-us/. </span> <br /> <br />

          That said, we are the editorial team, so we’re better with words than with tech issues. If you’re having trouble with the site functionality, please email our tech team directly at <span className='text-blue-500 underline'>support@livestrong.com</span>.
        </p>
      </div>



    </div>
  );
};

export default EditorialStandards;