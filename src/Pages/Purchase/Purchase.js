import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from './Modal';

const Purchase = () => {
    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleOrder = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        console.log(phone);
    }
    const reduceBtn = () =>{
        if(quantity > data.quantity){
            setQuantity(quantity - 1);
        }
    }
    const increaseBtn = () =>{
        if(quantity < data.minimum){
            setQuantity(quantity + 1);
        }
    }
    const quantityChange = e =>{
        setQuantity(e.target.quantity.value);
    }
    return (
        <div className='grid grid-col-1 lg:grid-cols-2 px-32 my-12'>
            <div class="card mx-32">
                <figure><img src={data.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{data.name}</h2>
                    <p>Description: {data.description}</p>
                    <p>Quantity: {data.quantity}</p>
                </div>
            </div>
            <div className='mr-32'>
            <form onSubmit={handleOrder} className='py-4 grid grid-cols-1 gap-4 justify-items-center'>
                <input type="text" name='name' className="input input-bordered max-w-xs" />
                <input type="email" name='email' className="input input-bordered max-w-xs" />
                <div>
                    <button onClick={reduceBtn} className='text-3xl mx-4 font-bold'>-</button>
                    <input onChange={quantityChange} type="number" name="quantity" value={quantity} id="" className='border text-center py-2' />
                    <button onClick={increaseBtn} className='text-3xl mx-4 font-bold'>+</button>
                </div>
                <input type="text" name='address' placeholder="Address" className="input input-bordered max-w-xs" />
                <input type="number" name='phone' placeholder="Cell Phone" className="input input-bordered max-w-xs" />
                <input type="submit" value='Place Order' className="btn btn-secondary text-white max-w-xs" />
            </form>
            </div>
        </div>
    );
};

export default Purchase;