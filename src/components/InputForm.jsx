import React from "react";
import { useForm } from "react-hook-form";
import closed from "../assets/icon-close.svg";
import { useState, useEffect } from "react";
export default function InputForm({
  close,
  setClose,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  pomodoro,
  setPomodor,
  shortMinutes,
  setShortMinutes,
  count,
  setCount,
  minut,
  setminut,
  runing,
  setRuning,
  elementStyle,
  setElementStyle,
  fontStyle,
  setFontStyle,
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
    setRuning(false);
    setMinutes(minut);
    setCount(minut * 60);
    setSeconds(0);
  };

  useEffect(() => {
    setCount(minut * 60);
  }, [minut]);

  ////////
  const changeElement = (backgroundColor) => {
    let clone = { ...elementStyle };
    clone.backgroundColor = backgroundColor;
    setElementStyle(clone);
  };

  const changeFont = (fontFamily, letterSpacing, fontWeight) => {
    let clon = { ...fontStyle };
    clon.fontFamily = fontFamily;
    clon.letterSpacing = letterSpacing;
    clon.fontWeight = fontWeight;

    setFontStyle(clon);
  };
  console.log(fontStyle.fontFamily);
  return (
    <div className=" absolute top-12">
      {close ? (
        <section className="flex flex-col  justify-between w-[327px]  bg-[#fff] relative p-[24px] rounded-[15px]">
          <div className="flex flex-row items-center justify-between mb-[54px]">
            <h1
              className={` font-[${fontStyle.fontFamily}] font-[700]   text-[20px] text-[#161932]  `}
            >
              Settings
            </h1>
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
            <div
              className={` font-[${fontStyle.fontFamily}]    text-center mb-[10px] text-[#161932] tetx-[11px] font-[Kumbh-Sans]  font-[700]    `}
            >
              <p>TIME (MINUTES)</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p
                className={`font-[${fontStyle.fontFamily}] font-[700] opacity-[0.4] text-[12px] text-[#1E213F]   `}
              >
                pomodoro
              </p>

              <input
                type="number"
                className="bg-[#EFF1FA] w-[140px] h-[40px] rounded-[10px]"
                {...register("number1", { min: 0, max: 99 })}
                defaultValue={minut}
                onChange={(e) => {
                  setMinutes(Number(e.target.value));
                  setminut(Number(e.target.value));
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-between ">
              <p
                className={`font-[${fontStyle.fontFamily}]  font-[700] opacity-[0.4]  text-[12px] text-[#1E213F]`}
              >
                short break
              </p>

              <input
                type="number"
                className="bg-[#EFF1FA] w-[140px] h-[40px] rounded-[10px]"
                {...register("number2", { min: 0, max: 99 })}
                defaultValue={5}
                onChange={(e) => {
                  setMinutes(Number(e.target.value));
                  setminut(Number(e.target.value));
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-between ">
              <p className="font-[Kumbh-Sans]  font-[700] opacity-[0.4]  text-[12px] text-[#1E213F]">
                long break
              </p>
              <input
                type="number"
                className="bg-[#EFF1FA] w-[140px] h-[40px] rounded-[10px]"
                {...register("number3", { min: 0, max: 99 })}
                defaultValue={15}
                onChange={(e) => {
                  setMinutes(Number(e.target.value));
                  setminut(Number(e.target.value));
                }}
              />
            </div>
          </form>
          <div className="flex flex-col items-center justify-between gap-[24px]">
            <div className=" w-full h-1 bg-[#E3E1E1]"></div>
            <div className="flex flex-col items-center justify-between gap-[18px]">
              <p className="font-[Kumbh-Sans]  font-[700] text-[14px] tracking-[4.2px]">
                FONT
              </p>
              <ul className="list-none flex flex-row items-center justify-between">
                <li
                  onClick={() => changeFont("Kumbh-Sans", "-5px", "700")}
                  className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#161932] mx-2 text-[#fff] cursor-pointer font-[Kumbh-Sans] font-[700]"
                >
                  Aa
                </li>
                <li
                  onClick={() => changeFont("Roboto-Slab", "", "700")}
                  className="flex items-center justify-center  w-[40px] h-[40px]  rounded-full bg-[#EFF1FA] mx-2 text-[#1E213F] font-[Roboto-Slab] font-[400] opacity-[0.7] cursor-pointer"
                >
                  Aa
                </li>
                <li
                  onClick={() => changeFont("Space-Mono", "-10px", "400px")}
                  className="flex items-center justify-center  w-[40px] h-[40px] rounded-full bg-[#EFF1FA] mx-2 text-[#1E213F] font-[Space-Mono] font-[700] opacity-[0.7] cursor-pointer"
                >
                  Aa
                </li>
              </ul>
            </div>
            <div className=" w-full h-1 bg-[#E3E1E1]"></div>
            <div className="flex flex-col items-center justify-between gap-[18px] mb-[32px]">
              <p className="font-[Kumbh-Sans]  font-[700] text-[13px] tracking-[4.2px]">
                COLOR
              </p>
              <ul className="list-none flex flex-row items-center justify-between">
                <li
                  onClick={() => changeElement("#F87070")}
                  className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F87070] mx-2 cursor-pointer"
                ></li>
                <li
                  onClick={() => changeElement("#70F3F8")}
                  className="flex items-center justify-center  w-[40px] h-[40px]  rounded-full bg-[#70F3F8] mx-2  cursor-pointer"
                ></li>
                <li
                  onClick={() => changeElement("#D881F8")}
                  className="flex items-center justify-center  w-[40px] h-[40px] rounded-full bg-[#D881F8] mx-2 cursor-pointer "
                ></li>
              </ul>
            </div>
            <button
              onClick={onSubmit}
              className="w-[140px] h-[53px] bg-[#F87070] rounded-[27px] text-[#fff] absolute bottom-[-30px] cursor-pointer font-[Kumbh-Sans]  font-[700] text-[16px]"
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
