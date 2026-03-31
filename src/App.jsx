
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
    <Navbar cart={cart} />
    <Banner/>
    <Rating/>
    <Tools cart={cart} setCart={setCart}/>

    </>
  )
}

export default App
