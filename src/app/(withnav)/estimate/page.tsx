import PriceCard from "@/components/Estimate/PriceCard";
import SideBar from "@/components/Sidebar/Sidebar";

export default function EstimatePage() {
  return (
    <main>
      <>
        {/* Stepper */}
        <div className="m-5 font-sans">
          <div>
            {/* Stepper Nav */}
            <ul className="relative flex flex-row gap-x-2">
              <li
                className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
"index": 1
    }'
              >
                <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                  <span className="w-11 h-11 flex justify-center items-center flex-shrink-0 text-2xl font-bold text-white bg-dark-blue font-bold rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      1
                    </span>
                    <svg
                      className="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="ms-2  text-2xl font-normal text-dark-blue">
                    ลักษณะภายนอก
                  </span>
                </span>
              </li>
              <li
                className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
"index": 2
    }'
              >
                <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                  <span className="w-11 h-11 flex justify-center items-center flex-shrink-0 bg-white border-4 border-[#BCBCBC] text-2xl font-bold text-dark-blue rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      2
                    </span>
                    <svg
                      className="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="ms-2 text-2xl font-normal text-dark-blue">
                    ลักษณะภายใน
                  </span>
                </span>
              </li>
              <li
                className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
  "index": 3
}'
              >
                <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                  <span className="w-11 h-11 flex justify-center items-center flex-shrink-0 bg-white border-4 border-[#BCBCBC]  text-2xl font-bold text-dark-blue rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      3
                    </span>
                    <svg
                      className="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="ms-2  text-2xl font-normal text-dark-blue">
                    ผลการประเมิน
                  </span>
                </span>
              </li>
              {/* End Item */}
            </ul>
            {/* End Stepper Nav */}
            {/* Stepper Content */}
          </div>
          {/* End Stepper */}
        </div>
      </>
    </main>
  );
}
