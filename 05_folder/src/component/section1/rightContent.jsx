import RightCard from "./RightCard"

const rightContent = (props) => {
  return (
    <div className='h-full w-2/3 overflow-x-auto flex flex-nowrap gap-10 p-6'>
        {props.users.map(function(ele, idx){
           return <RightCard key={idx} id ={idx} img={ele.img} tag={ele.tag}/> 
        })}
    </div>
  )
}

export default rightContent