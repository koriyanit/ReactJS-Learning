
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
                    <button className={`${props.color} text-white font-medium px-7 py-3 rounded-full`}>{props.tag}</button>
                    <button className={`${props.color} text-black font-medium px-6 py-3 rounded-full`}></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
           