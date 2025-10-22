import React from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router';

const Login = () => {
    return (
        <Container>
            <div className='flex justify-between items-center min-h-screen'>
                <div className='flex-1'></div>
                <div className='flex-1'>
                    <fieldset className="fieldset rounded-box w-10/12 border border-purple-900 bg-[#00000088] p-4 py-8 ">
                        <h2 className='text-3xl text-center font-bold'>Login</h2>

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full bg-transparent mb-3" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full bg-transparent mb-3" placeholder="Password" />

                        <p className='underline cursor-pointer'>Forget Password ?</p>

                        <button className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box justify-center mt-5">Login</button>

                        <p className='mt-3 font-semibold'>New In Here ? Please <Link to='/auth/register' className='font-semibold text-purple-500 hover:border-b hover:border-b-purple-500'>Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </Container>
    );
};

export default Login;