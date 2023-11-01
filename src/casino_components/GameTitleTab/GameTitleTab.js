import React from 'react';

export default function GameTitleTab(props) {
    const { GameTitle, RoundID } = props;

    return (
        <div className="bg-[#2A2A2A] border-b px-3 py-1 md:py-3 flex justify-between items-center text-white">
            <span className="font-bold text-sm">
                {GameTitle}
            </span>
            <span className="font-normal text-sm">
                RoundID : {RoundID}
            </span>
        </div>
    );
}

