import React from 'react'
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const Chart = ({arr=[],currency,days}) => {
   const prices=[];
   const date=[];
   const data={
    labels:date,
   
    datasets:[{
        label:`price in ${currency}`,
        data:prices,
        borderColor:"blue",
        backgroundColor:"yellow"
    },],
   }
   for (let i = 0; i < arr.length; i++) {
    if(days=="24h") date.push(new Date(arr[i][0]).toLocaleTimeString())//respnsive ===true
   else date.push(new Date(arr[i][0]).toLocaleDateString());
prices.push(arr[i][1]);
   }
   console.log(date)
  return (
    <Line options={{
        responsive:true
    
        }
    }
   data={data} 
    />

   
  )
}

export default Chart