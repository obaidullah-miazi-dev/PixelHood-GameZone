import React, { use } from 'react';
import Container from '../Components/Container';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateProfilePage = () => {
    const { updateUser, setUser, user } = use(AuthContext)
    const navigate = useNavigate()
    const handleUpdateProfile = (e) => {
        // e.preventDefault()
        const displayName = e.target.name.value
        const photoURL = e.target.photo.value

        updateUser({
            displayName, photoURL
        })
            .then(() => {
                setUser({ ...user, displayName, photoURL })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Info Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                const err = error.code
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: { err },
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(user)
            })

        navigate('/auth/myProfile')

        // console.log('clicked',displayName);
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row md:justify-between items-center min-h-screen w-full'>
                <div className='md:flex-1'></div>
                <form onSubmit={handleUpdateProfile} className='md:flex-1 w-full mx-auto'>
                    <fieldset className="fieldset rounded-box md:w-10/12 border border-purple-900 bg-[#00000088] p-4 py-8 my-12">
                        <h2 className='text-3xl text-center font-bold'>Update Your Profile</h2>

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full bg-transparent mb-3" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input w-full bg-transparent mb-3" placeholder="Photo URL" />

                        <button className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-box justify-center mt-5">Update</button>



                        <p className='mt-3 font-semibold'>Don't Want to Update Now? <Link to='/auth/myProfile' className='font-semibold text-purple-500 hover:border-b hover:border-b-purple-500'>Go Back</Link></p>
                    </fieldset>
                </form>
            </div>
        </Container>
    );
};

export default UpdateProfilePage;