import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Card  user='nit' id={23} ImgUrl= 'https://images.unsplash.com/photo-1631856395474-ddfea8b9c1e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'/>

      <Card user='tej' id={23} ImgUrl= 'https://images.unsplash.com/photo-1606898089449-f811a830091f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'/>

       <Card user='harshad' id={39} ImgUrl= 'https://images.unsplash.com/photo-1606898089449-f811a830091f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'/>

    </div>
  )
}

export default App
