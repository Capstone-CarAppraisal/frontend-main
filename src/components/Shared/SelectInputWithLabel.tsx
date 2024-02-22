export default function SelectInputWithLabel({
  label,
  name,
  handleChange,
  option,
  value,
  isSelected,
}: {
  label: string;
  name: string;
  handleChange: any;
  option: any;
  value: any;
  isSelected: any;
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
        className={`py-3 px-4 pe-9 block  border-[#BCBCBC] ${
          isSelected ? "text-black" : "text-[#BCBCBC]"
        } w-full rounded-lg  text-lg focus:border-blue-500 focus:text-black`}
        onChange={handleChange}
        value={value}
      >
        <option key="" value="">
          {name}
        </option>
        {option &&
          option.map((option: any, index: any) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}
