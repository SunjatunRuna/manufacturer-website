import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/search-no-result-found-in-folder-concept-illustration-flat-design-eps10-simple-and-modern-graphic-element-for-icon-landing-page-empty-state-ui-infographic-vector.jpg'

const Error = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='text-center mt-32'>
                <div className="avatar placeholder">
                    <div className="bg-primary text-secondary rounded-full w-56">
                        <span className="text-6xl font-bold">404</span>
                    </div>
                </div>
                <br />
                <button className='text-info shadow-inner mt-8 p-4 font-bold'><Link to='/'>Back to home</Link></button>
            </div>
            <div>
                <img src={img} alt="error" className='max-w-lg' />
            </div>
        </div>
    );
};

export default Error;