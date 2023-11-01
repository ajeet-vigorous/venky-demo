import React from 'react';

export default function BetPlaceDesktop(props) {
    const { updateStackOnclic, inputChange, decreaseCount, count, increaseCount, placeBet, handleClose } = props;

    return (
        <div className="bg-[#72BBEF] p-2">
            <div className='p-3 font-medium text-base'>
                Only 1 over run NED
            </div>
            <div class="flex justify-between items-center space-x-1 text-black">
                <div className="bg-white rounded w-full flex divide-x divide-gray-300">
                    <span className="p-2 font-bold cursor-pointer" onClick={decreaseCount}>-</span>
                    <span className="p-2 text-sm w-full">{count}</span>
                    <span className="p-2 font-bold cursor-pointer" onClick={increaseCount}>+</span>
                </div>
                <div className="bg-white rounded w-full flex divide-x divide-gray-300">
                    <span className="p-2 font-extrabold cursor-pointer" onClick={decreaseCount}>-</span>
                    <input className="focus:outline-none rounded px-2 w-full" placeholder="0" value="0" onChange={inputChange} />
                    <span className="p-2 font-bold cursor-pointer" onClick={increaseCount}>+</span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 p-3">
                <button class="rounded px-1.5 py-1 text-xs bg-[#CBCBCB] font-bold" onClick={() => updateStackOnclic()}>500</button>
                <button class="rounded px-1.5 py-1 text-xs bg-[#CBCBCB] font-bold" onClick={() => updateStackOnclic()}>1000</button>
                <button class="rounded px-1.5 py-1 text-xs bg-[#CBCBCB] font-bold" onClick={() => updateStackOnclic()}>5000</button>
                <button class="rounded px-1.5 py-1 text-xs bg-[#CBCBCB] font-bold" onClick={() => updateStackOnclic()}>10000</button>
                <button class="rounded px-1.5 py-1 text-xs bg-[#CBCBCB] font-bold" onClick={() => updateStackOnclic()}>50000</button>
                <button class="rounded px-1.5 py-1 text-xs bg-[#CBCBCB] font-bold" onClick={() => updateStackOnclic()}>Clear</button>
            </div>
            <div className="flex justify-end items-center space-x-2 py-2 whitespace-nowrap w-full">
                <button className="bg-[#D2322E] rounded-sm px-4 py-2 text-sm text-white w-full" onClick={() => handleClose()}>Cancel</button>
                <button className="bg-[#2F5A93] rounded-sm px-4 py-2 text-sm text-white w-full" onClick={() => placeBet()}>Place Bet</button>
            </div>
        </div>
    );
}

