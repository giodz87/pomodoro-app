import React from "react";
import logo from "../assets/logo.svg";
import settings from "../assets/icon-settings.svg";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer({
  close,
  setClose,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  pomodoro,
  shortMinutes,
  longMinutes,
  count,
  setCount,
  minut,
  setminut,
  runing,
  setRuning,
  elementStyle,
  fontStyle,
  mode,
  setMode,
}) {
  useEffect(() => {
    if (close == false) {
      const interval = setInterval(() => {
        if (runing) {
          setCount(count - 1);

          if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
          } else {
            if (seconds === 0) {
              setMinutes(minutes - 1);

              setSeconds(59);
            } else {
              setSeconds(seconds - 1);
            }
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [minutes, seconds, runing]);

  const formattedTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  const oupenMenu = () => {
    setClose(!close);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-[45px]  w-[375px] ">
      <img src={logo} alt="" />
      <div className=" flex flex-row items-center justify-between w-[327px] h-[63px] bg-[#161932] rounded-[31.5px]">
        <div className={` cursor-pointer text-xs text-[#1E213F] font-[700] `}>
          <button
            onClick={() => {
              setMinutes(pomodoro);
              setminut(pomodoro);
              setSeconds(0);
              setCount(pomodoro * 60);
              setMode("pomodoro");
            }}
            className={
              mode == "pomodoro"
                ? `   text-[#D7E0FF]  bg-[${elementStyle.backgroundColor}] rounded-[26.5px] text-xs w-[105px] h-[48px]  ${fontStyle.font}   cursor-pointer `
                : ` opacity-[0.4]  text-xs w-[105px] text-[#D7E0FF;] ${fontStyle.font} `
            }
          >
            pomodoro
          </button>
        </div>

        <button
          className={
            mode == "short"
              ? `    text-[#D7E0FF]  bg-[${elementStyle.backgroundColor}] rounded-[26.5px] text-xs w-[105px] h-[48px]  ${fontStyle.font}  cursor-pointer `
              : ` opacity-[0.4]  text-xs w-[105px] text-[#D7E0FF;]`
          }
          onClick={() => {
            setMinutes(shortMinutes);
            setminut(shortMinutes);
            setSeconds(0);
            setCount(shortMinutes * 60);
            setMode("short");
          }}
        >
          short break
        </button>
        <button
          onClick={() => {
            setMinutes(longMinutes);
            setminut(longMinutes);
            setSeconds(0);
            setCount(longMinutes * 60);
            setMode("long");
          }}
          className={
            mode == "long"
              ? `    text-[#D7E0FF]  bg-[${elementStyle.backgroundColor}] rounded-[26.5px] text-xs w-[105px] h-[48px]  ${fontStyle.font}  cursor-pointer `
              : ` opacity-[0.4]  text-xs w-[105px] text-[#D7E0FF;]`
          }
        >
          long break
        </button>
      </div>

      <div>
        <div
          style={{
            width: "300px",
            height: "300px",
            position: "relative",
            borderRadius: "50%",

            backgroundImage:
              "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
            boxShadow:
              " 50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              width: "268px",
              height: "268px",
              backgroundColor: "#161932",
              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
            }}
          >
            <div
              label="Square linecaps"
              className=" flex flex-col justify-center items-center relative  "
            >
              <CircularProgressbar
                className={` ${fontStyle.font} ${fontStyle.letterSpacing} font-[${fontStyle.fontWeight}]`}
                value={(count / (minut * 60)) * 100}
                text={formattedTime}
                strokeWidth={"4"}
                styles={buildStyles({
                  pathColor: elementStyle.backgroundColor,
                  fontSize: "18px",
                  textSize: "30px",
                  textColor: "#fff",
                  trailColor: "  #161932",
                })}
              />

              {(count / (minut * 60)) * 100 > 0 ? (
                runing ? (
                  <button
                    onClick={() => {
                      setRuning(false);
                    }}
                    className={`${fontStyle.font}   text-[14px] font-[700] tracking-[13px] absolute bottom-12 `}
                  >
                    PAUSE
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setRuning(true);
                    }}
                    className={`${fontStyle.font} text-[14px] font-[700] tracking-[13px] absolute bottom-12 `}
                  >
                    START
                  </button>
                )
              ) : (
                <button
                  onClick={() => {
                    setMinutes(pomodoro);
                    setCount("60");
                  }}
                  className={`${fontStyle.font}  text-[14px] font-[700] tracking-[13px] absolute bottom-12 `}
                >
                  RESTART
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <img
        className="mt-[35px] cursor-pointer"
        src={settings}
        alt=""
        onClick={oupenMenu}
      />
    </div>
  );
}
