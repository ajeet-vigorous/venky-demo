import React from 'react';

export default function BetPlaceCasinoDesktop(props) {
    const { betSlipData, inputChange, decreaseCount, count, increaseCount, placeBet, handleClose } = props;

    console.log("betSlipDatabetSlipDatabetSlipData", betSlipData);

    return (
        <div className="bg-[#72BBEF] p-2 space-y-2">
            aflsdjfljalsdfl;
            <div className='flex justify-between items-center p-3 font-medium text-base'>
                <span>TIE</span>
                <span className="py-1 px-1.5 font-bold bg-white" onClick={decreaseCount}>-</span>
            </div>
            <div class="p-1 flex justify-between items-center space-x-3 text-black w-full">
                <div className="flex justify-between bg-white rounded w-full divide-x divide-gray-300">
                    <span className="py-1 px-1.5 font-bold cursor-pointer" onClick={decreaseCount}>-</span>
                    <span className="px-1.5 py-1 bg-white text-sm w-full text-center">{count}</span>
                    <span className="py-1 px-1.5 font-bold cursor-pointer" onClick={increaseCount}>+</span>
                </div>
                <div className="flex justify-between bg-white rounded w-full divide-x divide-gray-300">
                    <span className="py-1 px-1.5 font-bold cursor-pointer" >-</span>
                    <input className="py-1 px-1.5 focus:outline-none w-full text-center" type="text" placeholder="0" value={betSlipData.stake} onChange={inputChange} />
                    <span className="py-1 px-1.5 font-bold cursor-pointer">+</span>
                </div>
            </div>
            <div className="flex justify-end items-center space-x-2 w-full">
                <button className="bg-[#D83234] rounded-sm px-4 py-2 text-sm text-white w-full"
                    onClick={() => handleClose()}>Reset Bet
                </button>
                <button className="bg-[#2B5991] rounded-sm px-4 py-2 text-sm text-white w-full"
                    onClick={() => placeBet()}>Place Bet
                </button>
            </div>
        </div>

    );
}

