import React from 'react';

const Contact = () => {
    return (
        <div className='my-24'>
            <h3 className='text-2xl uppercase text-center font-bold'>Contact us</h3>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mx-32 px-32 my-24'>
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <i className="fa-solid fa-location-dot text-5xl"></i>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Location</h2>
                    </div>
                </div>
                <div className="card ">
                    <figure className="px-10 pt-10">
                    <i className="fa-solid fa-envelopes-bulk text-5xl"></i>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Email</h2>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <i className="fa-solid fa-phone text-5xl"></i>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Contact</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;