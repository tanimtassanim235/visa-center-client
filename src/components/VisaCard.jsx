import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visaes }) => {

    const { _id, name, image, visa, description, validity } = visaes;

    return (
        <>
            <div className="card bg-base-100  shadow-xl dark:text-white dark:bg-transparent">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Country Name: {name}</h2>
                    <p>Visa Type:  {visa}</p>
                    <p>Description: {description}</p>
                    <p>Total Validity of the visa: {validity}</p>
                    <div className="card-actions">
                        <Link to={`/visa/${_id}`} className="btn btn-warning">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisaCard;