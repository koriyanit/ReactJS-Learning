const App = () => {

  const submitHandle = (e) => {
    e.preventDefault();
    console.log('form submited successfully');
    
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandle(e)
      }}
        className="flex gap-4 lg: 1/2 flex-col items-start p-10">
       
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full font-medium py-2 border-2 rounded"
          />
          <textarea
            type="text"
            className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 rounded"
            placeholder="Write Details"
          />
          <button className=" h-10 w-10 w-full text-white px-5 py-2 rounded">Add Note</button>
    
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
          <h1 className="text-xl font-bold"> Your Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
              <div className="h-52 w-52 rounded-2xl bg-white"></div>
              <div className="h-52 w-52 rounded-2xl bg-white"></div>
              <div className="h-52 w-52 rounded-2xl bg-white"></div>
              <div className="h-52 w-52 rounded-2xl bg-white"></div>
          </div>
      </div>
    </div>
  )
}

export default App