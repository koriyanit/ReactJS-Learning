import { useState } from "react";

const App = () => {


  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])


  const submitHandle = (e) => {
    e.preventDefault();
    console.log('form submited successfully');
    console.log(title, details);
    let copyTask = [...task];
    copyTask.push({title, details})
    console.log(copyTask);
    setTask(copyTask)
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandle(e);
      }}
        className="flex gap-4 lg: 1/2 flex-col items-start p-10">
        {/*First Input*/}
          <input
            onChange={ (e)=> {
               setTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full font-medium py-2 border-2 rounded"
          />
           {/* Second Input */}
          <textarea
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
            type="text"
            className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 rounded"
            placeholder="Write Details"
          />
          <button 
            className=" h-10 w-10 w-full active:scale-95 active:bg-gray-400 text-white px-5 py-2 border-2 rounded">
              Add Note
          </button>
    
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
          <h1 className="text-xl font-bold">Notes</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
             {
              task.map(function(elem, idx) {
                return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                  <div>
                  <h3 className='leading-tight text-lg font-bold'>
                    {elem.title}
                  </h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>
                    {elem.details}
                  </p>
                  </div>
                  <button onClick={(idx)=>{
                      deleteNote(idx)
                  }
                  }
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
                  >
                      Delete
                  </button>
                </div>
              })
             }
             
          </div>
      </div>
    </div>
  )
}

export default App