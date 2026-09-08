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
        className="flex gap-4  flex-col justify-between items-start p-10">
       
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
          <button className="bg-white w-full text-black px-5 py-2 rounded"></button>
    
      </form>

      <div >
          <div className="h-32 w-32 rounded-2xl bg-white">

          </div>
      </div>
    </div>
  )
}

export default App