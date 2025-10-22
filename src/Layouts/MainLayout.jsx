import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    const {loading} = use(AuthContext)
    if(loading){
        return <p>loading........</p>
    }
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;