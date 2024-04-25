export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center z-10">
      <div className="loader">
        <div className="flex items-center justify-center">
          <div className="animate-spin w-[28px] h-[28px] inline-block  border-[3px] border-current border-t-transparent text-blue rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
