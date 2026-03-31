
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import Rating from './component/Rating/Rating'
import Tools from './component/Tools/Tools'

function App() {
  const [cart, setCart] = useState([]);
  

  return (
    <>
    <Navbar/>
    <Banner/>
    <Rating/>
    <Tools card={cart} setCard={setCart}/>

    </>
  )
}

export default App
