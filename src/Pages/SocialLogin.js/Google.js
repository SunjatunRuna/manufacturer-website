import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';

const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let googleError;
    if(loading){
        return <p>Loading........</p>
    }
    if(error){
        googleError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='uppercase btn btn-outline'>Continue with google</button>
            {googleError}
        </div>
    );
};

export default Google;