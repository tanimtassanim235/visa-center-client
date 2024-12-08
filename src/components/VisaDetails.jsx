import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VisaDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const visas = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, image, visa, time, age, description, fee, validity, method, req_doc } = visas;

    // console.log(visas);

    const handleApplyVise = (e) => {
        e.preventDefault();
        const form = e.target;
        const formatDate = startDate.toLocaleDateString("en-CA");
        const email = form.email.value;
        const firstName = form.fname.value;
        const lastName = form.lname.value;
        const fee = form.fee.value;

        const data = { formatDate, email, firstName, lastName, fee }
        console.log(data);
    }
    return (
        <div>
            <div class="bg-white">
                <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> <span className="text-green-500">{name}</span> visa Details</h2>
                        <p class="mt-4 text-gray-500">Description : {description}</p>
                        <button className="btn mt-5" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply for the visa</button>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn">open modal</button> */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="p-6 bg-gradient-to-r from-[#65a9ee] to-[#43cea2] w-full max-w-lg mx-auto shrink-0 shadow-2xl rounded-xl">
                                    <form onSubmit={handleApplyVise}>

                                        {/* first row */}
                                        <div className='flex gap-4 '>
                                            <div className="form-control overflow-hidden">
                                                <label className="label">
                                                    <span className="label-text text-white">Email </span>
                                                </label>
                                                <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">First Name</span>
                                                </label>
                                                <input type="text" name='fname' placeholder="First Name" className="input input-bordered" required />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className="form-control overflow-hidden">
                                                <label className="label">
                                                    <span className="label-text text-white">Last Name</span>
                                                </label>
                                                <input type="text" name='lname' placeholder="Last Name" className="input input-bordered w-full" required />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className="form-control  overflow-hidden">
                                                <label className="label">
                                                    <span className="label-text text-white">Applied date: current date</span>
                                                </label>
                                                <DatePicker
                                                    className="input input-bordered w-full"
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text text-white">Fee (visa fee)
                                                </span>
                                            </label>
                                            <input type="text" name='fee' placeholder="Fee" className="input input-bordered" required />
                                        </div>
                                        <input
                                            type="submit"
                                            value="Apply Visa"
                                            className="btn w-full bg-green-400 text-white mt-3"
                                        />
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>


                        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Visa Type</dt>
                                <dd class="mt-2 text-sm text-gray-500">{visa}</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Visa Fee</dt>
                                <dd class="mt-2 text-sm text-gray-500">৳ {fee} Taka Only</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Processing_time</dt>
                                <dd class="mt-2 text-sm text-gray-500">{time}</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Required Documents</dt>
                                {
                                    req_doc.map((data, idx) => <dd class="mt-2 text-sm text-gray-500" key={idx}>{data}</dd>)
                                }
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Age_restriction</dt>
                                <dd class="mt-2 text-sm text-gray-500">{age}</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Validity</dt>
                                <dd class="mt-2 text-sm text-gray-500">{validity}</dd>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Visa Apply Method / Application Method</dt>
                                <dd class="mt-2 text-sm text-gray-500">{method}</dd>
                            </div>
                        </dl>
                    </div>
                    <div >
                        <img className="w-full" src={image} alt={name} class="rounded-lg bg-gray-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaDetails;