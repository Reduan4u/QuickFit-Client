import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div>
            <div className="bg-[#F8F6F4] w-[70vw] p-5 mx-auto my-10 md:my-20">
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="search..." />
                    <button className="w-14 flex justify-center items-center join-item rounded-r-lg bg-black text-white"><FaSearch></FaSearch></button>
                </div>
            </div>
        </div>
    );
};

export default Search;