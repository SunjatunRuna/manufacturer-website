import React from 'react';
import img from '../../images/110-1104699_woman-clipart-images-png-cartoon-business-woman-transparent.png'

const Reviews = ({ review }) => {
    return (
        <div className='w-64 p-6 outline outline-gray-100 outline-1'>
            <div class="avatar flex justify-center">
                <div class="w-16 rounded-full">
                    <img src={img} />
                </div>
            </div>
            <h4 className='text-lg text-gray-500 mt-4'>{review.name}</h4>
            <div class="rating text-yellow-400 text-xs">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <p className='text-sm text-gray-400'>{review.description}</p>
        </div>
    );
};

export default Reviews;