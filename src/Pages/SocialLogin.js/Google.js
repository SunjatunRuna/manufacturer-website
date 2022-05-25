import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    let googleError;
    if(loading){
        return <p>Loading........</p>
    }
    if(error){
        googleError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    if(user){
        navigate(from, {replace: true});
        console.log(user);
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='uppercase btn btn-outline'>Continue with google</button>
            {googleError}
        </div>
    );
};

export default Google;