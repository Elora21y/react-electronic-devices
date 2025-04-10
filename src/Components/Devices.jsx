
import Device from './Device';

const Devices = ({ devices, handleTotalCart }) => {
   
    // console.log(devices)
    return (
        <div className="">
            <h1 className='text-2xl font-bold'>Total Products : {devices.length}</h1>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px_,_1fr))] gap-5 p-5 auto-cols-fr'>
            {
                devices.map(device => <Device key={device.id} device={device} handleTotalCart={handleTotalCart}></Device>)
            }
        </div>
        </div>
    );
};

export default Devices;