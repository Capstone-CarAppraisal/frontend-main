import BarChart from "./Chart/BarChart";

export default function AverageMarketPriceByYearCard() {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center">
      <div className="flex flex-col p-5 w-full">
        <div className="mt-2">
          <h2 className="text-xl font-bold text-dark-blue">
            ราคาตลาดเฉลี่ยของแต่ละปีรถ
          </h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
}
