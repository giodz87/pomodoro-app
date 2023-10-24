import React from "react";
import { useForm } from "react-hook-form";
import closed from "../assets/icon-close.svg";
import { useState } from "react";
export default function InputForm({
  close,
  setClose,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) {
  const handleClose = () => {
    setClose(!close);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { number1, number2, number3 } = data;
    setClose(!close);
  };

  return (
    <div className=" absolute top-12">
      {close ? (
        <section className="flex flex-col  justify-between w-[327px]  bg-[#fff] relative p-[24px]">
          <div className="flex flex-row items-center justify-between mb-[54px]">
            <h1>Settings</h1>
            <img
              src={closed}
              alt=""
              onClick={handleClose}
              className=" cursor-pointer"
            />
          </div>
          <div className=" w-full h-[1px] bg-[#E3E1E1] absolute left-0 top-[73px]"></div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  flex-col justify-between  gap-[8px] mb-[24px]"
          >
            {" "}
            <div className=" text-center mb-[10px] text-[#161932] tetx-[11px] font-[700]">
              <p>TIME (MINUTES)</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-[12px] text-[#1E213F] ">pomodoro</p>
              <input
                type="number"
                className="bg-[#EFF1FA] w-[140px] h-[40px] rounded-[10px]"
                {...register("number1", { min: 0, max: 99 })}
                defaultValue={25}
                onChange={(e) => {
                  setMinutes(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-between ">
              <p className="text-[12px] text-[#1E213F]">short break</p>
              <input
                type="number"
                className="bg-[#EFF1FA] w-[140px] h-[40px] rounded-[10px]"
                {...register("number2", { min: 0, max: 99 })}
                defaultValue={5}
              />
            </div>
            <div className="flex flex-row items-center justify-between ">
              <p className="text-[12px] text-[#1E213F]">long break</p>
              <input
                type="number"
                className="bg-[#EFF1FA] w-[140px] h-[40px] rounded-[10px]"
                {...register("number3", { min: 0, max: 99 })}
                defaultValue={15}
              />
            </div>
          </form>
          <div className="flex flex-col items-center justify-between gap-[24px]">
            <div className=" w-full h-1 bg-[#E3E1E1]"></div>
            <div className="flex flex-col items-center justify-between gap-[18px]">
              <p className="font-bold">FONT</p>
              <ul className="list-none flex flex-row items-center justify-between">
                <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#161932] mx-2 text-[#fff] cursor-pointer">
                  Aa
                </li>
                <li className="flex items-center justify-center  w-[40px] h-[40px]  rounded-full bg-[#EFF1FA] mx-2 text-[#1E213F]">
                  Aa
                </li>
                <li className="flex items-center justify-center  w-[40px] h-[40px] rounded-full bg-[#EFF1FA] mx-2 text-[#1E213F]">
                  Aa
                </li>
              </ul>
            </div>
            <div className=" w-full h-1 bg-[#E3E1E1]"></div>
            <div className="flex flex-col items-center justify-between gap-[18px] mb-[32px]">
              <p className="font-bold">COLOR</p>
              <ul className="list-none flex flex-row items-center justify-between">
                <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F87070] mx-2 ">
                  {" "}
                </li>
                <li className="flex items-center justify-center  w-[40px] h-[40px]  rounded-full bg-[#70F3F8] mx-2 "></li>
                <li className="flex items-center justify-center  w-[40px] h-[40px] rounded-full bg-[#D881F8] mx-2 "></li>
              </ul>
            </div>
            <button
              onClick={onSubmit}
              className="w-[140px] h-[53px] bg-[#F87070] rounded-[27px] text-[#fff] absolute bottom-[-30px] cursor-pointer"
            >
              Apply
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
