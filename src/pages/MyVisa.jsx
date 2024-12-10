import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ApplyCard from '../components/ApplyCard';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { CgSearch } from 'react-icons/cg';
import { AuthContext } from '../../AuthProvider';

const MyVisa = () => {

    // const applyMyVisa = useLoaderData();

    const { user } = useContext(AuthContext);

    const [firstdata, setFirstData] = useState([]);

    useEffect(() => {
        fetch(`https://visa-navigator-server-tau.vercel.app/appliedVisa/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFirstData(data);
            })
    }, [])

    // const [remaingVisa, setRemaingVisa] = useState(applyMyVisa);
    // const { email } = useParams();
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     fetch(`https://visa-navigator-server-tau.vercel.app/appliedVisa/${email}?searchParams=${search}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             setRemaingVisa(data)
    //         })
    // }, [search, email])


    const handleSearch = () => {
        fetch(`https://visa-navigator-server-tau.vercel.app/appliedVisa/${user?.email}?searchParams=${search}`)
            .then(res => res.json())
            .then((data) => {
                setFirstData(data)
            })
    }

    return (

        <div>
            <div className='mt-8'>
                <div className='w-1/2 mx-auto'>
                    <label className="input input-bordered flex w-full items-center">
                        <input type="text" className="grow" name='search' onChange={(e) => setSearch(e.target.value)} placeholder="write than Click to the search icon to see the result" />
                        <CgSearch className='text-3xl cursor-pointer' onClick={handleSearch}></CgSearch>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-20 w-11/12 mx-auto'>

                {
                    firstdata.length === 0
                        ?
                        (
                            <p className='text-3xl text-red-400'>No Data Found</p>
                        )
                        :
                        firstdata?.map((singleVisa) => <ApplyCard
                            singleVisa={singleVisa}
                            key={singleVisa?._id}
                            remaingVisa={firstdata}
                            setRemaingVisa={setFirstData}></ApplyCard>)
                }
            </div>
        </div>

    );
};

export default MyVisa;