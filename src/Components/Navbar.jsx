import React from 'react';

const Navbar = ({ totalCart, price, handleRemoveCart }) => {
    // console.log(totalCart)
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Electric Shop</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="text-xs bg-white p-[2px] rounded-full indicator-item">{totalCart.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold"> {totalCart.length} Items</span>
                                <span className="text-info">Subtotal: ${price}</span>
                                {/* <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div> */}
                                <div>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>View Cart</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box ">
                                           {
                                            totalCart.map((cart,index)=> {
                                                return(
                                                    <div key={index} className="flex justify-between items-center border-b border-b-gray-100 mt-2 p-2">
                                                        <div className="flex gap-4">
                                                        <img src={cart.img} className='w-10'></img>
                                                        <h2>{cart.name}</h2>
                                                        </div>
                                                        <button onClick={()=>handleRemoveCart(cart.id)} className='btn text-red-500'>X</button>
                                                    </div>
                                                )
                                            })
                                           }
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-primary">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;