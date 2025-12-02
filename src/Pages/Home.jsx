import React from 'react';
import Banner from '../Components/Banner';
import AllGames from '../Components/AllGames';
import PopularGames from '../Components/PopularGames';
import Newsletter from '../Components/Newsletter';
import ContactSection from '../Components/ContactSection';

const Home = () => {
    
    return (
        <div>
            <title>Pixel Hood -Home</title>
            <Banner></Banner>
            <AllGames></AllGames>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
            <ContactSection />
        </div>
    );
};

export default Home;