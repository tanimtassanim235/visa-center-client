import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleSignIn, setUser } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();

    const navigate = useNavigate();

    //.log(location.state);
    const handleLogin = (e) => {
        e.preventDefault()
        setErrorMessage('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user)
                toast.success("Successfully Log in !", {
                    position: "top-right"
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }

    // google login
    const handleGoogle = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user)
                toast.success("Successfully Log in With Google !", {
                    position: "top-right"
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })

    }
    return (
        <>
            <div className="card bg-base-500 w-11/12 max-w-4xl  mx-auto mt-4  my-12">
                <form className="card-body px-12 border-2 rounded-xl" onSubmit={handleLogin} >
                    <h3 className='text-xl font-bold mb-4'>Log in</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <p className="label-text-alt link link-hover">Forgot password?</p>
                        </label>
                    </div>
                    {
                        errorMessage && <p className='text-red-500 italic'>{errorMessage}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-[#B97AEB] to-[#41BE72]  text-white font-bold">Login</button>
                    </div>
                </form>
                <p className='p-2 text-center font-bold'>Donot Have an Account ? <br /> <Link to="/register" className='text-yellow-500 underline'>Create an account</Link></p>
                <hr />
                <div className='my-4 space-y-3'>
                    <div className='btn flex justify-center  bg-gradient-to-r from-[#C13F98] to-[#19D3A2]  text-white cursor-pointer' onClick={handleGoogle}>
                        <button className='flex items-center justify-around gap-5'>
                            <span className='text-red-500 text-xl'><FaGoogle></FaGoogle></span>
                            Continue With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;