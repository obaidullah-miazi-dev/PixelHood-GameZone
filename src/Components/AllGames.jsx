import React from 'react';
import useData from '../Hooks/useData';
import Container from './Container';
import GameCard from './GameCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const AllGames = () => {
    const { gameData } = useData()
    useGSAP(() => {
        gsap.from('#all-game', {
            y: '50',
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '#all-game',
                scroller: 'body',
                start: 'top 60%',
                end: 'top 20%',
                scrub: 2,
            }
        })
    })
    return (
        <Container>
            <div id='all-game' className='mt-16'>
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