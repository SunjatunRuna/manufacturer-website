import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        const user = {
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            linkedin: data.linkedin
        }
        console.log(data);
        const url = `http://localhost:5000/profile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `White ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Done Successfully');
                event.target.reset();
            })

    };
    return (
        <div className='my-8 grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
                <h4 className='text-xl text-center font-bold'>Profile Update:</h4>
                <form className='flex flex-col max-w-lg ml-12' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" className='text-start'>Username: </label>
                    <input className='border border-mute my-2 pl-2' name='name' type="text" disabled value={user.displayName} />
                    <label htmlFor="name" className='text-start'>Email: </label>
                    <input className='border border-mute my-2 pl-2' name='email' type="email" disabled value={user.email} />
                    <label htmlFor="description" className='text-start'>Address: </label>
                    <textarea className='border border-mute mb-2 pl-2' name='address' type="text" {...register("address")} />
                    <label htmlFor="phone" className='text-start'>Phone No: </label>
                    <input className='border border-mute  mb-2 pl-2' name='phone' type="number" {...register("phone")} />
                    <label htmlFor="linkedin" className='text-start'>LinkedIn: </label>
                    <input className='border border-mute my-2 pl-2' name='linkedin' type="url" {...register("linkedin")} />
                    <input className='py-2 bg-primary text-white rounded' type="submit" />
                </form>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl justify-center items-center">
            <h4 className='text-xl text-center font-bold text-primary my-4'>Profile</h4>
                <figure><div class="avatar">
                    <div class="w-48 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div></figure>
                <div class="card-body">
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;