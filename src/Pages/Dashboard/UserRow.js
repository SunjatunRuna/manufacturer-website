import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ u, index, refetch }) => {
    const { email, role } = u;
    const makeAdmin = () => {
        fetch(`https://evening-oasis-35651.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `White ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
               if(data.modifiedCount > 0){
                console.log(data);
                refetch();
                toast.success('Done Successfully');
               }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs border-0">Make Admin</button>}</td>
            <td className='text-center'><button className="btn btn-xs bg-primary border-0">X</button></td>
        </tr>
    );
};

export default UserRow;