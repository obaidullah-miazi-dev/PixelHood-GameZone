import { Send } from 'lucide-react';
import Container from './Container';
import Swal from 'sweetalert2';



const Newsletter = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
         Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thanks for Subscribing",
                    showConfirmButton: false,
                    timer: 1500
                });

    };


    return (
        <Container>
            <div className=" boxd relative overflow-hidden rounded-xl my-18 h-96">
                <img
                    src="https://wstatic-prod-boc.krafton.com/common/content/news/20251015/dy7W1yxy_thumb.jpg"
                    alt="Newsletter Background"
                    className="w-full h-96 object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-[#0000009a]  flex items-center justify-center">
                    <div className="text-center space-y-6 px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-purple-200 drop-shadow-lg">
                            Stay Updated with PixelHood
                        </h2>
                        <p className="text-xl text-purple-300 font-semibold max-w-2xl mx-auto leading-relaxed">
                            Get the latest game releases, exclusive offers, and gaming tips delivered straight to your inbox!
                        </p>
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-2">
                            <div className="w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 bg-transparent border border-purple-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] text-white font-bold rounded-lg flex items-center justify-center  gap-2 transition"
                            >
                                <Send size={18} /> Subscribe
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Newsletter;