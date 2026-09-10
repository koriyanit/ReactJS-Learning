import { Route, Routes } from "react-router-dom"
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './component/Navbar'
import About from './pages/About'


const App = () => {
  return (
    <div className="h-full w-full " >
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App