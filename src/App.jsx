
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Pricing from './component/Pricing/Pricing'
import Rating from './component/Rating/Rating'
import Steps from './component/Steps/Steps'
import Tools from './component/Tools/Tools'

function App() {
  const [cart, setCart] = useState([]);
  

  return (
    <>
    <Navbar cart={cart} />
    <Banner/>
    <Rating/>
    <Tools cart={cart} setCart={setCart}/>
    <Steps/>
    <Pricing/>
    <Footer/>
    <ToastContainer />

    </>
  )
}

export default App
