import React from 'react';
import useData from '../Hooks/useData';
import Container from './Container';
import GameCard from './GameCard';

const AllGames = () => {
    const { gameData } = useData()
    return (
        <Container>
            <div className='mt-16'>
                <h2 className='font-bold md:text-6xl text-4xl mb-6 text-center'><span className='border-b-4 border-purple-700'>All Games</span></h2>
                <p className='text-center text-purple-200'>
                    Explore our full collection of urban-style games from action-packed adventures to street-smart challenges.
                </p>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-12'>
                    {
                        gameData.map(game => <GameCard key={game.id} game={game}></GameCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllGames;