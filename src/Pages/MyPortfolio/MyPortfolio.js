import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-black text-white">
                <div class="hero-content flex-col lg:flex-row-reverse mx-32 px-24">
                <div class="avatar">
                        <div class="w-96 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" />
                        </div>
                    </div>
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
            <Skills></Skills>
            <Portfolio></Portfolio>
        </div>
    );
};

export default MyPortfolio;