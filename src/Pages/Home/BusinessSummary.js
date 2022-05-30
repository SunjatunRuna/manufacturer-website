import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='bg-yellow-400 pb-12 pt-24'>
            <h3 className='text-3xl text-center font-bold mb-24 uppercase'>We have<span className='text-primary'> Experience</span></h3>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mx-24 text-secondary pb-12'>
                <div className='border border-yellow-300 p-8'>
                    <h1 className='text-5xl font-bold'>25.6K+</h1>
                    <p className='text-2xl font bold my-4'>Customer</p>
                </div>
                <div className='border border-yellow-300 p-8'>
                    <h1 className='text-5xl font-bold'>100%</h1>
                    <p className='text-2xl font bold my-4'>Satisfaction</p>
                </div>
                <div className='border border-yellow-300 p-8'>
                    <h1 className='text-5xl font-bold'>10 Years</h1>
                    <p className='text-2xl font bold my-4'>Business Experience</p>
                </div>
                <div className='border border-yellow-300 p-8'>
                    <h1 className='text-5xl font-bold'>90%</h1>
                    <p className='text-2xl font bold my-4'>Positive Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;