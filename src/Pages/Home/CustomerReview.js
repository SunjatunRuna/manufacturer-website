import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';

const CustomerReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://evening-oasis-35651.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='my-32'>
            <h3 className='text-2xl ml-32 pl-32 font-bold'>Our Honorable <span className='text-primary'>Customer</span> Review : </h3>
            <div className='mx-32 my-16 px-32 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review =>
                        <Reviews key={review._id}
                        review={review}></Reviews>
                    )
                }
            </div>
        </div>
    );
};

export default CustomerReview;