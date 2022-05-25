import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mx-28 mt-32'>
            <div class="avatar placeholder">
                <div class="bg-primary text-secondary rounded-full w-48">
                    <span class="text-6xl font-bold">404</span>
                </div>
            </div>
            <h3 className='text-3xl font-bold my-4'>Something Went Wrong!!</h3>
            <button className='text-info shadow-inner p-4 font-bold'><Link to='/'>Back to home</Link></button>
        </div>
    );
};

export default Error;