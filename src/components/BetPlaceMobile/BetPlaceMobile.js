import React from 'react';

export default function BetPlaceDesktop(props) {
    const { eventdetalsItems, betSlipData, finalMatchStack, updateStackOnclic, inputChange, decreaseCount, count, increaseCount, placeBet3, handleFancyStakeOpenMob, handleClosefancyMob } = props;

    return (
        
        <div className="border-2 border-black">
            {betSlipData.RunnerName}
            <div class={`p-1 flex justify-end items-center space-x-1 text-black  ${betSlipData.type === "Yes" ? "bg-[#72BBEF]" : "bg-[#FAA9BA]"}`}>
                <span className="px-2">{betSlipData.element.selectionName}</span>
                <span className="bg-gray-400 rounded">
                    <span className="px-2 font-bold cursor-pointer" onClick={decreaseCount}>-</span>
                    <span className="bg-white px-2 py-1 text-sm">{count}</span>
                    <span className=" px-2 font-bold cursor-pointer" onClick={increaseCount}>+</span>
                </span>
                <input className="focus:outline-none rounded px-2 w-32" type="number" placeholder="0" value={betSlipData.stake} onChange={inputChange} />
            </div>
            {eventdetalsItems && eventdetalsItems.UserSportSettings && eventdetalsItems.UserSportSettings.length > 0 ? eventdetalsItems.UserSportSettings.map((element, index) => (
                <div className="py-2">
                    <div className="flex justify-start items-center divide-x border divide-black/20 border-black/20   py-2">
                        {finalMatchStack.map((element, index) => (
                            <button class={`px-3 py-1 text-sm font-medium ${betSlipData.type === "Yes" ? "bg-gradient-to-b from-[#5FCBE5] to-[#2CA3C2] hover:from-[#2CA3C2] hover:to-[#5FCBE5]" : "bg-gradient-to-b from-[#FABBBD] to-[#EB7D84] hover:from-[#EB7D84] hover:to-[#FABBBD]"}`}
                                onClick={() => updateStackOnclic(element)}> {element}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-row-reverse gap-2">
                        <button className="bg-gradient-to-b from-[#07ae07] to-[#026e02] rounded px-4 py-2 text-sm text-white w-full"
                            onClick={() => placeBet3()}>Place Bet
                        </button>
                        <button className="bg-gradient-to-b from-[#fdba06] to-[#e5a700] rounded px-4 py-2 text-sm w-full"
                            onClick={() => handleFancyStakeOpenMob()}>Edit Stake
                        </button>
                        <button className="bg-gradient-to-b from-[#fe4f70] to-[#c3062a] rounded px-4 py-2 text-sm text-white w-full"
                            onClick={() => handleClosefancyMob()}>Cancel
                        </button>
                    </div>
                </div>
            )) : null}
        </div>
       
    );
}

