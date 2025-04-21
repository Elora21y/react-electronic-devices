import React, { use, useState } from 'react';

const Search = ({fetchDevices , handleSearch}) => {
    const devices = use(fetchDevices)
const [search , setSearch] = useState('')

// const filterDevices = devices.filter(device => device.name.toLowerCase().includes(search.toLowerCase()));

// console.log(filterDevices)
    return (
        <div className='text-center m-4 '>
            <form onSubmit={(e) => handleSearch(e, search)}> 
            <label className="input mr-2" >
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                
                <input type="search" required placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search}/>
                
            </label>
            <button type='submit' className="btn btn-primary" >Search</button>
            </form>
            <div>
                {/* {
                    filterDevices.map(user => console.log(user))
                } */}
            </div>
        </div>
    );
};

export default Search;