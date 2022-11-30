import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const result = useLoaderData()
    const data = result.data;
    
   
    return (
        <div>
           <LineChart width={500} height={500} data={data}>
           <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
           <Line type="monotone" dataKey="total" stroke="#82ca9d" />
           </LineChart>
 
        </div>
    );
};

export default Chart;