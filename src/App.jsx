
import { Suspense, useEffect, useState  } from 'react'
import './App.css'
import Devices from './Components/Devices'
import Navbar from './Components/Navbar'
import { addCart, getCart, removeCart } from './Utilities/localStorage'
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';

const fetchDevices = fetch('device.json').then(res => res.json())

function App() {

const [devices , setDevices] = useState([])
  const [totalCart , setTotalCart] = useState([])
  const [price, setPrice] = useState(0)
  // const [product , setProduct] = useState([])

  useEffect(()=>{
    const storedCartIds = getCart()
    // console.log(storedCartId ,  devices)
    const storeCart =[]
    for(const id of storedCartIds){
      // console.log(id)
      const cartDevice = devices.find(device => device.id === id)
      if(cartDevice){
        storeCart.push(cartDevice)
      }
    }
    // console.log('stored cart', storeCart)
    setTotalCart(storeCart)
    
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

  const handleRemoveCart = (id) =>{
    // console.log(id)
    const remaining = totalCart.filter(cart => cart.id !== id)
    setTotalCart(remaining)
    // console.log(remaining)

    removeCart(id)
  }

  const handlePrice = (dollar) =>{
    setPrice(price + dollar)
  }

// const handleProduct = (prct) =>{
//   setProduct([...product,prct])
// }
// // console.log(product)

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar  totalCart={totalCart} price={price} handleRemoveCart={handleRemoveCart}> </Navbar>
      <Devices setDevices={setDevices} fetchDevices={fetchDevices} handleTotalCart={handleTotalCart}  ></Devices>
      <ToastContainer />
      </Suspense>
    </>
  )
}

export default App
