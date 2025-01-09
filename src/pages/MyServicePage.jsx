import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyServicePage = () => {
    const { user, loading } = useContext(AuthContext);
    const [service, setService] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [user?.email]);



    const fetchData = async () => {
        setIsLoading(true); // Start loading
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/my-services/${user?.email}`, { params: { search } });
            setService(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${import.meta.env.VITE_URL}/services/${id}`);
                    fetchData(); // Refresh the service list after deletion.
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error('Error deleting service:', error);
                    Swal.fire({
                        title: "Error!",
                        text: "Could not delete the service.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>TrustLens | My Services</title>
            </Helmet>
            <div className='w-11/12 mx-auto mt-28 mb-16'>
                <div>
                    <h1 className="text-4xl font-bold mt-10">My Services: {service.length}</h1>
                </div>
                <div className='min-h-screen '>

                    {isLoading ? (
                        <div className="flex justify-center mt-20">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table mt-8">
                                <thead>
                                    <tr>
                                        <th className='md:ml-4'>Service</th>
                                        <th>Category</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {service && service.map((myService, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={myService.image}
                                                                alt="Service Thumbnail"
                                                            />
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
                                                <button onClick={() => handleDelete(myService._id)} className="btn btn-ghost text-red-500">
                                                    <MdDeleteForever size={35} />
                                                </button>
                                            </td>
                                            <td>
                                                <Link to={`/updateService/${myService._id}`}>
                                                    <button className="btn btn-ghost text-blue-500">
                                                        <FaRegEdit size={30} />
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default MyServicePage;
