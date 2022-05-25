import React from 'react';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mx-32 px-32 my-24'>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                <i className="fa-solid fa-location-dot text-5xl"></i>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Location</h2>
                </div>
            </div>
            <div class="card bg-yellow-400 shadow-xl text-white">
                <figure class="px-10 pt-10">
                <i class="fa-solid fa-screwdriver-wrench text-5xl"></i>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Service</h2>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                <i className="fa-solid fa-phone text-5xl"></i>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Contact</h2>
                </div>
            </div>
        </div>
    );
};

export default Info;