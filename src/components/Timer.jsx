import React from "react";
import logo from "../assets/logo.svg";
import settings from "../assets/icon-settings.svg";
import { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer({
  close,
  setClose,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) {
  const minuteRef = useRef(minutes);

  const [runing, setRuning] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (runing) {
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
  }, [minutes, seconds, runing]);

  const formattedTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  const oupenMenu = () => {
    setClose(!close);
  };
  console.log(minutes);
  return (
    <div className="flex flex-col items-center justify-between gap-[45px]">
      <img src={logo} alt="" />
      <div className=" flex flex-row items-center justify-between w-[327px] h-[63px] bg-[#161932] rounded-[31.5px]">
        <button className=" cursor-pointer text-xs text-[#1E213F] font-[700] w-[105px] h-[48px] rounded-[26.5px] bg-[#D881F8] flex items-center justify-center ml-2">
          pomodoro
        </button>
        <p className="mr-[15px] text-[#D7E0FF] text-xs  opacity-40">
          short break
        </p>
        <p className="mr-[24px] text-[#D7E0FF] text-xs  opacity-40">
          long break
        </p>
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
              className=" flex flex-col justify-center items-center relative "
            >
              <CircularProgressbar
                value={minutes * 60}
                text={formattedTime}
                strokeWidth={"5"}
                styles={buildStyles({
                  fontSize: "18px",
                  textSize: "30px",
                  pathColor: `#D881F8`,
                  textColor: "#fff",
                  trailColor: "  #161932",
                })}
              />

              {runing ? (
                <button
                  onClick={() => {
                    setRuning(false);
                  }}
                  className=" text-[14px] font-[400] tracking-[13px] absolute bottom-12"
                >
                  PAUSE
                </button>
              ) : (
                <button
                  onClick={() => {
                    setRuning(true);
                  }}
                  className=" text-[14px] font-[400] tracking-[13px] absolute bottom-12"
                >
                  START
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
