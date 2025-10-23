import React from 'react';
import Banner from '../Components/Banner';
import AllGames from '../Components/AllGames';
import PopularGames from '../Components/PopularGames';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AllGames></AllGames>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;