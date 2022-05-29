import React, { useEffect, useState } from 'react';

const useProfile = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/profile')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useProfile;