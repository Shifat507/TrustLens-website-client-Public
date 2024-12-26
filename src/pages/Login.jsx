import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registrationLottie from '../assets/registration-lottie.json';
// import AuthContext from '../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import axios from 'axios';
import AuthContext from '../AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const [firebaseError, setFirebaseError] = useState('');
    const { userLogin, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const formLocation = location.state || '/'
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const googleLogin = () => {
        handleGoogleSignIn();
        navigate('/')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = { email, password };
        // console.log(userInfo);


        userLogin(email, password)
            .then(async res => {
                // console.log(res.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                // console.log('Error: ', error.message);
                setError('Login failed. Invalid email or password');
            })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>TrustLens | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registrationLottie} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl font-bold mx-auto my-5">Login Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt text-base-500">Do not have account? <span className='underline'><Link to='/register'>Register Now</Link></span></p>
                            </label>
                            {firebaseError && (
                                <label className="label">
                                    <p className="label-text-alt text-red-500">{firebaseError}</p>
                                </label>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login Now</button>
                        </div>
                    </form>
                    <div className='divider'>or</div>
                    <div className='flex mx-auto mb-4'>
                        <button onClick={googleLogin} className='btn btn-wide bg-slate-500 text-white hover:text-black'><FcGoogle size={20} /> Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;