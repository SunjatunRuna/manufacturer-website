import React from 'react';
import img from '../../images/pexels-bich-tran-669996 (2).jpg';
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: "url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg?q=50&fit=contain&w=767&h=384&dpr=1.5)"}}>
            <div class="hero-overlay bg-opacity-30"></div>
            <div class="hero-content text-center text-secondary">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Why Choose Our Company?</h1>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;