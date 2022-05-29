import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioFooter from './PortfolioFooter';
import Skills from './Skills';
import img from '../../images/110-1104699_woman-clipart-images-png-cartoon-business-woman-transparent.png'

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-black text-white">
                <div className="hero-content flex-col lg:flex-row-reverse mx-32 px-24">
                <div className="avatar">
                        <div className="w-96 rounded-full">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Web <span className='text-red-500'>Developer</span></h1>
                        <p className="py-6">Hey! This is <span className='text-red-500'>Sunjatun Ahmed Runa</span>. My expertise fields are as follows- *Web Design & Development. *HTML5, CSS3, BootStrap, Tailwind CSS, JavaScript, React JS, Node Js & MongoDB. </p>
                        <i className="fa-brands fa-facebook mx-4 text-3xl"></i>
                        <i className="fa-brands fa-instagram mr-4 text-3xl"></i>
                        <i className="fa-brands fa-whatsapp text-3xl"></i>
                    </div>
                </div>
            </div>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <PortfolioFooter></PortfolioFooter>
        </div>
    );
};

export default MyPortfolio;