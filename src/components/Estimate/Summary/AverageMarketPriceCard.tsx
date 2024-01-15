// components/LineChart.js
import LineChart from "../Summary/Chart/LineChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function AverageMarketPriceCard() {
  const chartData = {
    labels: ["JUN", "JUL", "AUG", "SEP", "OCT"],
    datasets: [
      {
        data: [300000, 320000, 300000, 400000, 250000],
        fill: false,
        borderColor: "#ED5656",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center">
      <div className="flex flex-col p-5 mt-3  w-full space-y-1">
        <h2 className="text-xl font-bold text-dark-blue">ราคาตลาดเฉลี่ย</h2>
        <LineChart data={chartData} />
      </div>
    </div>
  );
}
