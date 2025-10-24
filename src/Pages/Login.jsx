import React, { use, useState } from 'react';
import Container from '../Components/Container';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn, setUser, googleLogIn } = use(AuthContext)
    const [emailValue, setEmailValue] = useState('')
    // console.log(emailValue);
    const location = useLocation()

    // console.log(location);
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email, password)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successful! Let’s explore some awesome games",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(res.user)
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const err = error.code
                console.log(err);
                 Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${err}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successful! Let’s explore some awesome games",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                const err = error.code
                 Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${err}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row md:justify-between items-center min-h-screen w-full'>
                <div className='md:flex-1'></div>
                <form onSubmit={handleLogIn} className='md:flex-1 w-full mx-auto'>
                    <fieldset className="fieldset rounded-box md:w-10/12 border border-purple-900 bg-[#00000088] p-4 py-8 my-12">
                        <h2 className='text-3xl text-center font-bold'>Login</h2>

                        <label className="label">Email</label>
                        <input value={emailValue} name='email' type="email" className="input w-full bg-transparent mb-3" placeholder="Email" onChange={(e) => setEmailValue(e.target.value)} required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full bg-transparent mb-3" placeholder="Password" required />

                        <Link to='/auth/resetPassword' state={emailValue} className='underline cursor-pointer'>Forget Password ?</Link>

                        <button type='submit' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box justify-center mt-5">Login</button>

                        {/* Google */}
                        <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5] rounded-box">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className='mt-3 font-semibold'>New In Here ? Please <Link to='/auth/register' className='font-semibold text-purple-500 hover:border-b hover:border-b-purple-500'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </Container>
    );
};

export default Login;