import React from 'react';

const Device = ({ device, handleTotalCart }) => {
    // console.log(device)
    return (
        <div >
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={device.img}
                        alt={device.name}
                        className='w-fit h-52' />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div>
                        <h2 className="card-title text-xl font-semibold">{device.name}</h2>
                        <p>Brand : {device.brand} </p>
                        <p>{device.type}</p>
                        </div>

                        <div>
                            <p>Price : ${device.price_usd}</p>
                            <p>Warranty : {device.warranty_years}</p>
                        </div>
                    </div>
                    <p>{device.description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={(e)=>{
                            e.preventDefault()
                            handleTotalCart(device) 
                        }} className="btn btn-primary">Buy Now</button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Device;