import EHeading from '@/components/Common/EHeading'
import TrackerNav from '@/components/Tracker/trackerNav/TrackerNav'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black min-h-screen'>
       <div className="flex flex-col justify-center items-center">
<div>
<TrackerNav />
       <EHeading>{"This page is in progress"}</EHeading>
</div>
       </div>
    </div>
  )
}

export default page
