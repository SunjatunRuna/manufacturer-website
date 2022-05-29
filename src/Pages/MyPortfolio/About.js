import React from 'react';
import img from '../../images/110-1104699_woman-clipart-images-png-cartoon-business-woman-transparent.png'

const About = () => {
    return (
        <div className='bg-primary'>
            <div className="hero min-h-screen px-24">
                <div className="hero-content flex-col lg:flex-row mx-32 p-8 text-white shadow-5xl">
                    <div className="avatar">
                        <div className="w-56 rounded-full">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='pl-4'>
                        <h1 className="text-3xl font-bold uppercase">About Me</h1>
                        <p className="py-6 pr-12 text-justify">This is Sunjatun Ahmed Runa. I am a CSE student. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB. I always try to come up with innovative ideas and imaginative solutions. And try to create something unique Why me? Client satisfaction and attractive work. As a perfectionist, I can ensure a high-quality work within the given time frame as well.. That's why your project is always in a safe hand of course. I hope you will enjoy and happy with my work.</p>
                        <button className="btn btn-outline btn-secondary">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;