import BarCharts from '@/components/Chart/BarChart/BarChart';
import LineCharts from '@/components/Chart/LineChart/LineCharts';
import PaiChart from '@/components/Chart/Pai-Chart/PaiChart';
import React from 'react';

const page = () => {
    return (
        <div>
            <PaiChart></PaiChart>
            <BarCharts></BarCharts>
            <LineCharts></LineCharts>
        </div>
    );
};

export default page;