import React, { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Testimonial from '../components/Testimonial';
import Working from '../components/Working';
import Latest from '../components/Latest';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Home = () => {

    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className='w-11/12 mx-auto dark:text-white dark:bg-gray-800'>
            <button onClick={() => darkModeHandler()} className='text-3xl mt-2'>
                {
                    dark && <IoSunny></IoSunny>
                }
                {
                    !dark && <IoMoon></IoMoon>
                }
            </button>
            <section className='mt-2 mb-10'>
                <Banner></Banner>
            </section>
            <section className='my-12 mx-auto w-11/12'>

                <h2 className='text-3xl text-center font-extrabold py-6 dark:text-white'>Latest visas</h2>
                <Latest></Latest>
            </section>
            {/* Extra section 1 */}
            <section className='my-12 w-11/12 mx-auto'>
                <Testimonial></Testimonial>
            </section>
            <section className='my-12 w-11/12 mx-auto'>
                <Working></Working>
            </section>
        </div>
    );
};

export default Home;