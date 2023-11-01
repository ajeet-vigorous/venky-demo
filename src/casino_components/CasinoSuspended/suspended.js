import React from 'react';
import { TfiLock, } from "react-icons/tfi";

export default function CasinoSuspended() {
    return (
        <div class="w-full h-[44px] bg-[#72BBEF]">
            <div className="flex justify-center items-center h-[44px] relative">
                <span>
                    <p className="font-bold">--</p>
                    <p>--</p>
                </span>
                <div className="absolute bg-black/70 w-full h-[44px] flex justify-center items-center"
                // style={{ backgroundImage: `url("/images/supend_bg.png")` }}
                >
                    <h2>
                        <TfiLock size={16} className='text-white'/>
                    </h2>
                </div>
            </div>
            <p className="text-red-500">0</p>
        </div>
    );
}

