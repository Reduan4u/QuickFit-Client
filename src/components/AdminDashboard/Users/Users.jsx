"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaUserEdit, FaUsers } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;


    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://quick-fit-server.vercel.app/api/v1/Users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])
    const records = users.slice(firstIndex, lastIndex);
    const page = Math.ceil(users.length / recordsPerPage);
    const numbers = [...Array(page + 1).keys()].slice(1)


    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage !== page) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prePage = (e) => {
        e.preventDefault();
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCPage = (id, e) => {
        e.preventDefault();
        setCurrentPage(id);
    };


    return (
        <div className="antialiased font-sans bg-white shadow-xl">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-dashPrimary border-b-2 py-4 text-2xl font-semibold leading-tight flex gap-2 justify-start items-center"><FaUsers></FaUsers>
                            User List</h2>
                    </div>

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full table table-zebra leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            S.No
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Picture
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.map((d, i) => <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td className="">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="rounded-full w-10 h-10">
                                                            <Image
                                                                height={500}
                                                                width={500}
                                                                alt='user'
                                                                objectFit="cover"
                                                                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>{d.name}</td>
                                            <td>{d.email}</td>
                                            <td>{d.role}</td>
                                            <td className="">
                                                <div className="flex justify-start items-center gap-3">
                                                    <button
                                                        className="btn btn-ghost btn-sm bg-red-600">
                                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                                    </button>
                                                    <button
                                                        className="btn btn-ghost btn-sm bg-dashPrimary">
                                                        <FaUserEdit className="text-white"></FaUserEdit>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 5
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        <a href="#" onClick={prePage}><GrPrevious></GrPrevious></a>
                                    </button>
                                    {
                                        numbers.map((n, i) =>
                                        (
                                            <button className={`text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 ${currentPage === n ? 'active' : ''}`} key={i}
                                                style={{ color: currentPage === n ? 'white' : 'inherit', backgroundColor: currentPage === n ? 'orange' : 'inherit', borderRadius: currentPage === n ? '4px' : 'inherit' }}

                                            >
                                                <a href="" onClick={() => changeCPage(n)}>{n}</a>
                                            </button>
                                        ))
                                    }
                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        <a href="#" onClick={nextPage}><GrNext /></a>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;