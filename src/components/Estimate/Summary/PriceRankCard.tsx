export default function PriceRankCard() {
  return (
    <div className="flex bg-light-blue  h-[450px] w-full">
      <div className="flex flex-col p-5 w-full">
        <div>
          <h2 className="text-xl font-bold text-dark-blue">อันดับราคาในตลาด</h2>
        </div>
        <div className="flex flex-col w-full space-y-2 mt-10">
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">ราคามือ 1</p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              ฿600K
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ราคาในตลาดเฉลี่ย
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              ฿600K
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ราคาขายออกเฉลี่ย
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              ฿600K
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ส่วนเบี่ยงเบนมาตรฐานราคาในตลาด
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              ฿600K
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              ส่วนเบี่ยงเบนมาตรฐานราคาขายออก
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              ฿600K
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue">
              เลขไมล์เฉลี่ย (กม.)
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              ฿600K
            </p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between text-lg font-normal">
            <p className="text-lg font-normal text-dark-blue">
              จำนวนรถในตลาด (คัน)
            </p>
            <p className="text-lg font-normal text-dark-blue font-normal">
              105
            </p>
          </div>
          <hr className="border-white"></hr>
        </div>
      </div>
    </div>
  );
}
