
import { useEffect, useState } from 'react'

const App = () => {


  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log('Effect running....');

  }, [a, b])
  

  function aChanging() {
    setA(a+1);
  }

  function bChanging() {
    setB(b+1)
  }

  return (
    <div>
        <h1>
          A value {a}
        </h1>
        <button className='h-20 w-20 bg-gray-500 ' onClick={aChanging} >A</button>
        <h1 >
          B value {b}
        </h1>
        <button className='h-20 w-20 bg-gray-400 ' onClick={bChanging} >B</button>
    </div>
  )
}

export default App