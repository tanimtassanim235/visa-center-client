import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider';
import { Timestamp } from 'firebase/firestore/lite';

const AddVisa = () => {

    const { user } = useContext(AuthContext);

    const [selectedDoc, setSelectedDoc] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;

        // Update state based on checkbox selection
        if (e.target.checked) {
            setSelectedDoc((prev) => [...prev, value]);
        } else {
            setSelectedDoc((prev) => prev.filter((item) => item !== value));
        }
    };

    const handleAddVise = (event) => {
        event.preventDefault()
        const form = event.target;
        const req_doc = selectedDoc;
        const createdEmail = user?.email;
        const name = form.name.value;
        const image = form.imageurl.value;
        const visa = form.visa.value;
        const time = form.time.value;
        const age = form.age.value;
        const description = form.description.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const method = form.method.value;

        // { timestamps: true }
        const newVisa = { name, image, visa, time, age, description, fee, validity, method, req_doc, createdEmail, Timestamp: true }
        //.log(newVisa);
        //.log(req_doc);

        fetch('https://visa-navigator-server-tau.vercel.app/visa', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => res.json())
            .then(data => {
                //.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Done',
                        text: 'New Added Visa Done',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className='my-12'>
            <div className="p-6 bg-gradient-to-r from-[#65a9ee] to-[#43cea2] w-full max-w-lg mx-auto shrink-0 shadow-2xl rounded-xl">
                <form onSubmit={handleAddVise}>
                    {/* first row */}
                    <div className='flex gap-4 '>
                        <div className="form-control overflow-hidden">
                            <label className="label">
                                <span className="label-text text-white">Country name</span>
                            </label>
                            <input type="text" name='name' placeholder="Country Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Country image</span>
                            </label>
                            <input type="text" name='imageurl' placeholder="Country image URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Visa_type</span>
                            </label>

                            <select className="input input-bordered select select-primary w-full" name="visa" id="visa">
                                <option value="student">Student visa</option>
                                <option value="tourist">Tourist visa</option>
                                <option value="official">Official visa</option>
                            </select>
                        </div>
                        <div className="form-control grow">
                            <label className="label">
                                <span className="label-text text-white">Processing_time</span>
                            </label>
                            <input type="text" name='time' placeholder="Processing_time" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white" >Required_documents</span>
                        </label>
                        <div className="form-control">
                            <label className="label justify-start gap-3 cursor-pointer">
                                <input type="checkbox" className="checkbox" onChange={handleCheckboxChange} value="Valid Passport" />
                                <span className="label-text">Valid passport</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label justify-start gap-3 cursor-pointer">
                                <input type="checkbox" className="checkbox" value="Visa Form" onChange={handleCheckboxChange} />
                                <span className="label-text">Visa application form</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label justify-start gap-3 cursor-pointer">
                                <input type="checkbox" className="checkbox" value="Photograph PassportSized" onChange={handleCheckboxChange} />
                                <span className="label-text">Recent passport-sized photograph</span>
                            </label>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className="form-control overflow-hidden">
                            <label className="label">
                                <span className="label-text text-white">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Age_restriction</span>
                            </label>
                            <input type="number" name='age' placeholder="Age_restriction" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Fee</span>
                            </label>
                            <input type="number" name='fee' placeholder="Fee" className="input input-bordered" required />
                        </div>
                        <div className="form-control  overflow-hidden">
                            <label className="label">
                                <span className="label-text text-white">Validity</span>
                            </label>
                            <input type="text" name='validity' placeholder="Validity" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-white">Application_method</span>
                        </label>
                        <input type="text" name='method' placeholder="Application_method" className="input input-bordered" required />
                    </div>
                    <input
                        type="submit"
                        value="Add Visa"
                        className="btn w-full bg-green-400 text-white mt-3"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddVisa;