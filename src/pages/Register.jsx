import React, { useContext, useState } from 'react';
import { Link, Links, useNavigate } from 'react-router-dom';
import registrationLottie from '../assets/registration-lottie.json';
import Lottie from 'lottie-react';
import AuthContext from '../AuthContext/AuthContext';
import { Helmet } from 'react-helmet-async';
// import AuthContext from '../context/AuthContext/AuthContext';

const Register = () => {
    const [error, setError] = useState('');
    const [firebaseError, setFirebaseError] = useState('');
    const { createUser, setUser, userUpdateData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setFirebaseError('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photo.value;

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setError('Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character.');
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const user = res.user;
                user.displayName = name;
                user.photoURL = photoURL;

                setUser(user);
                userUpdateData({
                    displayName: name, photoURL: photoURL
                })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => {

                    })
            })
            .catch(err => {
                console.log(err.message);
                setFirebaseError(err.message);
            })

    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>TrustLens | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registrationLottie} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl font-bold mx-auto my-5">Register Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {error && (
                                <label className="label">
                                    <p className="label-text-alt text-red-500">{error}</p>
                                </label>
                            )}
                            {firebaseError && (
                                <label className="label">
                                    <p className="label-text-alt text-red-500">{firebaseError}</p>
                                </label>
                            )}
                        </div>
                        <p>Already have an account ? <span className='text-blue-900'><Link to='/login'>Login Now</Link></span></p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
