import React from 'react';

const Skills = () => {
    return (
        <div className='mt-24'>
            <h3 className='text-3xl text-center uppercase font-bold'>My <span className='text-red-500'>Skills</span></h3>
            <div className='mx-32 px-32 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center my-16'>
                <div>
                    <div className="radial-progress text-primary font-bold" style={{ "--value": 100, "--size": "8rem", "--thickness": "1rem" }}>100%</div>
                    <h3 className='text-center uppercase my-6 font-bold text-xl text-primary'>html</h3>
                </div>
                <div>
                    <div className="radial-progress text-primary font-bold" style={{ "--value": 80, "--size": "8rem", "--thickness": "1rem" }}>80%</div>
                    <h3 className='text-center uppercase my-6 font-bold text-xl text-primary'>css</h3>
                </div>
                <div>
                    <div className="radial-progress text-primary font-bold" style={{ "--value": 90, "--size": "8rem", "--thickness": "1rem" }}>90%</div>
                    <h3 className='text-center uppercase my-6 font-bold text-xl text-primary'>bootstrap</h3>
                </div>
                <div>
                    <div className="radial-progress text-primary font-bold" style={{ "--value": 70, "--size": "8rem", "--thickness": "1rem" }}>70%</div>
                    <h3 className='text-center uppercase my-6 font-bold text-xl text-primary'>tailwind</h3>
                </div>
                <div>
                    <div className="radial-progress text-primary font-bold" style={{ "--value": 65, "--size": "8rem", "--thickness": "1rem" }}>65%</div>
                    <h3 className='text-center uppercase my-6 font-bold text-xl text-primary'>JavaScript</h3>
                </div>
                <div>
                    <div className="radial-progress text-primary font-bold" style={{ "--value": 60, "--size": "8rem", "--thickness": "1rem" }}>60%</div>
                    <h3 className='text-center uppercase my-6 font-bold text-xl text-primary'>react</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;