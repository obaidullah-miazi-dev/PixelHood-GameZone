import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';

const MainLayout = () => {
    const { loading } = use(AuthContext)
    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;