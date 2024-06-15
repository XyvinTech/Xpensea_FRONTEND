import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
);

const labels = ["January", "February", "March", "April", "May"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Aalapuzha",
      data: [1000, 3000, 6000, 4000, 5000],
      fill: false,
      borderColor: "#165BAA",
      backgroundColor: "#165BAA",
      borderJoinStyle: "bevel",
      pointBackgroundColor: "#165BAA",
    },
    {
      label: "Ernamkulam",
      data: [4000, 5000, 3000, 2000, 3000],
      fill: true,
      borderColor: "#A155B9",
      backgroundColor: "#A155B9",
      borderJoinStyle: "bevel",
      pointBackgroundColor: "#A155B9",
    },
    {
      label: "Kochi",
      data: [3000, 2000, 2000, 1000, 2000],
      fill: false,
      borderColor: "#F765A3",
      tension: 0.1,
      backgroundColor: "#F765A3",
      borderJoinStyle: "bevel",
      pointBackgroundColor: "#F765A3",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom', 
    },
   
  },
  scales: {
    y: {
      ticks: {
        stepSize: 1000, 
      },
      min: 0,
      max: 6000, 
    },
  },
};

const StyledChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default StyledChart;
