import React from 'react';
import img from '../../images/Capture.PNG'
import img2 from '../../images/Capture2.PNG'
import img3 from '../../images/Capture3.PNG'

const Portfolio = () => {
    return (
        <div className='bg-yellow-300 my-16 py-24'>
            <h3 className='text-center text-3xl font-bold uppercase'>My <span className='text-primary'>Portfolio</span></h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-16 my-12'>
                <div>
                    <a href="https://service-provider-auth.web.app/"><img src={img} alt="" /></a>
                </div>
                <div>
                    <a href="https://confident-turing-4a9e1f.netlify.app/"><img src={img3} alt="" /></a>
                </div>
            </div>
            <div className='flex justify-center'>
                <a href="https://aquamarine-seahorse-d9833f.netlify.app/"><img src={img2} alt="" /></a>
            </div>
        </div>
    );
};

export default Portfolio;