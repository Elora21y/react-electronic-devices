/**
 * 1. getItem
 * 2. addItem
 * 3. SetItem
 */

const getCartFromLocalStorage = ()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        const convertToJsonData = JSON.parse(storedCartString)
        return convertToJsonData
    }
   else{
    return []
   }
}

const saveCartToLocalStorage = (cart) =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)

}

const addItemToCartLocalStorage = (id) =>{
    const cart = getCartFromLocalStorage ();
    // saveCartToLocalStorage(cart.push(id))
    const newCart = [...cart,id]
    saveCartToLocalStorage(newCart)
}

const removeItemFromLocalStorage = (id) =>{
    const storeCart = getCartFromLocalStorage()
    const remaining = storeCart.filter(cartId => cartId !== id)
    saveCartToLocalStorage(remaining)
}

export {
    getCartFromLocalStorage as getCart,
    saveCartToLocalStorage as saveCart,
    addItemToCartLocalStorage as addCart,
    removeItemFromLocalStorage as removeCart
}