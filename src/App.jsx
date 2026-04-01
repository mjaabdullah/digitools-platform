
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
import Workflow from './component/Workflow/Workflow'

function App() {
  const [cart, setCart] = useState([]);
  const [currentTab, setCurrentTab] = useState('Products');

  return (
    <>
    <Navbar cart={cart} setCurrentTab={setCurrentTab}/>
    <Banner/>
    <Rating/>
    <Tools cart={cart} setCart={setCart} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    <Steps/>
    <Pricing/>
    <Workflow/>
    <Footer/>
    <ToastContainer />

    </>
  )
}

export default App
