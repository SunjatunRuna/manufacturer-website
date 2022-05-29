import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `https://evening-oasis-35651.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
            <h4 className='text-xl text-center font-bold'>Add Product:</h4>
            <form className='flex flex-col max-w-lg ml-12' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="img" className='text-start'>Photo URL: </label>
                <input className='border border-mute my-2 ps-2' name='img' type="text" {...register("img")} />
                <label htmlFor="name" className='text-start'>Name: </label>
                <input className='border border-mute my-2 ps-2' name='name' type="text" {...register("name")} />
                <label htmlFor="description" className='text-start'>Description: </label>
                <textarea className='border border-mute mb-2 ps-2' name='description' type="text" {...register("description")} />
                <label htmlFor="quantity" className='text-start'>Quantity: </label>
                <input className='border border-mute  mb-2 ps-2' name='quantity' type="number" {...register("quantity")} />
                <label htmlFor="quantity" className='text-start'>Minimum Qty: </label>
                <input className='border border-mute  mb-2 ps-2' name='minimum' type="number" {...register("minimum")} />
                <label htmlFor="price" className='text-start'>Price: </label>
                <input className='border border-mute  mb-2 ps-2' name='price' type="number" {...register("price")} />
                <input className='py-2 bg-primary text-white rounded' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;