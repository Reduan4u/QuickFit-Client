"use client"
import { FaUsers } from "react-icons/fa";


const Request = async () => {
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/adminDashboard/trainerRequest", {
        cache: "no-store"
      });
      const data = await res.json();
      console.log(data)

      return (
        <div className="antialiased w-full mx-auto text-slate-300 relative py-4">
            <div className="my-10 px-2">
                <div id="content" className="bg-[#182237] col-span-9 rounded-lg p-6">
                    <div id="last-users">
                        <h1 className="font-bold py-4 uppercase flex gap-2 items-center">
                            <FaUsers></FaUsers>
                            Total  ({data.length})
                        </h1>
                        <div className="overflow-x-scroll">
                            <table className="w-full whitespace-nowrap">
                                <thead className="bg-black/60">
                                    <th className="text-left py-3 px-2 rounded-l-lg">S.No</th>
                                    <th className="text-left py-3 px-2">User Name</th>
                                    <th className="text-left py-3 px-2">Trainer Name </th>
                                    <th className="text-left py-3 px-2">Trainer Email</th>
                                    <th className="text-left py-3 px-2"> Duration</th>
                                    <th className="text-left py-3 px-2 rounded-r-lg">specialization</th>
                                </thead>
                                <tbody>
                                    {data.map((user, i) =>
                                        <tr key={i} className="border-b border-gray-700">
                                            <td className="py-3 px-2">{i + 1}</td>
                                          
                                            <td className="py-3 px-2">{user?.name}</td>
                                            <td className="py-3 px-2">{user?.userName}</td>
                                            <td className="py-3 px-2">{user?.userEmail}</td>
                                            <td className="py-3 px-2">{user?.days}</td>
                                            <td className="py-3 px-2">{user?.specialization}</td>
                                            
                                            
                                        </tr>
                                    )}
                                </tbody>
                            </table>


                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

   
};

export default Request;