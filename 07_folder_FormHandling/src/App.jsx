import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('amna')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submited succesfully');
  }
  return (
    <div>
      <form onSubmit= {
        (e)=>{
          handleSubmit(e);
        }
      }>
        <input type="text" placeholder='Enter your name' value={title}
        onChange={(e)=>{
          setTitle (e.target.value)
        }}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App