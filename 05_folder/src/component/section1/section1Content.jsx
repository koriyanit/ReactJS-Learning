
import LeftContent from './leftContent'
import RightContent from './rightContent'
const section1Content = (props) => {
  return (
    <div className='px-18 py-3 flex-1 min-h-0 flex items-center justify-between gap-8'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default section1Content