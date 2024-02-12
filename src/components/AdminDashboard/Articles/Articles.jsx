"use client"
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdOutlineArticle } from "react-icons/md";


const Articles = () => {
    //Search
    const [search,setSearch] = useState('');
    //console.log(search)

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://quick-fit-server.vercel.app/api/v1/articles')
            .then(res => res.json())
            .then(articles => setArticles(articles))
    }, [])
    //console.log(articles)

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

    const changeCPage = (id) => {
        setCurrentPage(id);
    };

    return (
        <div className="antialiased font-sans bg-white shadow-xl">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-dashPrimary border-b-2 py-4 text-2xl font-semibold leading-tight flex gap-2 justify-start items-center"><MdOutlineArticle />Articles</h2>
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
                            <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search by Category"
                                className="appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full table table-zebra leading-normal">
                                <thead className=''>
                                    <tr className="">
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            S.No
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Publish Date
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.filter((article)=>{
                                          return search.toLocaleLowerCase()==='' ?article:article.Category.toLocaleLowerCase().includes(search) 
                                        }).map((article, i) => <tr key={i}>
                                            <th>{i + 1}</th>

                                            <td>{article.title}</td>
                                            <td>{article.publishDate}</td>
                                            <td>{article.Category}</td>
                                            <td className="">
                                                <div className="flex justify-start items-center gap-3">
                                                    <button
                                                        className="btn btn-ghost btn-sm bg-red-600">
                                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                                    </button>
                                                    <button
                                                        className="btn btn-ghost btn-sm bg-dashPrimary">
                                                        <FaEdit className="text-white"></FaEdit>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 10 of 40 Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0 gap-3">
                                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        <a href="#" onClick={prePage}><GrPrevious></GrPrevious></a>
                                    </button>
                                    {
                                        numbers.map((n, i) =>
                                        (
                                            <button className={`text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border${currentPage === n ? 'active' : ''}`} key={i}
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

export default Articles;