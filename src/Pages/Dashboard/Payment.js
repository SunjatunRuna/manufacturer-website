import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4lNQLBEP4niCuyp5js0EVHVu1fbUdCPngcENiWpsM8MDje5EQyeykdHNNLQC5ehAr409RM4lT2yGi0PBH8vgUy00MtB6wjO3');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `White ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <p>Loading........</p>
    }
    return (
        <div>
            <h3 className='text-xl font-bold my-8'>Order: #{order.orderId}</h3>
            <div class="card w-96 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={order.img} alt="" className='w-36' /></figure>
                <div class="card-body">
                    <h2 class="card-title uppercase">Order by {order.buyerName}</h2>
                    <p>Pay for {order.order}</p>
                    <ul>
                        <li>Order Quantity: {order.quantity}</li>
                        <li>Total Price: {order.price}TK</li>
                    </ul>
                </div>
            </div>
            <div className='card w-96 p-4 lg:card-side shadow-xl'>
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default Payment;