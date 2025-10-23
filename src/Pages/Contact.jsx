import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import contactBanner from '../assets/contact-banner.jpg';
import Container from '../Components/Container';

const Contact = () => {
    return (
        <Container>
            <div className="mt-16 py-12 space-y-12">

                <div className="relative overflow-hidden rounded-xl">
                    <img
                        src={contactBanner}
                        alt="Contact Us Banner"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#000000e0]  flex items-center justify-center">
                        <div className="text-center space-y-6 px-4">
                            <h1 className="text-5xl md:text-7xl font-bold text-purple-200 drop-shadow-lg">
                                Get in Touch
                            </h1>
                            <p className="text-xl md:text-2xl text-purple-300 font-semibold max-w-3xl mx-auto leading-relaxed">
                                We're here to help! Reach out to us for support, feedback, or partnership opportunities.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bg-[#000000b2] p-8 rounded-xl grid md:grid-cols-2 gap-8">
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


                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-purple-200 text-center  block px-4 py-2">
                        <span className='border-b-4 border-purple-600 px-5 pb-1'>Send Us a Message</span>
                    </h2>
                    <form className="max-w-3xl mx-auto space-y-6 bg-[#00000050] p-8 rounded-xl shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-purple-300 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-transparent border border-purple-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-purple-300 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-transparent border border-purple-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-purple-300 font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-transparent border border-purple-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-purple-300 font-semibold mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-transparent border border-purple-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] text-white font-bold rounded-full flex items-center justify-center gap-2 transition"
                        >
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>

                
                <div className="text-center space-y-4 bg-[#000000b2] p-6 rounded-xl">
                    <h2 className="text-3xl font-bold text-purple-200">Support Hours</h2>
                    <p className="text-purple-300 font-semibold">
                        Monday - Friday: 9:00 AM - 6:00 PM (UTC+6)
                        Saturday - Sunday: 10:00 AM - 4:00 PM (UTC+6)
                    </p>
                    <p className="text-purple-400 text-lg">We respond within 24 hours!</p>
                </div>
            </div>
        </Container>
    );
};

export default Contact;