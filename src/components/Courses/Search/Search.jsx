import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div>
            <div className=" py-10 w-[70vw] mx-auto text-right">
                <div className="join rounded-sm">
                    <input className="input input-bordered join-item" placeholder="search..." />
                    <button className="w-14 flex justify-center items-center join-item rounded-r-sm bg-one text-white"><FaSearch></FaSearch></button>
                </div>
            </div>
        </div>
    );
};

export default Search;