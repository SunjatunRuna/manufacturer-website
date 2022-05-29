import React, { useEffect, useState } from 'react';

const useProfile = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('https://evening-oasis-35651.herokuapp.com/profile')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useProfile;