import React from 'react';
import BetLockedRounded from "../BetLockedRounded/BetLockedRounded";

export default function Card(props) {
    const { Data, num, handleBackOpen } = props;
    return (
        <div className="w-full">
            <div className="relative">
                <img src={`/assets/images/${num}.jpg`} alt="aaaaaa" className='h-14 w-12 flex justify-center items-center' />
                {Data.gstatus === "0" ? <BetLockedRounded /> :
                    <div onClick={() => handleBackOpen({ Data, type: "Yes", odds: Data.rate, name: Data.nat, selectionId: Data.sid, marketid: Data.mid, betFor: Data.names })} className="h-14 w-12 absolute top-0 cursor-pointer">
                        <img src={`/assets/images/${num}.jpg`} alt="aaaaaa" />
                    </div>
                }
            </div>
            <p className=" flex justify-center items-center text-center w-full">0</p>
        </div>
    );
}