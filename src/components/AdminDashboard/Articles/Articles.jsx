"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdOutlineArticle } from "react-icons/md";
import Swal from "sweetalert2";


const Articles = () => {
    //Search
    const [search, setSearch] = useState('');

    const axiosSecure = useAxiosPublic();


    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;


    const { data: articles = [], refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articles');
            return res.data;
        }
    })

    //pagination
    const records = articles.slice(firstIndex, lastIndex);
    const page = Math.ceil(articles.length / recordsPerPage);
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

    const changeCPage = (e, n) => {
        e.preventDefault();
        setCurrentPage(n);
    };



    //Delete User
    const handleDelete = article => {
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

                axiosSecure.delete(`/articles/${article._id}`)
                    .then(res => {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Article deleted succesfully.",
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
                        <div className="flex justify-between">
                            <h1 className="font-bold py-4 uppercase flex gap-2 items-center">
                                <MdOutlineArticle />
                                All Articles ({articles.length})
                            </h1>
                            <Link href='/adminDashboard/add-article'><button className="btn w-28  hover:scale-95 transition-all duration-700 btn-sm border-white text-white bg-transparent rounded-md">
                                Add Article
                            </button></Link>
                        </div>
                        <div className="my-2 flex sm:flex-row flex-col  py-4">
                            <div className="block relative">
                                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <div>
                                    <input onChange={(e) => setSearch(e.target.value)} placeholder="Search by Category"
                                        className="appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-scroll">
                            <table className="w-full whitespace-nowrap">
                                <thead className="bg-black/60">
                                    <th className="text-left py-3 px-2 rounded-l-lg">S.No</th>
                                    <th className="text-left py-3 px-2">Title</th>
                                    <th className="text-left py-3 px-2">Publish Date</th>
                                    <th className="text-left py-3 px-2">Category</th>
                                    <th className="text-left py-3 px-2 rounded-r-lg">Actions</th>
                                </thead>
                                <tbody>
                                    {records.filter((article) => {
                                        return search.toLocaleLowerCase() === '' ? article : article.Category.toLocaleLowerCase().includes(search)
                                    }).map((article, i) => <tr key={i} className="border-b border-gray-700">
                                        <th>{i + 1}</th>
                                        <td className="py-3 px-2">{article.title}</td>
                                        <td className="py-3 px-2">{article.publishDate}</td>
                                        <td className="py-3 px-2">{article.Category}</td>
                                        <td className="py-3 px-2">
                                            <div className="inline-flex items-center space-x-3">
                                                <button
                                                    onClick={() => handleDelete(article)}
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
                                    Showing 1 to 10 of 40 Entries
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
                                                <a href="" onClick={(e) => changeCPage(e, n)}>{n}</a>

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

export default Articles;