import { useEffect, use, useState } from "react";
import Device from "./Device";
import Search from "./Search";

const Devices = ({ handleTotalCart, fetchDevices, setDevices }) => {
  const devices = use(fetchDevices);
//   const [searchDevice, setSearchDevice] = useState(devices);

//   const handleSearch = (e, text) => {
//     e.preventDefault();
//     console.log(text);
//   };

  useEffect(() => {
    setDevices(devices);
  }, [devices, setDevices]);
  // console.log(devices)
  return (
    <div className="">
          {/* <Search handleSearch={handleSearch}></Search> */}
      <h1 className="text-2xl font-bold">Total Products : {devices.length}</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px_,_1fr))] gap-5 p-5 auto-cols-fr">
        {devices.map((device) => (
          <Device
            key={device.id}
            device={device}
            handleTotalCart={handleTotalCart}
          ></Device>
        ))}
      </div>
    </div>
  );
};

export default Devices;
