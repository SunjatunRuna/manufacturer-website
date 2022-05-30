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
        const url = `https://evening-oasis-35651.herokuapp.com/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleOrder = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        const oldPrice = parseInt(data.price);
        const price = oldPrice * parseInt(quantity);
        console.log(phone);
        const order = {
            orderId: data._id,
            order: data.name,
            quantity,
            buyer: user.email,
            buyerName: user.displayName,
            phone,
            price,
            img: data.img
        }

        fetch('https://evening-oasis-35651.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
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
        <div className='px-32 grid grid-cols-2 justify-items-center my-12'>
            <div class="card max-w-xl h-96 lg:card-side mt-10 outline outline-gray-100 outline-1">
                <figure><img src={data.img} alt="Album" className='w-56 h-56' /></figure>
                <div className="card-body mt-16">
                    <h2 className="card-title">{data.name}</h2>
                    <ul>
                        <li>Description: {data.description}</li>
                        <li>Quantity: {data.quantity}</li>
                        <li>Price: {data.price}</li>
                        <li>Minimum Quantity: {data.minimum}</li>
                    </ul>
                </div>
            </div>
            <div className='my-2'>
                <form onSubmit={handleOrder} className='py-4 max-w-xl grid grid-cols-1 gap-4 justify-items-center'>
                    <input type="text" name='name' disabled value={user.displayName} className="input input-bordered w-96" />
                    <input type="email" name='email' disabled value={user.email} className="input input-bordered w-96" />
                    <input type="number" name='quantity' placeholder='Quantity' className="input input-bordered w-96" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-96" />
                    <input type="number" name='phone' placeholder="Cell Phone" className="input input-bordered w-96" />
                    <input type="submit" value='Place Order' className="btn btn-primary text-white w-96" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;