import React from 'react';

export default function GameCard(props) {
    const { Data, handleBackOpen } = props;

    return (
        <div onClick={() => handleBackOpen(Data)} className="w-full h-full bg-[#098495] flex justify-center items-center cursor-pointer">
            <span>
                <p className="font-bold">{Data.nat}</p>
                <p>{Data.odds}</p>
            </span>
        </div>
    );
}

