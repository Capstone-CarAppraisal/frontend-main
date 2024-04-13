export default function SelectButton({
  onChange,
  activeMode,
}: {
  onChange: any;
  activeMode: any;
}) {
  return (
    <div className="flex rounded-lg shadow-sm">
      <button
        type="button"
        className={`w-[160px] py-3 px-4  items-center gap-x-2 text-2xl font-bold text-white shadow-sm ${
          activeMode === 0 ? "bg-dark-blue" : "bg-lightgrey"
        }`}
        onClick={() => onChange(0)}
      >
        ทั่วไป
      </button>
      <button
        type="button"
        className={`w-[160px] py-3 px-4  items-center gap-x-2 text-2xl font-bold text-white  shadow-sm ${
          activeMode === 1 ? "bg-rose" : "bg-lightgrey"
        }`}
        onClick={() => onChange(1)}
      >
        เชี่ยวชาญ
      </button>
    </div>
  );
}
