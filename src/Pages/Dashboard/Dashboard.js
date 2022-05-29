import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h3 className='text-3xl text-primary font-bold'>Welcome to your dashboard</h3>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    {
                        admin &&  <li><Link to='/dashboard/users'>All User</Link></li>
                    }
                    <ul class="menu menu-horizontal bg-base-100">
                        {/* <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused --> */}
                        <li tabindex="0">
                            <Link to='/dashboard/profile'>My Profile</Link>
                            <ul class="bg-base-100">
                                <li><Link to='/dashboard/product'>Add Product</Link></li>
                                <li><Link to='/dashboard/manage'>Manage Product</Link></li>
                                <li><a>Submenu 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;