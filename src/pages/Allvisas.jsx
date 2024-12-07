import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from '../components/VisaCard';

const Allvisas = () => {
    const visas = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-14 gap-5'>
            {
                visas.map(visaes => <VisaCard key={visaes._id} visaes={visaes}></VisaCard>)
            }
        </div>
    );
};

export default Allvisas;