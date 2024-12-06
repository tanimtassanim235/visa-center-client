import React from 'react';

const AddVisa = () => {
    return (
        <div className='my-12'>
            <div className="md:p-3 bg-gradient-to-r from-[#65a9ee] to-[#43cea2] w-full max-w-lg mx-auto shrink-0 shadow-2xl">
                <form >
                    {/* first row */}
                    <div className='flex gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;