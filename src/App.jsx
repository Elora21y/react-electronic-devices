
import { Suspense, useEffect, useState ,use } from 'react'
import './App.css'
import Devices from './Components/Devices'
import Navbar from './Components/Navbar'
import { addCart, getCart } from './Utilities/localStorage'
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';

const fetchDevices = fetch('device.json').then(res => res.json())

function App() {
  const devices = use(fetchDevices)

  const [totalCart , setTotalCart] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(()=>{
    const storedCartId = getCart()
    console.log(storedCartId ,  devices)
    
  },[devices])

  function handleTotalCart(device){
    // console.log(device)
    setTotalCart([...totalCart , device])
    handlePrice(device.price_usd)

    toast("Wow so easy!");

    //save the device id in the storage
    addCart(device.id)
  }
  // console.log(totalCart.length)

  const handlePrice = (dollar) =>{
    setPrice(price + dollar)
  }

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar totalCart={totalCart} price={price}> </Navbar>
      <Devices handleTotalCart={handleTotalCart} devices={devices}></Devices>
      <ToastContainer />
      </Suspense>
    </>
  )
}

export default App
