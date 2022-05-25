import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl font-bold my-32 text-center'>Our <span className='text-primary'>Products</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24 mx-32 px-24'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        />)
                }
            </div>
        </div>
    );
};

export default Services;