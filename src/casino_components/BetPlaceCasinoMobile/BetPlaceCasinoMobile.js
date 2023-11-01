import React from 'react';

export default function BetPlaceDesktop(props) {
    const { betSlipData, finalMatchStack, updateStackOnclic, inputChange, decreaseCount, count, increaseCount, placeBet, handlestakeOpen, handleBetClose } = props;

    return (
        <div>
            <div className="justify-end items-center space-x-1 text-black bg-[#72BBEF] ">
                <div className="">
                    <div className="w-full flex">
                        <p className="text-center text-black font-semibold text-[14px] w-full">{" "}Odds</p>
                        <p className="text-center text-black font-semibold text-[14px] bg-[#72BBEF] w-full">{" "}Stake</p>
                    </div>
                    <div className="w-full bg-white flex flex-row gap-4 p-2">
                        <div className="bg-gray-400 rounded w-full flex items-center">
                            <span className="px-2 font-bold cursor-pointer" onClick={decreaseCount} >-</span>
                            <span className="bg-white px-2 py-1 text-sm w-full border text-center">{count}</span>
                            <span className=" px-2 font-bold cursor-pointer" onClick={increaseCount}>+</span>
                        </div>

                        <input className="focus:outline-none rounded px-2 w-full border" type="number" placeholder="0"
                            value={betSlipData.stake} onChange={inputChange} />
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center divide-x border divide-black/20 border-black/20   py-2">
                {finalMatchStack.map((element, index) => (
                    <button className="bg-gradient-to-b from-[#5FCBE5] to-[#2CA3C2] hover:from-[#2CA3C2] hover:to-[#5FCBE5] hover:text-white  px-3 py-1 text-sm font-medium"
                        onClick={() => updateStackOnclic(element)}>+{element}
                    </button>
                ))}
            </div>

            <p className="py-2 text-[14px] font-medium">Profit : {betSlipData.stake}</p>

            <div className="flex flex-row-reverse gap-2">
                <button className="bg-gradient-to-b from-[#07ae07] to-[#026e02] rounded px-4 py-2 text-sm text-white w-full"
                    onClick={() => placeBet()}>Place Bet
                </button>
                <button className=" bg-gradient-to-b from-[#fdba06] to-[#e5a700] rounded px-4 py-2 text-sm w-full"
                    onClick={() => handlestakeOpen()}>Edit Stake
                </button>
                <button className="  bg-gradient-to-b from-[#fe4f70] to-[#c3062a] rounded px-4 py-2 text-sm text-white w-full"
                    onClick={() => handleBetClose()}>Cancel
                </button>
            </div>
        </div>
    );
}

