import React from 'react';
import Banner from '../components/Banner/Banner';
import Testimonial from '../components/Testimonial';
import Working from '../components/Working';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section className='my-20'>
                <Banner></Banner>
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