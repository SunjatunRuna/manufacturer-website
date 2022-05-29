import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-24 text-justify'>
            <div className='my-12'>
                <h4 className='text-xl font-bold'>How will you improve the performance of a React Application?</h4>
                <p>To optimize React rendering,  need to make sure that components receive only necessary props. Keeping component state local where necessary. It will let control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
            </div>
            <div className='my-12'>
                <h4 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h4>
                <p>There are four main types of state you need to properly manage in your React apps: <br />
                    - Local state <br />
                    - Global state <br />
                    - Server state <br />
                    - URL state</p>
            </div>
            <div className='my-12'>
                <h4 className='text-xl font-bold'>How does prototypical inheritance work?</h4>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the (Prototype) of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='my-12'>
                <h4 className='text-xl font-bold'>How does prototypical inheritance work?</h4>
                <p>
                    <code>
                        const array = [
                            
                        ]
                    </code>
                </p>
            </div>
            <div className='my-12'>
                <h4 className='text-xl font-bold'>What is a unit test?Why should write unit tests?</h4>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            </div>
        </div>
    );
};

export default Blogs;