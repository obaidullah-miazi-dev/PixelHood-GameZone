import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import './style.css'
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-img min-h-screen'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default AuthLayout;