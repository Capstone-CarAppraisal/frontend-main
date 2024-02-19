export default function HighestPriceCard() {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center ">
      <div className="flex flex-col p-5 w-full space-y-3">
        <h1 className="text-base font-bold text-dark-blue">ราคาตลาดสูงสุด</h1>
        <div className="text-sm font-normal text-dark-blue">
          <h1 className=" font-bold text-dark-blue ">
            <span className="text-2xl">฿</span>
            <span className="text-3xl">493</span>
            <span className="text-2xl">K</span>
          </h1>
          <p className="text-sm font-normal text-dark-blue">ในตลาดตอนนี้</p>
        </div>
        <div>
          <h1 className=" font-bold text-dark-blue ">
            <span className="text-2xl">฿</span>
            <span className="text-3xl">500</span>
            <span className="text-2xl">K</span>
          </h1>
          <p className="text-sm font-normal text-dark-blue">ที่เคยขายได้</p>
        </div>
      </div>
    </div>
  );
}
