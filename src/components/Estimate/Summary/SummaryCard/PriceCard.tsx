export default function PriceCard({
  price,
  percent,
  mode,
}: {
  price: any;
  percent?: number;
  mode: any;
}) {
  const progressBarWidth = `${percent}%`;

  return (
    <div className="flex bg-light-blue h-[200px] w-full items-center ">
      <div className="flex flex-col p-5 w-full">
        <h1
          className={`font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis ${
            mode === 0 ? "text-center" : ""
          }`}
        >
          <span className="text-6xl">{price}</span>
        </h1>
        <p
          className={`text-2xl font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis ${
            mode === 0 ? "text-center" : ""
          }`}
        >
          ราคาประเมิน
        </p>
        <div>
          {percent && (
            <div className="mt-2">
              <div
                className="flex w-full h-2 bg-white overflow-hidden"
                role="progressbar"
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={`flex flex-col w-full h-full justify-center overflow-hidden bg-rose text-xs text-white text-center whitespace-nowrap transition duration-500`}
                  style={{ width: progressBarWidth }}
                />
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-base text-rose font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                  {percent}%
                </span>
                <h3 className="text-base font-normal text-rose overflow-hidden whitespace-nowrap text-ellipsis">
                  จากราคามือ 1
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
