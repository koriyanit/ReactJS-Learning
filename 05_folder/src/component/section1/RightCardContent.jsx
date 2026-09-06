
const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='text-2xl font-bold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, architecto?
                </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium px-6 py-3 rounded-full'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent