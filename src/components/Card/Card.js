import React from 'react';
import BetLocked from "../BetLocked/BetLocked";

export default function Card(props) {
    const { Data, num, handleBackOpen } = props;
    return (
        <div className="w-full">
            <div className="relative">
                <div onClick={() => handleBackOpen(Data)} className="h-16 w-14 cursor-pointer">
                    <img src={`/images/${num}.jpg`} alt="aaaaaa" />
                </div>
                {Data.data.gstatus === "0" ? <BetLocked /> : null}
            </div>
        </div>
    );
}