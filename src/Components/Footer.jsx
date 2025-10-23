import React from 'react';
import Container from './Container';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/PixelHood-logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#000000b2] text-white pt-12 pb-6 mt-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="space-y-4">
                        <img 
                            src={logo} 
                            alt="PixelHood Logo" 
                            className="w-48"
                        />
                        <p className="text-purple-300 font-semibold text-sm md:pr-48">
                            Your ultimate destination for discovering and enjoying the best pixel games.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/pixelhood" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com/pixelhood" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com/pixelhood" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                   
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-purple-200 border-b-2 border-purple-600 inline-block">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-purple-300 hover:text-purple-400 transition">Home</Link></li>
                            <li><Link to="/about" className="text-purple-300 hover:text-purple-400 transition">About Us</Link></li>
                            <li><Link to="/games" className="text-purple-300 hover:text-purple-400 transition">Games</Link></li>
                            <li><Link to="/contact" className="text-purple-300 hover:text-purple-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-purple-200 border-b-2 border-purple-600 inline-block">Contact Us</h3>
                        <div className="space-y-2 text-purple-300 font-semibold text-sm">
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>support@pixelhood.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>+1-800-PIXELHOOD</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>123 Gaming Lane, Pixel City, PC 12345</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="mt-8 pt-6 border-t border-purple-600/30 text-center text-purple-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} PixelHood. All rights reserved.</p>
                    <div className="mt-2 space-x-4 flex justify-center">
                        <p className="hover:text-purple-300 transition">Terms of Service</p>
                        <p  className="hover:text-purple-300 transition">Privacy Policy</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;