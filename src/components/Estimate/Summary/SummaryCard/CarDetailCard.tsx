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
    <div className="flex bg-light-blue  h-[450px] w-full">
      <div className="flex flex-col p-5 w-full">
        <div>
          <h2 className="text-2xl font-bold text-dark-blue">ข้อมูลรถรุ่นนี้</h2>
        </div>
        <div className="flex flex-col w-full space-y-2 mt-10">
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">ราคามือ 1</p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {firstHandPrice ? firstHandPrice : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ราคาในตลาดเฉลี่ย
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {averagePrice ? averagePrice : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ราคาขายออกเฉลี่ย
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {soldAverage ? soldAverage : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ส่วนเบี่ยงเบนมาตรฐานราคาในตลาด
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {SD ? SD : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ส่วนเบี่ยงเบนมาตรฐานราคาขายออก
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {soldAverageSD ? soldAverageSD : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              เลขไมล์เฉลี่ย (กม.)
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {averageMile ? averageMile : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between text-lg font-normal">
            <p className="text-lg font-normal text-dark-blue">
              จำนวนรถในตลาด (คัน)
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              {amountInMarket ? amountInMarket : "-"}
            </p>
          </div>
          <hr className="border-white"></hr>
        </div>
      </div>
    </div>
  );
}
