import { LineChart } from "../Chart/LineChart";

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
      <div className="flex flex-col p-5 w-full">
        <div className="mt-2">
          <h2 className="text-xl font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
            ราคาตลาดเฉลี่ย
          </h2>
          <LineChart />
        </div>
      </div>
    </div>
  );
}
