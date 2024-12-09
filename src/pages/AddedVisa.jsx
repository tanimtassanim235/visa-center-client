import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleVisa from '../components/SingleVisa';

const AddedVisa = () => {
    const alreadyAddVisaByYou = useLoaderData();
    const [addedByYou, setAddedByYou] = useState(alreadyAddVisaByYou);
    const [updatedVisa, setUpdatedVisa] = useState({});
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-20 w-11/12 mx-auto'>

            {
                addedByYou === 0
                    ?
                    (
                        <p className='font-bold text-3xl text-green-500 border-2 border-red-500'>No Visa Added By You</p>
                    )
                    :
                    addedByYou?.map((oneVisa) => <SingleVisa oneVisa={oneVisa} setAddedByYou={setAddedByYou} addedByYou={addedByYou} setUpdatedVisa={setUpdatedVisa} updatedVisa={updatedVisa} key={oneVisa?._id} ></SingleVisa>)
            }
        </div>
    );
};

export default AddedVisa;