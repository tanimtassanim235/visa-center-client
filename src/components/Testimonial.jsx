import React from 'react';
import france from '../assets/france.jpg'
import usa from '../assets/usa flag.jpeg'
import uk from '../assets/uk flag.jpeg'
import uae from '../assets/uae flag.jpeg'
import poland from '../assets/poland flag.png'

const Testimonial = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-lg uppercase text-blue-500 font-bold my-5'>Countries we offer</h2>
                <p className='md:text-4xl text-3xl text-center font-extrabold'>
                    Countries We Support <br />
                    for Immigration
                </p>
                <div className='my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 hover:gap-6'>
                    {/* card 1 */}
                    <div className='px-8 py-6   shadow-lg rounded-xl flex justify-center items-center gap-5 hover:scale-110 hover:rounded-box overflow-x-hidden'>
                        <div>
                            <img className='rounded-full w-28' src={france} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='font-extrabold text-2xl'>France</h2>
                            <p className='text-gray-500 font-bold'> Fastest visa processing pathways to get the visa</p>
                        </div>
                    </div>
                    <div className='px-8 py-6   shadow-lg rounded-xl flex justify-center items-center gap-5 hover:scale-110 hover:rounded-box'>
                        <div>
                            <img className='rounded-full w-28' src={usa} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='font-extrabold text-2xl'>USA</h2>
                            <p className='text-gray-500 font-bold'> Fastest visa processing pathways to get the visa</p>
                        </div>
                    </div>
                    <div className='px-8 py-6   shadow-lg rounded-xl flex justify-center items-center gap-5 hover:scale-110 hover:rounded-box'>
                        <div>
                            <img className='rounded-full w-28' src={uae} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='font-extrabold text-2xl'>UAE</h2>
                            <p className='text-gray-500 font-bold'> Fastest visa processing pathways to get the visa</p>
                        </div>
                    </div>
                    <div className='px-8 py-6   shadow-lg rounded-xl flex justify-center items-center gap-5 hover:scale-110 hover:rounded-box'>
                        <div>
                            <img className='rounded-full w-28' src={uk} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='font-extrabold text-2xl'>UK</h2>
                            <p className='text-gray-500 font-bold'> Fastest visa processing pathways to get the visa</p>
                        </div>
                    </div>
                    <div className='px-8 py-6  shadow-lg rounded-xl flex justify-center items-center gap-5 hover:scale-110 hover:rounded-box'>
                        <div>
                            <img className='rounded-full w-28' src={poland} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='font-extrabold text-2xl'>Poland</h2>
                            <p className='text-gray-500 font-bold'> Fastest visa processing pathways to get the visa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;