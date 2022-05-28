import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyer=${user.email}`, {
                method: 'GET',
                headers:{
                    authorization: `White ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if(res.status === 401 || res.status === 403){
                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => setOrder(data))
        }
    }, [user])
    return (
        <div>
            My order: {order.length}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{o.buyerName}</td>
                                    <td>{o.buyer}</td>
                                    <td>{o.order}</td>
                                    <td>{o.quantity}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;