export default function LowestHighestPriceCard({
  label,
  present,
  past,
  mode,
}: {
  label: string;
  present?: string;
  past?: string;
  mode: any;
}) {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center ">
      <div
        className={`flex flex-col p-5 w-full  ${
          mode === 0 ? "justify-center items-center space-y-8" : "space-y-3"
        }`}
      >
        <h1 className="text-base font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
          {label}
        </h1>
        <div className="text-sm font-normal text-dark-blue">
          {present ? (
            <h1 className=" font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              <span className="text-2xl">฿</span>
              <span className="text-3xl">{present}</span>
              {mode === 0 && <span className="text-3xl">,000</span>}
              {mode === 1 && <span className="text-2xl">K</span>}
            </h1>
          ) : (
            <h1 className=" font-bold text-dark-blue">-</h1>
          )}
          {mode === 1 && (
            <p className="text-sm font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ในตลาดตอนนี้
            </p>
          )}
        </div>
        {mode === 0 && (
          <p className="font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis text-center">
            <span className="text-center">2.4%</span>
          </p>
        )}

        {mode === 1 && (
          <div>
            {past ? (
              <h1 className=" font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
                <span className="text-2xl">฿</span>
                <span className="text-3xl">{past}</span>
                <span className="text-2xl">K</span>
              </h1>
            ) : (
              <h1 className=" font-bold text-dark-blue">-</h1>
            )}

            <p className="text-sm font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ที่เคยขายได้
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
