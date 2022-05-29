import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const [ deleteItem, setDeleteItem ] = useState(null);
    const { data: service, isLoading, refetch } = useQuery('service', () => fetch('http://localhost:5000/service')
        .then(res => res.json()))
    if (isLoading) {
        return <p>Loading.........</p>
    }
    return (
        <div className='my-12'>
            <h3 className='text-xl text-center font-bold mb-8'>Manage Order: {service.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service.map((s, index) => <ManageOrderRow
                                key={s._id}
                                s={s}
                                index={index}
                                refetch={refetch}
                                setDeleteItem={setDeleteItem}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            { deleteItem && <DeleteConfirmModal 
            deleteItem={deleteItem}
            refetch={refetch}
            setDeleteItem={setDeleteItem}
            ></DeleteConfirmModal> }
        </div>
    );
};

export default ManageOrder;