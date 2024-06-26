export default function PriceRankCard({ rankData }: { rankData?: any }) {
  return (
    <div className="flex bg-light-blue  h-[450px] w-full">
      <div className="flex flex-col p-5 w-full">
        <div>
          <h2 className="text-xl font-bold text-dark-blue">อันดับราคาในตลาด</h2>
        </div>
        <div className="flex flex-col w-full space-y-2 mt-10">
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">1.</p>
            <p className="text-lg font-semibold text-dark-blue">
              {rankData ? `฿${Math.round(rankData[0].cost / 1000)}K` : "-"}
            </p>
          </div>

          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">2.</p>
            <p className="text-lg font-semibold text-dark-blue">
              {rankData ? `฿${Math.round(rankData[1].cost / 1000)}K` : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">3.</p>
            <p className="text-lg font-semibold text-dark-blue">
              {rankData ? `฿${Math.round(rankData[2].cost / 1000)}K` : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">4.</p>
            <p className="text-lg font-semibold text-dark-blue">
              {rankData ? `฿${Math.round(rankData[3].cost / 1000)}K` : "-"}
            </p>
          </div>

          <hr className="border-white"></hr>
          <div className="flex justify-between text-lg">
            <p className="text-lg font-normal text-dark-blue">5.</p>
            <p className="text-lg font-semibold text-dark-blue">
              {rankData ? `฿${Math.round(rankData[4].cost / 1000)}K` : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between text-lg">
            <p className="text-lg font-normal text-dark-blue">...</p>
            <p className="text-lg font-semibold text-dark-blue">...</p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between text-lg">
            <p className="text-lg font-semibold text-dark-blue">เฉลี่ย</p>
            <p className="text-lg font-semibold text-dark-blue">
              {rankData
                ? `฿${Math.round(
                    (rankData[4].cost +
                      rankData[3].cost +
                      rankData[2].cost +
                      rankData[1].cost +
                      rankData[0].cost) /
                      5 /
                      1000
                  )}K`
                : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
        </div>
      </div>
    </div>
  );
}
