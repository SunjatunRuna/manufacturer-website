import React from 'react';
import img from '../../images/free-delivery-icon-flat-style-vector-2079224.jpg';
import imgTwo from '../../images/payment2.jpg'

const Info = () => {
    return (
        <div className='my-24'>
            <h3 className='text-2xl uppercase text-center font-bold'>Our Service</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-32 px-32'>
                <div className='w-96'>
                <img src={img} alt="" />
                </div>
                <div className='w-96 mt-12'>
                    <img src={imgTwo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Info;