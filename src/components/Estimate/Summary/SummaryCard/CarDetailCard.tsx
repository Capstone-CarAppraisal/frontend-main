export default function CarDetailCard({
  firstHandPrice,
  averagePrice,
  soldAverage,
  SD,
  soldAverageSD,
  averageMile,
  amountInMarket,
}: {
  firstHandPrice?: any;
  averagePrice?: any;
  soldAverage?: any;
  SD?: any;
  soldAverageSD?: any;
  averageMile?: any;
  amountInMarket?: any;
}) {
  return (
    <div className="flex bg-light-blue  h-full w-full">
      <div className="flex flex-col p-5 w-full">
        <div>
          <h2 className="text-2xl font-bold text-dark-blue">ข้อมูลรถรุ่นนี้</h2>
        </div>
        <div className="flex flex-col w-full space-y-2 mt-4">
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ราคามือ 1
            </p>
            <p className="text-lg font-semibold text-dark-blue">
              {firstHandPrice ? firstHandPrice : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ราคาในตลาดเฉลี่ย
            </p>
            <p className="text-lg font-semibold text-dark-blue">
              {averagePrice ? averagePrice : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ราคาขายออกเฉลี่ย
            </p>
            <p className="text-lg font-semibold text-dark-blue">
              {soldAverage ? soldAverage : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              S.D. ราคาในตลาด
            </p>
            <p className="text-lg font-semibold text-dark-blue">
              {SD ? SD : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              S.D. ราคาขายออก
            </p>
            <p className="text-lg font-semibold text-dark-blue">
              {soldAverageSD ? soldAverageSD : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              เลขไมล์เฉลี่ย (กม.)
            </p>
            <p className="text-lg font-semibold text-dark-blue">
              {averageMile ? averageMile : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between text-lg font-normal">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              จำนวนรถในตลาด (คัน)
            </p>
            <p className="text-lg font-semibold text-dark-blue ">
              {amountInMarket ? amountInMarket : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
        </div>
      </div>
    </div>
  );
}
