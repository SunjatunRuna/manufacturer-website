import React from 'react';
import img from '../../images/61yfiaWp1BS._AC_SL1500_-removebg-preview.png';
import img3 from '../../images/Computer-1-removebg-preview.png'
const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full flex justify-center items-center">
                <div class="hero min-h-screen bg-gradient-to-r from-teal-100 to-accent-500">
                    <div class="hero-content flex-col lg:flex-row-reverse mx-36">
                        <img src={img} class="max-w-lg" />
                        <div>
                            <h1 class="text-5xl font-bold">Computer Parts</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-outline btn-info text-white">Get Started</button>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
            <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse mx-36">
                        <img src={img3} class="max-w-{500px}" />
                        <div>
                            <h1 class="text-5xl font-bold">Computer Parts</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;