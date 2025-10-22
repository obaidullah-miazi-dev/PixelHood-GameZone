import React from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router';

const Register = () => {
    return (
        <Container>
            <div className='flex justify-between items-center min-h-screen'>
                <div className='flex-1'></div>
                <div className='flex-1'>
                    <fieldset className="fieldset rounded-box w-10/12 border border-purple-900 bg-[#00000088] p-4 py-8 ">
                        <h2 className='text-3xl text-center font-bold'>Register</h2>

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full bg-transparent mb-3  " placeholder="Full Name" />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input w-full bg-transparent mb-3  " placeholder="Photo Url" />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full bg-transparent mb-3  " placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full bg-transparent mb-3  " placeholder="Password" />


                        <button className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box justify-center mt-5">Register</button>

                        <p className='mt-3 font-semibold'>Already Have An Account ? Please <Link to='/auth/login' className='font-semibold text-purple-500 hover:border-b hover:border-b-purple-500'>Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </Container>
    );
};

export default Register;