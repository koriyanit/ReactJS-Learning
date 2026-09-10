import { Link } from "react-router-dom"

const Navbar = () => {
  return (
     <div  className="flex items-center justify-between px-10 py-5 bg-[rgb(10,117,146)]">
            <h3>Sheryians</h3>
            <div className="flex items-center gap-10">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
  )
}

export default Navbar