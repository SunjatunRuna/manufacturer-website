import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Google from './Google';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      let signInError;
      const navigate = useNavigate();

      if(loading || updating){
          return <p>Loading.....</p>
      }

      if(error || updateError){
          signInError = <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
      }

      if(user){
        navigate('/home');
      }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }
    return (
        <div className='flex justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input 
                        type="name"  
                        className="input input-bordered w-full max-w-xs" 
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                          })}/>
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            
                            
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                        type="email"  
                        className="input input-bordered w-full max-w-xs" 
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: 'Provide a valid email'
                            }
                          })}/>
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password </span>
                        </label>
                        <input 
                        type="password" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                              value: 8,
                              message: 'Must be eight character or longer'
                            }
                          })}/>
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value='Signup'/>
                </form>
                <p><small>Already have an account? <Link to='/login' className=''>Please Login</Link></small> </p>
                <div className="divider">OR</div>
                <Google></Google>
            </div>
        </div>
    </div>
    );
};

export default Signup;