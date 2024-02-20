export default function LowestHighestPriceCard({
  label,
  present,
  past,
}: {
  label: string;
  present?: string;
  past?: string;
}) {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center ">
      <div className="flex flex-col p-5 w-full space-y-3">
        <h1 className="text-base font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
          {label}
        </h1>
        <div className="text-sm font-normal text-dark-blue">
          {present ? (
            <h1 className=" font-bold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              <span className="text-2xl">฿</span>
              <span className="text-3xl">{present}</span>
              <span className="text-2xl">K</span>
            </h1>
          ) : (
            <h1 className=" font-bold text-dark-blue">-</h1>
          )}

          <p className="text-sm font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
            ในตลาดตอนนี้
          </p>
        </div>
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
      </div>
    </div>
  );
}
