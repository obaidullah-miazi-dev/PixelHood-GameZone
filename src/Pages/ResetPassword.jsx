import React, { useContext, useState } from 'react';
import Container from '../Components/Container';
import { Link, useLocation} from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const ResetPassword = () => {
    const {resetPassword} = useContext(AuthContext)
    const location = useLocation()
    const [email,setEmail] = useState(location?.state)

    // console.log(email);
    // console.log(resetPassword);
    const handleResetPassword = (e)=>{
        e.preventDefault()
        resetPassword(email)
        .then(() =>{
            alert('Password reset email sent!')
            window.location.href = "https://mail.google.com";
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row md:justify-between items-center min-h-screen w-full'>
                <div className='md:flex-1'></div>
                <form onSubmit={handleResetPassword} className='md:flex-1 w-full mx-auto'>
                    <fieldset className="fieldset rounded-box md:w-10/12 border border-purple-900 bg-[#00000088] p-4 py-8 my-12">
                        <h2 className='text-3xl text-center font-bold'>Password Reset</h2>

                        <label className="label">Email</label>
                        <input name='email' type="email" value={email} className="input w-full bg-transparent mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

                    
                        <button type='submit' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box justify-center mt-5">Reset Password</button>

                        

                        <p className='mt-3 font-semibold'>Go Back to <Link to='/auth/login' className='font-semibold text-purple-500 hover:border-b hover:border-b-purple-500'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </Container>
    );
};

export default ResetPassword;