import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className='h-full w-80  shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img}alt='Image'></img>
        <RightCardContent id={props.id}tag={props.tag}/>
    </div>
  )
}

export default RightCard