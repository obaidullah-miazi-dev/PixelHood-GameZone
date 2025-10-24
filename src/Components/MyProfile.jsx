import React, { use } from 'react';
import Container from './Container';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import Loading from './Loading';

const MyProfile = () => {
    const { user, loading } = use(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    // console.log(user);
    return (
        <Container>
            <title>My Profile</title>
            <div className='bg-[#000000b2] mt-38 p-12 rounded-xl'>
                <h3 className='md:text-5xl text-3xl font-bold text-center'><span className='border-b-4 border-b-purple-600'>My Profile</span></h3>
                <div className='mt-28 flex flex-col md:flex-row justify-center gap-8 items-center'>
                    <div className='md:border-r-2 border-r-gray-500 pr-5 space-y-2'>
                        
                            <img className='w-50 rounded-full mx-auto' src={user?.photoURL} alt={user?.displayName} />
                        
                        <h2 className='text-center font-bold md:text-2xl text-xl'>{user?.displayName}</h2>
                        <p className='text-center text-purple-400'>Premium User</p>
                    </div>

                    <div>
                        <h2 className='text-3xl md:font-bold font-semibold mb-5'>User Details</h2>
                        <div className='md:font-semibold md:text-lg space-y-1'>
                            <p>Name: {user?.displayName}</p>
                            <p>Email : {user?.email}</p>
                            <p>User Id : {user?.uid}</p>
                        </div>
                        <Link to='/auth/updateProfile' className='px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box mt-4'>
                        Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyProfile;