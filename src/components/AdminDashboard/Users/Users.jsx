"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import Swal from "sweetalert2";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const axiosSecure = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/Users');
            return res.data;
        }
    })



    const records = users.slice(firstIndex, lastIndex);
    const page = Math.ceil(users.length / recordsPerPage);
    const numbers = [...Array(page + 1).keys()].slice(1)


    const nextPage = () => {
        if (currentPage !== page) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCPage = (id) => {
        setCurrentPage(id);
    };

    //Make Admin
    const handleMakeAdmin = user => {
        //console.log(user)

    }



    //Delete User
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User deleted succesfully.",
                                icon: "success"
                            });
                        
                    })
            }
        });
    }



    return (
        <div className="antialiased w-full mx-auto text-slate-300 relative py-4">
            <div className="my-10 px-2">
                <div id="content" className="bg-[#182237] col-span-9 rounded-lg p-6">
                    <div id="last-users">
                        <h1 className="font-bold py-4 uppercase flex gap-2 items-center">
                            <FaUsers></FaUsers>
                            Total User ({users.length})
                        </h1>
                        <div className="overflow-x-scroll">
                            <table className="w-full whitespace-nowrap">
                                <thead className="bg-black/60">
                                    <th className="text-left py-3 px-2 rounded-l-lg">S.No</th>
                                    <th className="text-left py-3 px-2">Picture</th>
                                    <th className="text-left py-3 px-2">Name</th>
                                    <th className="text-left py-3 px-2">Email</th>
                                    <th className="text-left py-3 px-2">Role</th>
                                    <th className="text-left py-3 px-2 rounded-r-lg">Actions</th>
                                </thead>
                                <tbody>
                                    {records.map((user, i) =>
                                        <tr key={i} className="border-b border-gray-700">
                                            <td className="py-3 px-2">{i + 1}</td>
                                            <td className="py-3 px-2 font-bold">
                                                <div className="inline-flex space-x-3 items-center">
                                                    <span><Image
                                                        width={500}
                                                        height={500}
                                                        alt="profile"
                                                        className="rounded-full w-8 h-8" src="https://source.unsplash.com/240x320/?portrait?0" /></span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-2">{user.name}</td>
                                            <td className="py-3 px-2">{user.email}</td>
                                            <td className="py-3 px-2">
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                >{user.role}
                                                </button>
                                            </td>
                                            <td className="py-3 px-2">
                                                <div className="inline-flex items-center space-x-3">
                                                    <button href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user)}
                                                        href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-white">
                                    Showing 1 to 5
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0 gap-3">
                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        <a href="#" onClick={prePage}><GrPrevious></GrPrevious></a>
                                    </button>
                                    {
                                        numbers.map((n, i) =>
                                        (
                                            <button className={`text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border${currentPage === n ? ' active' : ''}`} key={i}
                                                style={{ color: currentPage === n ? 'black' : 'inherit', backgroundColor: currentPage === n ? 'white' : 'inherit', borderRadius: currentPage === n ? '0px' : 'inherit' }}

                                            >
                                                <a href="" onClick={() => changeCPage(id)}>{n}</a>

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