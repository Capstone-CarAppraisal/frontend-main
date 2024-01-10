"use client";

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
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      ยี่ห้อ
                    </label>
                    <select
                      id="hs-select-label"
                      className="py-3 px-4 pe-9 block  border-[#BCBCBC] w-full rounded-lg text-sm focus:border-blue-500"
                    >
                      <option>เลือกยี่ห้อรถ</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="px-4">
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      รุ่น
                    </label>
                    <select
                      id="hs-select-label"
                      className="py-3 px-4 pe-9 block w-full border-[#BCBCBC] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                    >
                      <option>เลือกรุ่นรถ</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4">
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      ประเภทรถ
                    </label>
                    <select
                      id="hs-select-label"
                      className="py-3 px-4 pe-9 block  border-[#BCBCBC] w-full rounded-lg text-sm focus:border-blue-500"
                    >
                      <option>เลือกประเภทรถ</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="px-4">
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      สี
                    </label>
                    <select
                      id="hs-select-label"
                      className="py-3 px-4 pe-9 block w-full border-[#BCBCBC] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                    >
                      <option>เลือกสีรถ</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
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
        <div className="flex justify-center w-full h-[60vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              กรอกลักษณะภายในรถ
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
