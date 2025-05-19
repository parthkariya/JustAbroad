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

const SecViewReportBarChart = ({ getlist }) => {
  
  const data = {
    labels: [
      "Listening Session 9",
      "Listening Session 10",
      "Listening Session 3",
      "Listening Session 7",
      "Listening Session 8",
    ],
    datasets: [
      {
        label: "Sample Data",
        // backgroundColor: 'rgba(75,192,192,0.2)',
        // backgroundColor: '#8b0000',
        backgroundColor: "#ae4d4d",
        // borderColor: 'rgba(75,192,192,1)',
        borderColor: "#ae4d4d",

        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        // hoverBorderColor: 'rgba(75,192,192,1)',
        data: [40, 35, 37, 30, 20],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // 'linear' has been replaced with 'category'
        position: "bottom",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {/* <Bar data={getlist.graph_data} options={options} /> */}
      <Bar data={data} options={options} /> 
    </div>
  );
};

export default SecViewReportBarChart;
