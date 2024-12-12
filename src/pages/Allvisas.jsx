import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from '../components/VisaCard';

const Allvisas = () => {
    const visas = useLoaderData();

    const [diffVisa, setdiffVisa] = useState('');
    const [selectedData, setSelectedData] = useState(visas);

    useEffect(() => {
        fetch(`https://visa-navigator-server-tau.vercel.app/visa?searchParams=${diffVisa}`)
            .then(res => res.json())
            .then(data => {
                setSelectedData(data)
            })
    }, [diffVisa])

    return (
        <div className='w-11/12 mx-auto '>
            <select className="input input-bordered select select-primary w-1/4 mt-4 text-green-500" name="visa" id="visa" onChange={(e) => setdiffVisa(e.target.value)}>
                <option value="student">Student visa</option>
                <option value="tourist">Tourist visa</option>
                <option value="official">Official visa</option>
            </select>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-14 gap-5'>
                {
                    selectedData.map(visaes => <VisaCard key={visaes._id} visaes={visaes}></VisaCard>)
                }
            </div>
        </div>

    );
};

export default Allvisas;