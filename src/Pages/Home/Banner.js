import React from 'react';
import img from '../../images/pexels-bich-tran-669996 (2).jpg';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: "url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg?q=50&fit=contain&w=767&h=384&dpr=1.5)"}}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-secondary">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Why Choose Our Company?</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;