"use client"

import React, { useState } from 'react';
import ForumNavLink from '../Common/ForumNavLink';
import Announcement from './announcement/Announcement';
import Popular from './popular/Popular';
import Newest from './newest/Newest';
import Health from './health/Health';
import Fitness from './fitness/Fitness';

const ForumComponents = () => {



  const [selectedTab, setSelectedTab] = useState('popular');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'announcement':
        return <Announcement />;
      case 'popular':
        return <Popular />;
      case 'newest':
        return <Newest />;
      case 'health':
        return <Health />;
      case 'fitness':
        return <Fitness />
      default:
        return null;
    }
  };


  return (
    <div>
      <div className='mt-5 pb-5  flex items-center justify-between px-4'>
        <ul className='flex items-center justify-center gap-8 text-[14px] text-[#97a4af]'>
          <li className='hover:text-[#f2f2f2] cursor-pointer'>
            <span onClick={() => handleTabClick('announcement')} className={selectedTab === 'announcement' ? 'text-[#2a4bf1ee] border-b-2 pb-2 border-[#2a4bf1ee]' : ''}>

              Announcement
            </span>
          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer'>
            <span onClick={() => handleTabClick('popular')} className={selectedTab === 'popular' ? 'text-[#2a4bf1ee] border-b-2 pb-2 border-[#2a4bf1ee]' : ''}>


              Popular
            </span>
          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer '>
            <span onClick={() => handleTabClick('newest')} className={selectedTab === 'newest' ? 'text-[#2a4bf1ee] border-b-2 pb-2 border-[#2a4bf1ee]' : ''} >
              Newest
            </span>
          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer '>
            <span onClick={() => handleTabClick('health')} className={selectedTab === 'health' ? 'text-[#2a4bf1ee] border-b-2 pb-2 border-[#2a4bf1ee]' : ''} >
              Health
            </span>
          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer '>
            <span onClick={() => handleTabClick('fitness')} className={selectedTab === 'fitness' ? 'text-[#2a4bf1ee] border-b-2 pb-2 border-[#2a4bf1ee]' : ''} >
              Fitness
            </span>
          </li>
        </ul>
        <button className='bg-[#6366F1] py-1 px-2 rounded-3xl text-[#fff]'>Create Post</button>
      </div>


    <div class="border-t border-gray-700 my-4 mx-4"></div>


      {/* ALl the code will render here */}



      {renderContent()}

    </div>
  );
};

export default ForumComponents;