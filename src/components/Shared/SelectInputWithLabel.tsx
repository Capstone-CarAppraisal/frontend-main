export default function SelectInputWithLabel({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="">
      <label
        htmlFor="hs-select-label"
        className="block text-sm mb-2 text-black text-xl font-normal"
      >
        {label}
      </label>
      <select
        id="hs-select-label"
        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
      >
        <option>{name}</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}
