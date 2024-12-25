import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyServicePage = () => {
    const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);

    useEffect(() => {
        fetchData();
    }, [user?.email]);

    const fetchData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_URL}/my-services/${user?.email}`);
        setService(data);

    };
    console.log(service);
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-4xl font-bold'>My Services</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Service</th>
                                <th>Category</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                service && service.map((myService, idx) => <tr key={idx}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={myService.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myService.title}</div>
                                                <div className="text-sm opacity-50">{myService.company}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{myService.category}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost text-red-500"><MdDeleteForever size={35} /></button>
                                    </td>
                                    <td>
                                        <Link to={`/updateService/${myService._id}`}><button className="btn btn-ghost text-blue-500"><FaRegEdit size={30} /></button></Link>
                                    </td>
                                </tr>)

                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyServicePage;