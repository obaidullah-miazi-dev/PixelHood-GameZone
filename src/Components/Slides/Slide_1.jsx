import React from 'react';

const Slide_1 = () => {
    return (
        <div className='w-full flex justify-between items-center mt-12 bg-[#00000036] p-10 px-16'>
            <div className='flex-1 w-full space-y-4'>
                <span className='bg-red-500 font-bold'>MARVEL</span>
                <h2 className='md:text-7xl text-4xl font-bold'>Spider-Man</h2>
                <p className='px-0 md:pr-40'>
                    Marvel's Spider-Man lets players swing through an open-world New York City as Peter Parker battles villains like Doc Ock and Mister Negative. Combining web-slinging traversal, combo-based combat, and heartfelt storytelling, it's a love letter to the Spider-Man comics with seamless urban exploration.
                </p>
            </div>
            <div className='flex-1 h-88'>
                <img className='w-full mx-auto rounded-md' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg?t=1750955096" alt="" />
            </div>
        </div>
    );
};

export default Slide_1;