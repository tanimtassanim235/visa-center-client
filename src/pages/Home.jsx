import React from 'react';
import Banner from '../components/Banner/Banner';
import Testimonial from '../components/Testimonial';
import Working from '../components/Working';
import Latest from '../components/Latest';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section className='my-20'>
                <Banner></Banner>
            </section>
            <section className='my-12'>
                <h2 className='text-3xl text-center font-extrabold'>Latest visas</h2>
                <Latest></Latest>
            </section>
            {/* Extra section 1 */}
            <section className='my-12'>
                <Testimonial></Testimonial>
            </section>
            <section className='my-12'>
                <Working></Working>
            </section>
        </div>
    );
};

export default Home;