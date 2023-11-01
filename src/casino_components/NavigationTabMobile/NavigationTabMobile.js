import React from 'react';

export default function BetPlaceDesktop(props) {
    const { activeTab, handleTabClick } = props;

    return (
        <div className="text-[13px] bg-[#53555b] flex items-center w-full divide-x text-white lg:hidden  ">
            <button className={activeTab === 1 ? "p-[3px] w-full bg-[#8c0000]" : "p-[3px] w-full"} onClick={() => handleTabClick(1)}>Market</button>
            <button className={activeTab === 2 ? "p-[3px] w-full bg-[#8c0000]" : "p-[3px] w-full"} onClick={() => handleTabClick(2)}>My Bet</button>
            <button className={activeTab === 3 ? "p-[3px] w-full bg-[#8c0000]" : "p-[3px] w-full"} onClick={() => handleTabClick(3)}>Last Results</button>
        </div>

    );
}

