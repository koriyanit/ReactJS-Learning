import { useState } from "react"

const App = () => {

  let [num, setNum] = useState(0);

 let IncreamentNum = () => {
    setNum(num + 1);
  }

  let DecreamentNum = () => {
    setNum(num - 1);
  }

  let JumpBy5 = () => {
    setNum(num + 5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncreamentNum}>Increament</button>
      <button onClick={DecreamentNum}>Decreament</button>
      <button onClick={JumpBy5}>Jump by 5</button>
    </div>
  )
}

export default App