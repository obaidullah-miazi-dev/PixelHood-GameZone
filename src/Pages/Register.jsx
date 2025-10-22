import React, { use } from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,setUser,updateUser} = use(AuthContext)
    const handleRegister = (e)=>{
        e.preventDefault()
        // console.log(e.target);
        const displayName = e.target.name.value
        const photoURL = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email,password)
        .then(res =>{
            const user = res.user
            updateUser({
                displayName,photoURL
            })
            .then(()=>{
                setUser({...user,displayName,photoURL})
            })
            .catch(error=>{
                console.log(error);
                setUser(user)
            })
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row md:justify-between items-center min-h-screen'>
                <div className='md:flex-1'></div>
                <form onSubmit={handleRegister} className='md:flex-1 w-full'>
                    <fieldset className="fieldset rounded-box lg:w-10/12 border border-purple-900 bg-[#00000088] p-4 py-8 my-12">
                        <h2 className='text-3xl text-center font-bold'>Register</h2>

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full bg-transparent mb-3  " placeholder="Full Name" />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input w-full bg-transparent mb-3  " placeholder="Photo Url" />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full bg-transparent mb-3  " placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full bg-transparent mb-3  " placeholder="Password" />


                        <button type='submit' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box justify-center mt-5">Register</button>

                        <p className='mt-3 font-semibold'>Already Have An Account ? Please <Link to='/auth/login' className='font-semibold text-purple-500 hover:border-b hover:border-b-purple-500'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </Container>
    );
};

export default Register;