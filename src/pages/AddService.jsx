import { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../AuthContext/AuthContext'
import Swal from 'sweetalert2'

const AddService = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const company = form.company.value;
        const website = form.website.value;
        const email = form.email.value;
        const date = startDate;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;

        const formData = { image, title, company, website, email, date, category, price, description };

        console.log(formData);

        //make a post req
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_URL}/add-service`, formData);
            // console.log('service added:', data);
            Swal.fire({
                title: "New Service Added",
                icon: "success",
                draggable: true
              });
            form.reset();
            navigate('/services')
        }
        catch (error) {
            console.error('Failed to add service:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please Try Again",
                
              });
        }
    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg '>
                    <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                        Add A Service
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
                            <div>
                                <label className='text-gray-700 ' htmlFor='service_image'>
                                    Service Image Url
                                </label>
                                <input
                                    id='image'
                                    name='image'
                                    placeholder='service image url'
                                    type='url'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='service_title'>
                                    Service Title
                                </label>
                                <input
                                    id='title'
                                    name='title'
                                    placeholder='service title'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='company'>
                                    Company Name
                                </label>
                                <input
                                    id='company'
                                    name='company'
                                    placeholder='company name'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='website'>
                                    Website
                                </label>
                                <input
                                    id='website'
                                    name='website'
                                    placeholder='website address'
                                    type='url'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>


                            <div>
                                <label className='text-gray-700 ' htmlFor='emailAddress'>
                                    Email Address
                                </label>
                                <input
                                    id='emailAddress'
                                    type='email'
                                    name='email'
                                    defaultValue={user?.email}
                                    disabled={true}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700'>Date</label>

                                {/* Date Picker Input Field */}
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700 ' htmlFor='category'>
                                    Category
                                </label>
                                <select
                                    name='category'
                                    id='category'
                                    className='border p-2 rounded-md'
                                >
                                    <option  value=''>Select Category</option>
                                    <option value='Event Planning'>Event Planning</option>
                                    <option value='Business Services'>Business Services</option>
                                    <option value='Health & Wellness'>Health & Wellness</option>
                                    <option value='Restaurants & Cafes'>Restaurants & Cafes</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='price'>
                                    Price
                                </label>
                                <input
                                    id='price'
                                    name='price'
                                    type='number'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>


                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                Add Service
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddService;