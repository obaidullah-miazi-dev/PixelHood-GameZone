import React from 'react';

const Slide_3 = () => {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center mt-12 bg-[#00000036] p-10 px-16 gap-5'>
            <div className='flex-1 w-full space-y-4'>
                <h2 className='md:text-7xl text-xl font-bold'>PUBG: Battlegrounds</h2>
                <p className='px-0 md:pr-40'>
                    PUBG: Battlegrounds is the pioneering battle royale where up to 100 players parachute onto a massive map, scavenge for gear, and fight to be the last survivor. Realistic ballistics, vehicle combat, and tense urban firefights define this multiplayer staple set across diverse terrains.
                </p>
            </div>
            <div className='flex-1 h-88'>
                <img className=' w-full mx-auto rounded-md' src="https://wstatic-prod-boc.krafton.com/common/content/news/20251015/dy7W1yxy_thumb.jpg" alt="" />
            </div>
        </div>
    );
};

export default Slide_3;