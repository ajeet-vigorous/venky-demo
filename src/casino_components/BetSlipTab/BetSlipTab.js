import React from 'react';

export default function BetSlipTab(props) {
    const { setEditStakeOpen } = props;

    return (
        <div className="bg-[#2A2A2A] flex justify-between items-center rounded py-2 px-2 text-white text-sm font-medium">
            <span>BetSlip</span>
            <button onClick={() => setEditStakeOpen()} className='inline-flex items-center justify-center w-full px-2 py-0.5 text-sm  leading-none text-black bg-[#FFFAEC] border border-transparent rounded-full md:w-auto hover:bg-[#FFFAEC]  focus:ring-2 focus:ring-offset-2 focus:ring-[#FFFAEC]'>Edit Stake</button>
        </div>
    );
}

