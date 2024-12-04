import React from 'react';
import visa1 from '../assets/document.png'
import visa2 from '../assets/cash.png'
import visa3 from '../assets/online-interview.png'
import visa4 from '../assets/visa.png'
import { Typewriter } from 'react-simple-typewriter';
import { JackInTheBox } from 'react-awesome-reveal';
const Working = () => {
    return (
        <div>
            <div className='space-y-4 text-center my-14'>
                <JackInTheBox duration={2000} >
                    <h3 className='font-bold uppercase text-blue-500'>Working Process</h3>
                </JackInTheBox>
                <p className='font-extrabold md:text-3xl text-2xl '>
                    <Typewriter
                        cursorBlinking
                        cursorColor="#fd122b"
                        delaySpeed={3000}
                        deleteSpeed={250}
                        loop={0}
                        typeSpeed={100}
                        words={[
                            'Steps You Achieved Your Dream Visa'
                        ]}
                    />
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* card 1 */}
                <div className='  py-6 flex flex-col justify-center items-center gap-4'>
                    <div>
                        <div className="avatar indicator">
                            <span className="indicator-item badge badge-secondary">1</span>
                            <div className="h-20 w-20 rounded-full shadow-xl">
                                <img
                                    alt="visa 1"
                                    src={visa1} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center  flex-grow'>
                        <h3 className='font-extrabold text-xl'>Choose The Visa</h3>
                        <p className='text-gray-500 font-bold'>Select the Country for process the visa</p>
                    </div>
                </div>
                {/* card 1 */}
                <div className='  py-6 flex flex-col gap-4 justify-center items-center'>
                    <div className='text-center flex-grow'>
                        <h3 className='font-extrabold text-xl'>Documents and Payments</h3>
                        <p className='text-gray-500 font-bold'>Payment The Visa Amount & Waiting for Response from our Expert</p>
                    </div>
                    <div>
                        <div className="avatar indicator">
                            <span className="indicator-item badge badge-secondary">2</span>
                            <div className="h-20 w-20 rounded-full shadow-xl p-2">
                                <img
                                    alt="step 2"
                                    src={visa2} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className='  py-6 flex flex-col justify-center items-center gap-4'>
                    <div>
                        <div className="avatar indicator">
                            <span className="indicator-item badge badge-secondary">3</span>
                            <div className="h-20 w-20 rounded-full shadow-xl p-2">
                                <img
                                    alt="Tailwind CSS examples"
                                    src={visa3} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center flex-grow'>
                        <h3 className='font-extrabold text-xl'>Meet the Expert</h3>
                        <p className='text-gray-500 font-bold'>1-1 Session with Experienced Expert in your Comfort Time</p>
                    </div>
                </div>
                {/* card 1 */}
                <div className='  py-6 flex flex-col justify-center items-center gap-4'>
                    <div className='text-center flex-grow'>
                        <h3 className='font-extrabold text-xl'>Waiting For Final Response</h3>
                        <p className='text-gray-500 font-bold'>Country Deligate Review your files and Finally give the Disayer Visa</p>
                    </div>
                    <div>
                        <div className="avatar indicator">
                            <span className="indicator-item badge badge-secondary">4</span>
                            <div className="h-20 w-20 rounded-lg shadow-xl">
                                <img
                                    alt="Tailwind CSS examples"
                                    src={visa4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working;