import React from 'react';
import useData from '../Hooks/useData';
import Container from './Container';
import GameCard from './GameCard';

const PopularGames = () => {
    const { gameData } = useData()
    const highRatedGames = gameData.sort((a, b) => b.ratings - a.ratings).slice(0, 3)
    return (
        <Container>
            <div className='mt-16'>
                <h2 className='font-bold md:text-6xl text-3xl mb-6 text-center'><span className='border-b-4 border-purple-700'>Most Popular <span className='text-purple-200'>Games</span></span></h2>
                <p className='text-center text-purple-200'>
                    Check out the fan favorites that are ruling the streets and dominating the charts.
                </p>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12'>
                    {
                        highRatedGames.map(game => <GameCard key={game.id} game={game}></GameCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default PopularGames;