import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {
    const { data: user, isLoading, refetch } = useQuery('user', () => fetch('https://evening-oasis-35651.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `White ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <p>Loading..........</p>
    }

    return (
        <div>
            <h3 className='text-center text-xl uppercase mt-12'>All User: {user.length} </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th className='text-center'>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((u, index) => <UserRow
                            key={u._id}
                            u={u}
                            index={index}
                            refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;