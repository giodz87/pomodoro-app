import { useState } from "react";
import InputForm from "./components/InputForm";
import Timer from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);
  const [close, setClose] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  return (
    <>
      <Timer
        close={close}
        setClose={setClose}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      <InputForm
        close={close}
        setClose={setClose}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
      />
    </>
  );
}

export default App;
