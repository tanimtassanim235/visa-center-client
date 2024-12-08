import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyCard from '../components/ApplyCard';

const MyVisa = () => {

    const applyMyVisa = useLoaderData();
    const [remaingVisa, setRemaingVisa] = useState(applyMyVisa);
    console.log(applyMyVisa);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-20 w-11/12 mx-auto'>

            {/* 
            const email = req.params.email;
    const query = { userEmail: email }
    const result = await touristSpotCollection.find(query).toArray();
    */}

            {
                remaingVisa.length === 0
                    ?
                    (
                        <p className='text-3xl text-red-400'>No Data Found</p>
                    )
                    :
                    remaingVisa?.map((singleVisa) => <ApplyCard
                        singleVisa={singleVisa}
                        key={singleVisa?._id}
                        remaingVisa={remaingVisa}
                        setRemaingVisa={setRemaingVisa}></ApplyCard>)
            }
        </div>
    );
};

export default MyVisa;