import React from 'react';
import contactBanner from '../assets/contact-banner.jpg'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const ContactSection = () => {
    return (
        <div className="bg-[#000000b2] p-8 rounded-xl grid md:grid-cols-2 gap-8 w-11/12 mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-purple-200 border-b-4 border-purple-600 inline-block px-4 py-2">
                            Contact Info
                        </h2>
                        <div className="space-y-4 text-purple-300 font-semibold">
                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span>Email: support@pixelhood.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span>Phone: +1-800-558-87562</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span>Address: 23 Gaming Lane, Pixel City, Mongol Groho</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/pixelhood" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition">
                                <Facebook size={24} />
                            </a>
                            <a href="https://twitter.com/pixelhood" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition">
                                <Twitter size={24} />
                            </a>
                            <a href="https://instagram.com/pixelhood" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={contactBanner}
                            alt="contact us"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
    );
};

export default ContactSection;