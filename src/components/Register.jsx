import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = e => {
        setErrorMessage('');
        setError({})

        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, photo, email, password);
        const passValidate = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passValidate.test(password)) {
            setError({ ...error, password: "One UpperCase , One LowerCase & 6 digit " })
            return
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 my-5 p-6 border-2">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>
                    {
                        error.password && (
                            <label className="label text-red-600 italic">
                                {error.password}
                            </label>
                        )
                    }
                    {
                        errorMessage && <p className='text-2xl text-red-500'>{errorMessage}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-[#7883BD] to-[#446DAC] text-white">Create Account</button>
                    </div>
                </form>
                <p className='p-2 text-center font-bold'>Already Have an Account ? <br /> <Link to="/login" className='text-green-500 underline'>Log in</Link></p>
                <hr />
                <div className='my-4 space-y-3'>
                    <div className='btn flex justify-center bg-gradient-to-r from-[#C13F98] to-[#19D3A2]  text-white cursor-pointer' >
                        <button className='flex items-center justify-around gap-5'>
                            <span className='text-red-500 text-xl'><FaGoogle></FaGoogle></span>
                            Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;