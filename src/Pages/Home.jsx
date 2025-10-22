import React from 'react';
import Banner from '../Components/Banner';
import AllGames from '../Components/AllGames';
import PopularGames from '../Components/PopularGames';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AllGames></AllGames>
            <PopularGames></PopularGames>
        </div>
    );
};

export default Home;