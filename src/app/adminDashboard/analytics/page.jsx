import BarCharts from '@/components/Chart/BarChart/BarChart';
import LineCharts from '@/components/Chart/LineChart/LineCharts';
import PaiChart from '@/components/Chart/Pai-Chart/PaiChart';
import React from 'react';

const page = () => {
  return (
    <div className='text-white'>
      <div className='w-full'>
        <PaiChart></PaiChart>
      </div>
      <div className="mx-10">
        <BarCharts></BarCharts>
      </div>
      <div className="mx-10">
        <LineCharts></LineCharts>
      </div>
    </div>
  );
};

export default page;