import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Purchase = () => {
    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
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
        const order = {
            orderId: data._id,
            order: data.name,
            quantity: event.target.quantity.value,
            buyer: user.email,
            buyerName: user.displayName,
            phone,
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                setData(null);
                console.log(data);
            })
    }


    // const reduceBtn = () =>{
    //     if(quantity > data.quantity){
    //         setQuantity(quantity - 1);
    //     }
    // }
    // const increaseBtn = () =>{
    //     if(quantity < data.minimum){
    //         setQuantity(quantity + 1);
    //     }
    // }
    // const quantityChange = e =>{
    //     setQuantity(e.target.quantity.value);
    // }
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
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <form onSubmit={handleOrder} className='py-4 grid grid-cols-1 gap-4 justify-items-center'>
                    <input type="text" name='name' disabled value={user.displayName} className="input input-bordered max-w-xs" />
                    <input type="email" name='email' disabled value={user.email} className="input input-bordered max-w-xs" />
                    <input type="number" name='quantity' placeholder='Quantity' className="input input-bordered max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered max-w-xs" />
                    <input type="number" name='phone' placeholder="Cell Phone" className="input input-bordered max-w-xs" />
                    <input type="submit" value='Place Order' className="btn btn-primary text-white max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;