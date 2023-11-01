import React from 'react';

export default function GameCard2(props) {
    const { title, Data, handleBackOpen } = props;

    return (
        <div onClick={() => handleBackOpen(Data)} class="w-full h-full bg-[#098495] flex justify-center items-center cursor-pointer py-2">
            <p className="text-[15px] font-semibold text-white">{title}</p>
        </div>
    );
}

