import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleVisa from '../components/SingleVisa';
import { AuthContext } from '../../AuthProvider';

const AddedVisa = () => {
    // const alreadyAddVisaByYou = useLoaderData();
    const { user } = useContext(AuthContext);
    const [initdata, setInitdata] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/addedvisas/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setInitdata(data);
            })
    }, [user?.email])
    // const [addedByYou, setAddedByYou] = useState(alreadyAddVisaByYou);
    console.log(user);
    const [updatedVisa, setUpdatedVisa] = useState({});
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-20 w-11/12 mx-auto'>

            {
                initdata === 0
                    ?
                    (
                        <p className='font-bold text-3xl text-green-500 border-2 border-red-500'>No Visa Added By You</p>
                    )
                    :
                    initdata?.map((oneVisa) => <SingleVisa oneVisa={oneVisa} setAddedByYou={setInitdata} addedByYou={initdata} setUpdatedVisa={setUpdatedVisa} updatedVisa={updatedVisa} key={oneVisa?._id} ></SingleVisa>)
            }
        </div>
    );
};

export default AddedVisa;