import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from '../components/VisaCard';

const Allvisas = () => {
    const visas = useLoaderData();

    return (
        <div className='w-11/12 mx-auto'>
            <select className="input input-bordered select select-primary w-1/4 mt-4 text-green-500" name="visa" id="visa">
                <option value="student">Student visa</option>
                <option value="tourist">Tourist visa</option>
                <option value="official">Official visa</option>
            </select>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-14 gap-5'>
                {
                    visas.map(visaes => <VisaCard key={visaes._id} visaes={visaes}></VisaCard>)
                }
            </div>
        </div>

    );
};

export default Allvisas;