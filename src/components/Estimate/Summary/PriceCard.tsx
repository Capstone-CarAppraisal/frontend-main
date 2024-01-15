export default function PriceCard({
  price,
  percent,
}: {
  price: number;
  percent: number;
}) {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center ">
      <div className="flex flex-col p-5 w-full">
        <h1 className=" font-bold text-dark-blue ">
          <span className="text-5xl">฿</span>
          <span className="text-6xl">{price}</span>
          <span className="text-5xl">K</span>
        </h1>
        <p className="text-2xl font-bold text-dark-blue">ราคาประเมิน</p>
        <div>
          <div className="mt-2">
            <div
              className="flex w-full h-2 bg-gray-200 overflow-hidden"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center overflow-hidden bg-rose text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "66%" }}
              />
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-base text-rose font-semibold">
                {percent}%
              </span>
              <h3 className="text-base font-normal text-rose">จากราคามือ 1</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
