import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ s, index, refetch, setDeleteItem }) => {
    const { name, img, quantity, _id } = s;
    const [items, setItems] = useState([]);

   
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeleteItem(s)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                </td>
        </tr>
    );
};

export default ManageOrderRow;