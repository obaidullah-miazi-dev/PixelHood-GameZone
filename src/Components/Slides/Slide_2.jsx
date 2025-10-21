import React from 'react';

const Slide_2 = () => {
    return (
        <div className='w-full flex justify-between items-center mt-12 bg-[#00000036] p-10 px-16'>
            <div className='flex-1 w-full space-y-4'>
                <h2 className='md:text-6xl text-4xl font-bold'>Batman: Arkham Knight</h2>
                <p className='px-0 md:pr-40'>
                    Batman: Arkham Knight concludes the Arkham trilogy with a Gotham under siege by Scarecrow and the Arkham Knight. Players use gadgets, stealth, and brutal combat to dismantle the militia, all while uncovering Batman's past. The game features a drivable Batmobile and a richly detailed urban nightscape.
                </p>
            </div>
            <div className='flex-1 h-88'>
                <img className=' w-full mx-auto rounded-md' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/capsule_616x353.jpg?t=1745534372" alt="" />
            </div>
        </div>
    );
};

export default Slide_2;