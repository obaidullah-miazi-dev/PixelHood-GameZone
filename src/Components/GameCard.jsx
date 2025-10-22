import { StarIcon } from 'lucide-react';
import React from 'react';
import { NavLink} from 'react-router';

const GameCard = ({ game }) => {
    const {id} = game
    return (
        <NavLink to={`/game-details/${id}`}>
            <div className='bg-[#00000050] p-5 rounded-md space-y-4 cursor-pointer hover:opacity-100 md:opacity-70 duration-500'>
                <img className='md:w-[550px] h-86 rounded-md' src={game.coverPhoto} alt={game.title} />
                <h2 className='text-3xl font-bold text-purple-200'>{game.title}</h2>
                <p className='line-clamp-2 text-purple-300'>{game.description}</p>
                <div className='flex justify-between items-center'>
                    <p className='bg-purple-100 px-4 py-1 text-purple-700 font-semibold rounded-full'>{game.category}</p>
                    <p className='flex gap-2 font-bold text-orange-500 text-lg items-center'><StarIcon className='text-sm text-orange-500'></StarIcon> {game.ratings}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default GameCard;