import React from 'react';
import errorImg from '../assets/error-page-img.png';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
            <img className='mx-auto' src={errorImg} alt="404 error image" />
            <h2 className='md:text-8xl font-bold text-2xl'>Page Not Found</h2>
            </div>
        </div>
    );
};

export default ErrorPage;