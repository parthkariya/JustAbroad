import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ grapdata }) => {
  const options = {
    scales: {
      x: {
        type: "category",
        position: "bottom",
        // barThickness: 20,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  if (grapdata && grapdata.datasets && grapdata.datasets.length > 0) {
    grapdata.datasets.forEach((dataset) => {
      dataset.barThickness = 20; // Adjust this value to make the bars thin
    });
  }

  return (
    <div>
      <Bar data={grapdata} options={options} />
      {/* <Bar data={data1} options={options} />  */}
    </div>
  );
};

export default BarChart;
