import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect( () =>{
        fetch('https://evening-oasis-35651.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <div class="divider max-w-sm text-center ml-36 pl-24 my-32 text-2xl font-bold text-primary">Our Product</div>
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