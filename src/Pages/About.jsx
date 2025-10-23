import React from 'react';
import { Link } from 'react-router';
import {  Users, Gamepad2, DownloadCloud } from 'lucide-react';

// Import images - you'll need to add these to your assets folder
import heroBanner from '../assets/about-hero-banner.jpg';
import communityImage from '../assets/community-gamers.jpg';
import gameplayImage from '../assets/gameplay-scene.jpeg';
import platformImage from '../assets/platform-screenshot.jpg';
import teamImage from '../assets/team-collaboration.jpeg';
import statsBackground from '../assets/stats-bg.jpg';
import Container from '../Components/Container';

const About = () => {
    return (
        <Container>
            <div className="mt-6 py-12 space-y-12">
                
                <div className="relative overflow-hidden rounded-xl">
                    <img 
                        src={heroBanner} 
                        alt="PixelHood Gaming World" 
                        className="w-full h-[500px] md:h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#000000b7] bg-opacity-50 flex items-center justify-center">
                        <div className="text-center space-y-6 px-4">
                            <h1 className="text-5xl md:text-7xl font-bold text-purple-200 drop-shadow-lg">
                                Welcome to PixelHood
                            </h1>
                            <p className="text-xl md:text-2xl text-purple-300 font-semibold max-w-3xl mx-auto leading-relaxed">
                                Your ultimate destination for discovering, playing, and connecting with the best games in the universe.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="bg-[#000000b2] p-8 rounded-xl space-y-6">
                    <h2 className="text-4xl font-bold text-purple-200 border-b-4 border-purple-600 inline-block px-4 py-2">
                        Our Mission
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-purple-300 font-semibold leading-relaxed">
                                At PixelHood, we aim to create a vibrant gaming community where players of all levels can explore a curated selection of games, connect with developers, and enjoy seamless gaming experiences. Our platform is built to empower creativity and bring joy through immersive gameplay.
                            </p>
                        </div>
                        <div className="relative">
                            <img 
                                src={teamImage} 
                                alt="Our Team at Work" 
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-purple-200 border-b-4 border-purple-600 inline-block px-4 py-2">
                        Why Choose PixelHood?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative overflow-hidden rounded-lg">
                            <img 
                                src={gameplayImage} 
                                alt="Curated Games" 
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-purple-200 mb-2">Curated Games</h3>
                                    <p className="text-purple-300 text-sm">Discover handpicked quality games</p>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                <Gamepad2 size={16} className="inline mr-1" /> Games
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <img 
                                src={communityImage} 
                                alt="Community" 
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-purple-200 mb-2">Community Driven</h3>
                                    <p className="text-purple-300 text-sm">Join thousands of passionate gamers</p>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                <Users size={16} className="inline mr-1" /> Community
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <img 
                                src={platformImage} 
                                alt="Platform Experience" 
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-purple-200 mb-2">Seamless Experience</h3>
                                    <p className="text-purple-300 text-sm">Easy navigation & fast downloads</p>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                <DownloadCloud size={16} className="inline mr-1" /> Experience
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="relative overflow-hidden rounded-xl">
                    <img 
                        src={statsBackground} 
                        alt="Gaming Stats" 
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#000000b9]  flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
                            <div className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-purple-300">10K+</div>
                                <div className="text-lg font-semibold">Happy Gamers</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-purple-300">500+</div>
                                <div className="text-lg font-semibold">Games Available</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-purple-300">50+</div>
                                <div className="text-lg font-semibold">Developers</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-purple-300">1M+</div>
                                <div className="text-lg font-semibold">Downloads</div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-12">
                    <h2 className="text-4xl font-bold text-purple-200 text-center border-b-4 border-purple-600 inline-block px-4 py-2">
                        Our Journey
                    </h2>
                    <div className="relative">
                        <div className="space-y-12">
                            
                            <div className="flex items-center justify-between md:flex-row flex-col gap-6">
                                <div className="md:w-1/3">
                                    <img 
                                        src={gameplayImage} 
                                        alt="Platform Launch" 
                                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-purple-200">2023 - Platform Launch</h3>
                                            <p className="text-purple-400">PixelHood was born with a vision to revolutionize gaming discovery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex items-center justify-between md:flex-row-reverse flex-col gap-6">
                                <div className="md:w-1/3">
                                    <img 
                                        src={communityImage} 
                                        alt="Community Growth" 
                                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <div className="flex items-center gap-4 justify-end md:justify-start">
                                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-purple-200">2024 - Community Boom</h3>
                                            <p className="text-purple-400">Our community grew exponentially, reaching 10K+ active gamers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex items-center justify-between md:flex-row flex-col gap-6">
                                <div className="md:w-1/3">
                                    <img 
                                        src={platformImage} 
                                        alt="Future Vision" 
                                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-purple-200">2025 - Global Expansion</h3>
                                            <p className="text-purple-400">Expanding our reach worldwide with innovative gaming features</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="relative overflow-hidden rounded-xl mt-28">
                    <img 
                        src={heroBanner} 
                        alt="Join PixelHood" 
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#000000b2] flex items-center justify-center pr-8">
                        <div className="text-center  space-y-6">
                            <h2 className="text-4xl font-bold text-white">
                                Join the PixelHood Community
                            </h2>
                            <p className="text-purple-200 text-lg leading-relaxed">
                                Ready to dive into the world of gaming? Sign up today and start exploring thousands of amazing games with fellow gamers from around the globe!
                            </p>
                            <Link
                                to="/auth/register"
                                className="inline-block px-8 py-4 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition text-white font-bold rounded-full text-lg shadow-lg hover:shadow-purple-500/25"
                            >
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;