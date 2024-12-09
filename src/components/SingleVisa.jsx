import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";
import { useParams } from "react-router-dom";

const SingleVisa = ({ oneVisa, setAddedByYou, addedByYou, updatedVisa, setUpdatedVisa }) => {

    const { method, validity, time, visa, image, name, fee, _id, age, description, req_doc } = oneVisa;

    const { user } = useContext(AuthContext);
    const [selectedDoc, setSelectedDoc] = useState([]);

    const { email } = useParams();

    const [checkboxOne, setCheckboxOne] = useState(false)
    const [checkboxTwo, setCheckboxTwo] = useState(false)
    const [checkboxThree, setCheckboxThree] = useState(false)

    useEffect(() => {
        setCheckboxOne(req_doc.includes('Valid Passport'));
    }, [req_doc]);

    useEffect(() => {
        setCheckboxTwo(req_doc.includes('Valid Form'));
    }, [req_doc]);

    useEffect(() => {
        setCheckboxThree(req_doc.includes('Photograph PassportSized'));
    }, [req_doc]);

    // Runs whenever req_doc changes
    // {req_doc.find((element) => element == 'Valid Passport' ? setCheckboxOne(true) : setCheckboxOne(false))} 
    const handleCheckboxChange = (e) => {
        const value = e.target.value;

        // Update state based on checkbox selection
        if (e.target.checked) {
            setSelectedDoc((prev) => [...prev, value]);
        } else {
            setSelectedDoc((prev) => prev.filter((item) => item !== value));
        }
    };


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/addedvisas/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const newData = addedByYou.filter((oneInfo) => _id != oneInfo?._id);
                        setAddedByYou(newData)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Created Visa  Application has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
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

        const UpdateVisa = { name, image, visa, time, age, description, fee, validity, method, req_doc, createdEmail }
        console.log(UpdateVisa);
        console.log(req_doc);

        document.getElementById(`${_id}`).close()

        fetch(`http://localhost:4000/addedvisas/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateVisa)
        })
            .then(res => res.json())
            .then(data => {
                // setAddedByYou(data)
                // const newData = addedByYou.filter((oneInfo) => _id != oneInfo?._id);
                // setAddedByYou(newData)
                fetch(`http://localhost:4000/addedvisas/${email}`)
                    .then(res => res.json())
                    .then(data =>
                        setAddedByYou(data)
                    )
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Done',
                        text: 'Update  Visa Info Done',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div>
            <div className="card glass ">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body px-2 sm:px-2 md:px-2 lg:px-2">
                    <h2 className="card-title">Visa Type: {visa}</h2>
                    <p>Country: {name}</p>
                    <p>Processing Time: {time}</p>
                    <p>Visa Fee: {fee}</p>
                    <p>Visa Validity: {validity}</p>
                    <p>Application Process: {method} </p>
                    <div className="card-actions justify-evenly mt-4 ">
                        <button className="btn btn-error text-white" onClick={() => handleDelete(_id)}>Delete</button>
                        <button className="btn btn-error text-white gap-3" onClick={() => document.getElementById(`${_id}`).showModal()}>Update</button>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" >open modal</button> */}
                        <dialog id={`${_id}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="p-6 bg-gradient-to-r from-[#65a9ee] to-[#43cea2] w-full max-w-lg mx-auto shrink-0 shadow-2xl rounded-xl">
                                    <form onSubmit={handleUpdate}>
                                        {/* first row */}
                                        <div className='flex gap-4 '>
                                            <div className="form-control overflow-hidden">
                                                <label className="label">
                                                    <span className="label-text text-white">Country name</span>
                                                </label>
                                                <input type="text" defaultValue={name} name='name' placeholder="Country Name" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">Country image</span>
                                                </label>
                                                <input type="text" defaultValue={image} name='imageurl' placeholder="Country image URL" className="input input-bordered" required />
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">Visa_type</span>
                                                </label>

                                                <select className="input input-bordered select select-primary w-full" defaultValue={visa} name="visa" id="visa">
                                                    <option value="student" >Student visa</option>
                                                    <option value="tourist">Tourist visa</option>
                                                    <option value="official">Official visa</option>
                                                </select>
                                            </div>
                                            <div className="form-control grow">
                                                <label className="label">
                                                    <span className="label-text text-white">Processing_time</span>
                                                </label>
                                                <input type="text" defaultValue={time} name='time' placeholder="Processing_time" className="input input-bordered" required />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white" >Required_documents</span>
                                            </label>
                                            <div className="form-control">
                                                <label className="label justify-start gap-3 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="checkbox"
                                                        checked={checkboxOne}
                                                        onChange={handleCheckboxChange}
                                                        value="Valid Passport"
                                                    />
                                                    <span className="label-text">Valid passport</span>
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <label className="label justify-start gap-3 cursor-pointer">
                                                    <input type="checkbox" className="checkbox"
                                                        checked={checkboxTwo} value="Visa Form" onChange={handleCheckboxChange} />
                                                    <span className="label-text">Visa application form</span>
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <label className="label justify-start gap-3 cursor-pointer">
                                                    <input type="checkbox" className="checkbox"
                                                        defaultChecked={checkboxThree}
                                                        value="Photograph PassportSized" onChange={handleCheckboxChange} />
                                                    <span className="label-text">Recent passport-sized photograph</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='flex gap-4'>
                                            <div className="form-control overflow-hidden">
                                                <label className="label">
                                                    <span className="label-text text-white">Description</span>
                                                </label>
                                                <input type="text" name='description' defaultValue={description}
                                                    placeholder="Description" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">Age_restriction</span>
                                                </label>
                                                <input type="number" defaultValue={age} name='age' placeholder="Age_restriction" className="input input-bordered" required />
                                            </div>
                                        </div>

                                        <div className='flex gap-4'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white">Fee</span>
                                                </label>
                                                <input type="number" defaultValue={fee} name='fee' placeholder="Fee" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control  overflow-hidden">
                                                <label className="label">
                                                    <span className="label-text text-white">Validity</span>
                                                </label>
                                                <input type="text" defaultValue={validity} name='validity' placeholder="Validity" className="input input-bordered" required />
                                            </div>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text text-white">Application_method</span>
                                            </label>
                                            <input type="text" defaultValue={method} name='method' placeholder="Application_method" className="input input-bordered" required />
                                        </div>
                                        <input
                                            type="submit"
                                            value="Update Visa Info"
                                            className="btn w-full bg-green-400 text-white mt-3"
                                        />
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        {/* <button className="btn">Close</button> */}
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleVisa;