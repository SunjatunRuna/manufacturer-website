import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = (data, event) => {
        const review = {
            name: user.displayName,
            email: user.email,
            img: event.target.value,
            description: data.description,
        }
        console.log(data);
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Done Successfully');
                event.target.reset();
            })

    };
    return (
        <div className='w-50 mx-auto my-5'>
            <h4 className='text-xl text-center font-bold'>Add Review:</h4>
            <form className='flex flex-col max-w-lg ml-12' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="img" className='text-start'>Photo URL: </label>
                <input className='border border-mute my-2 ps-2' name='img' disabled={user.photoURL} value={user.photoURL} type="text" {...register("img")} />
                <label htmlFor="name" className='text-start'>Name: </label>
                <input className='border border-mute my-2 ps-2' name='name' disabled value={user.displayName} type="text" {...register("name")} />
                <label htmlFor="description" className='text-start'>Description: </label>
                <textarea className='border border-mute mb-2 ps-2' name='description' type="text" {...register("description")} />
                <input className='py-2 bg-primary text-white rounded' type="submit" />
            </form>
        </div>
    );
};

export default Review;