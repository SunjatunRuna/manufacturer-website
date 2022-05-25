import React from 'react';

const About = () => {
    return (
        <div className='bg-primary'>
            <div class="hero min-h-screen px-24">
                <div class="hero-content flex-col lg:flex-row mx-32 p-8 text-white shadow-5xl">
                    <div class="avatar">
                        <div class="w-56 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" />
                        </div>
                    </div>
                    <div className='pl-4'>
                        <h1 class="text-3xl font-bold uppercase">About Me</h1>
                        <p class="py-6 pr-12 text-justify">This is Sunjatun Ahmed Runa. I am a CSE student. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB. I always try to come up with innovative ideas and imaginative solutions. And try to create something unique Why me? Client satisfaction and attractive work. As a perfectionist, I can ensure a high-quality work within the given time frame as well.. That's why your project is always in a safe hand of course. I hope you will enjoy and happy with my work.</p>
                        <button class="btn btn-outline btn-secondary">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;