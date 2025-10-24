import React, { use, useState } from 'react';
import Container from './Container';
import logo from '../assets/PixelHood-logo.png'
import { Link, NavLink, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = use(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('log Out successful')
            })
            .catch(error => {
                console.log(error);
            })
        navigate('/')
    }


    return (
        <nav className="w-full py-4">
            <Container>
                <div className="mx-auto flex justify-between items-center h-12 ">
                    <div className="flex items-center gap-2">
                        <NavLink to='/'>
                            <img
                                src={logo}
                                alt="PixelHood"
                                className="w-32"
                            />
                        </NavLink>
                    </div>

                    <ul className="hidden md:flex items-center gap-8 text-white font-medium">
                        <NavLink to='/'
                            className={({ isActive }) =>
                                `${isActive ? "border-b-2 border-[#632EE3]" : ""
                                }`
                            }>
                            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Home</li>
                        </NavLink>
                        <NavLink to='/about'
                            className={({ isActive }) =>
                                `${isActive ? "border-b-2 border-[#632EE3]" : ""
                                }`
                            }>
                            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">About Us</li>
                        </NavLink>
                        <NavLink to='/contact'
                            className={({ isActive }) =>
                                `${isActive ? "border-b-2 border-[#632EE3]" : ""
                                }`
                            }>
                            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Contact</li>
                        </NavLink>


                    </ul>

                    {/* button  */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ?
                            <Link to='/auth/myProfile'>
                                <img title={user.displayName} className='w-12 h-12 rounded-full' src={`${user?.photoURL}`} alt="User" />
                            </Link>
                            :
                            <Link to='/auth/login' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">Login</Link>}
                        {user ? <button onClick={handleLogOut} className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">log out</button> : <Link to='/auth/register' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">Register</Link>}
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-gray-700"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-transparent  shadow-sm">
                        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium text-white">
                            <NavLink to='/'
                                className={({ isActive }) =>
                                    `${isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : ""
                                    }`
                                }>
                                <li className="hover:text-[#632EE3] hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Home</li>
                            </NavLink>
                            <NavLink to='/about'
                                className={({ isActive }) =>
                                    `${isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : ""
                                    }`
                                }>
                                <li className="hover:text-[#632EE3]  hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">About Us</li>
                            </NavLink>
                            <NavLink to='/contact'
                                className={({ isActive }) =>
                                    `${isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : ""
                                    }`
                                }>
                                <li className="hover:text-[#632EE3]  hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Contact</li>
                            </NavLink>

                            {/* button  */}
                            <div className="md:hidden flex items-center gap-4">
                                {user ?
                                    <Link to='/auth/myProfile'>
                                        <img title={user.displayName} className='w-12 h-12 rounded-full' src={`${user?.photoURL}`} alt="User" />
                                    </Link>
                                    :
                                    <Link to='/auth/login' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">Login</Link>}
                                {user ? <button onClick={handleLogOut} className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">log out</button> : <Link to='/auth/register' className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">Register</Link>}
                            </div>
                        </ul>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;