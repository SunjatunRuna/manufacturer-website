import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';


const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://evening-oasis-35651.herokuapp.com/order?buyer=${user.email}`, {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Payment</th>
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
                                    <td>{(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs'>Pay Now</button></Link> }
                                    {/* {(o.price && o.paid) && <span className='text-success'>Paid</span>} */}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;