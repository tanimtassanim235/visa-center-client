import React from 'react';
import Swal from 'sweetalert2';

const ApplyCard = ({ singleVisa, setRemaingVisa, remaingVisa }) => {
    const {
        _id,
        Applied_date,
        Applicant_name,
        Fee,
        applierEmail,
        Country,
        Country_image,
        visa_type,
        Processing_time,
        Validity,
        Application_method,
    } = singleVisa;


    const handleDelete = _id => {
        //.log(_id);
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

                fetch(`https://visa-navigator-server-tau.vercel.app/appliedVisa/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const newData = remaingVisa.filter((oneData) => _id != oneData._id);
                        setRemaingVisa(newData);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Application has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    //.log(singleVisa);
    return (
        <>
            <div className="card glass ">
                <figure>
                    <img
                        src={Country_image}
                        alt={Country} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Visa Type: {visa_type}</h2>
                    <p>Country: {Country}</p>
                    <p>Processing Time: {Processing_time}</p>
                    <p>Visa Fee: {Fee}</p>
                    <p>Visa Validity: {Validity}</p>
                    <p>Application Process: {Application_method} </p>
                    <p>Applied Date: {Applied_date}</p>
                    <p>Applicant's name: {Applicant_name}</p>
                    <p>Applicant's Email: {applierEmail}</p>
                    <div className="card-actions justify-start mt-2">
                        <button className="btn btn-error text-white" onClick={() => handleDelete(_id)}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyCard;