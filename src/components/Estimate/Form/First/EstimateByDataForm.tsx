"use client";

import SelectInputWithLabel from "@/components/Shared/SelectInputWithLabel";
import React, { useState } from "react";

export default function EstimateByDataForm({
  step,
  prevStep,
  nextStep,
}: {
  step: any;
  prevStep: Function;
  nextStep: Function;
}) {
  const handlePrev = () => {
    prevStep();
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      {step === 1 && (
        <div className="flex justify-center w-full h-[60vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              กรอกลักษณะภายนอกรถ
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
              <div className="grid grid-row-2 w-[80%] mb-20">
                <div className="grid grid-cols-2 mb-10">
                  <div className="px-4">
                    <SelectInputWithLabel label="ยี่ห้อ" name="เลือกยี่ห้อรถ" />
                  </div>
                  <div className="px-4">
                    <SelectInputWithLabel label="รุ่น" name="เลือกรุ่นรถ" />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4">
                    <SelectInputWithLabel
                      label="ประเภทรถ"
                      name="เลือกประเภทรถ"
                    />
                  </div>
                  <div className="px-4">
                    <SelectInputWithLabel label="สี" name="เลือกสีรถ" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5  space-x-10">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="py-2 px-3 w-[9vw] h-[50px] font-bold text-lg items-center text-center gap-x-2  font-semibold rounded-3xl border border-transparent bg-dark-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  ย้อนกลับ
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-2 px-3 w-[9vw] h-[50px] items-center gap-x-2 text-lg text-center font-semibold rounded-3xl border border-transparent bg-rose text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  ถัดไป
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex justify-center w-full h-[70vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              กรอกลักษณะภายในรถ
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
              <div className="grid grid-row-3 w-[87%] mb-20 gap-3">
                <div className="grid grid-cols-4 gap-20">
                  <div>
                    <SelectInputWithLabel label="เลขซีซี" name="เลือกเลขซีซี" />
                  </div>
                  <div className="col-span-3">
                    <SelectInputWithLabel
                      label="รุ่นย่อย"
                      name="เลือกรุ่นย่อยรถ"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-20">
                  <div>
                    <SelectInputWithLabel label="ปีรถ" name="เลือกปีรถ" />
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      ระบบเกียร์
                    </label>

                    <div className="flex gap-x-32 mt-5">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hs-radio-group"
                          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-radio-group-1"
                        />
                        <label
                          htmlFor="hs-radio-group-1"
                          className="text-xl text-gray-500 ms-2 dark:text-gray-400"
                        >
                          เกียร์ธรรมดา
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hs-radio-group"
                          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-radio-group-3"
                        />
                        <label
                          htmlFor="hs-radio-group-3"
                          className="text-xl text-gray-500 ms-2 dark:text-gray-400"
                        >
                          เกียร์อัตโนมัติ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-20">
                  <div>
                    <SelectInputWithLabel
                      label="โฉมปีเริ่มต้น"
                      name="เลือกโฉมปี"
                    />
                  </div>
                  <div>
                    <SelectInputWithLabel
                      label="โฉมปีล่าสุด"
                      name="เลือกโฉมปี"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      เลขไมล์ (km)
                    </label>
                    <input
                      type="text"
                      className="py-3 px-4 block w-full border-[#BCBCBC] text-black placeholder:text-[#BCBCBC] rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
                      placeholder="ระบุเลขไมล์"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5  space-x-10">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="py-2 px-3 w-[9vw] h-[50px] font-bold text-lg items-center text-center gap-x-2  font-semibold rounded-3xl border border-transparent bg-dark-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  ย้อนกลับ
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-2 px-3 w-[9vw] h-[50px] items-center gap-x-2 text-lg text-center font-semibold rounded-3xl border border-transparent bg-rose text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  ประเมินราคา
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="flex justify-center w-full h-[60vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              ผลการประเมิน
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
              <div className="absolute bottom-5  space-x-10">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="py-2 px-3 w-[9vw] h-[50px] font-bold text-lg items-center text-center gap-x-2  font-semibold rounded-3xl border border-transparent bg-dark-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  ย้อนกลับ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
