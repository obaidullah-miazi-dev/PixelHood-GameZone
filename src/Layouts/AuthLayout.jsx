import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import './style.css'

const AuthLayout = () => {
    return (
        <div className='bg-img min-h-screen'>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;