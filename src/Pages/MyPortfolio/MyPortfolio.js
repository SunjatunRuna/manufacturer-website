import React from 'react';
import About from './About';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-black text-white">
                <div class="hero-content flex-col lg:flex-row-reverse mx-32 px-24">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" alt='avatar' class="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Web <span className='text-red-500'>Developer</span></h1>
                        <p class="py-6">Hey! This is <span className='text-red-500'>Sunjatun Ahmed Runa</span>. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB. </p>
                        <i class="fa-brands fa-facebook mx-4 text-3xl"></i>
                        <i class="fa-brands fa-instagram mr-4 text-3xl"></i>
                        <i class="fa-brands fa-whatsapp text-3xl"></i>
                    </div>
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default MyPortfolio;