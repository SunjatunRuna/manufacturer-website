import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyer=${user.email}`)
                .then(res => res.json())
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
                        {/* <!-- row 1 --> */}
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