import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import Container from './Container';
import { Download, StarIcon } from 'lucide-react';
import Loading from './Loading';

const GameDetails = () => {
    const { id } = useParams()
    const { gameData, loading } = useData()
    if (loading) return <Loading></Loading>
    const GameDetail = gameData?.find(game => game.id === Number(id))
    const { coverPhoto, title, description, developer, category, ratings, downloadLink } = GameDetail
    // console.log(GameDetail);
    return (
        <Container>
            <div className='mt-16 space-y-4 pb-8'>
                <img className='w-full h-[550px]' src={coverPhoto} alt={title} />
                <h2 className='text-7xl font-bold text-purple-200'>{title}</h2>
                <p className='font-semibold text-purple-200'>Developed By <span className='font-bold text-purple-400'>{developer}</span></p>
                <p className='text-xl font-semibold text-purple-300'>{description}</p>
                <div className='flex gap-5 items-center'>
                    <p className='bg-purple-100 px-4 py-1.5 text-purple-700 font-semibold rounded-full'>{category}</p>

                    <p className='flex gap-2 font-semibold text-orange-500 text-lg items-center bg-orange-50 rounded-full py-1 px-4'><StarIcon className='text-sm text-orange-500'></StarIcon> {ratings}</p>
                </div>

                <button>
                    <a href={downloadLink} className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-bold rounded-full w-58  justify-center"><Download></Download> Download Link</a>
                </button>

            </div>
        </Container>
    );
};

export default GameDetails;