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
    fontFamily: "Kumbh-Sans",
    letterSpacing: "tracking",
    fontWeight: "font ",
  });

  return (
    <>
      <Timer
        close={close}
        setClose={setClose}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        pomodoro={pomodoro}
        setPomodor={setPomodor}
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
        setElementStyle={setElementStyle}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
      />
      <InputForm
        close={close}
        setClose={setClose}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        pomodoro={pomodoro}
        setPomodor={setPomodor}
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
        setElementStyle={setElementStyle}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
      />
    </>
  );
}

export default App;
