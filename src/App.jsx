import { useState } from "react";
import InputForm from "./components/InputForm";
import Timer from "./components/Timer";

function App() {
  const [close, setClose] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [pomodoro, setPomodor] = useState(25);
  const [shortMinutes, setShortMinutes] = useState(5);
  const [longMinutes, setLongMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [minut, setminut] = useState(25);
  const [count, setCount] = useState(minut * 60);
  const [runing, setRuning] = useState(false);
  const [elementStyle, setElementStyle] = useState({
    backgroundColor: "#F87070",
  });
  const [fontStyle, setFontStyle] = useState({
    font: "kumbh",

    letterSpacing: "tracking",
    fontWeight: "font ",
  });
  const [mode, setMode] = useState("pomodoro");
  const [font, setFont] = useState("akumbh");
  const [bgColor, setBgColor] = useState("red");
  return (
    <div div className="flex flex-col items-center justify-center">
      <Timer
        close={close}
        setClose={setClose}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        pomodoro={pomodoro}
        shortMinutes={shortMinutes}
        setShortMinutes={setShortMinutes}
        longMinutes={longMinutes}
        setLongMinutes={setLongMinutes}
        count={count}
        setCount={setCount}
        minut={minut}
        setminut={setminut}
        runing={runing}
        setRuning={setRuning}
        elementStyle={elementStyle}
        fontStyle={fontStyle}
        mode={mode}
        setMode={setMode}
      />
      <InputForm
        close={close}
        setClose={setClose}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setPomodor={setPomodor}
        shortMinutes={shortMinutes}
        longMinutes={longMinutes}
        setCount={setCount}
        minut={minut}
        setminut={setminut}
        setRuning={setRuning}
        elementStyle={elementStyle}
        setElementStyle={setElementStyle}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        font={font}
        setFont={setFont}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
    </div>
  );
}

export default App;
