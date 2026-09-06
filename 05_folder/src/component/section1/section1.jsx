import NavBar from './navBar'
import Section1Content from './section1Content'
const 
section1 = (props) => {  
  return (
    <div className='h-screen w-full flex flex-col'>
        <NavBar/>
        <Section1Content users={props.users}/>
    </div>
  )
}

export default 
section1