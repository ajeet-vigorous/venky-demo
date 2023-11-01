import React from 'react';

export default function BackDesktop() {
    return (
        <div className="flex flex-row-reverse divide-x-2 divide-gray-200">
            <div className="border-l-2 w-24 text-center py-0.5 cursor-pointer match_bg_blue_index-0">
                <span className="text-[13px] font-semibold">00</span><br />
                <span className="text-[10px]">0</span>
            </div>
            <div className="w-24 text-center py-0.5 match_bg_blue_index-2" >
                <span className="text-[13px] font-semibold">00</span><br />
                <span className="text-[10px]">0</span>
            </div>
            <div className="w-24 text-center py-0.5 match_bg_blue_index-2" >
                <span className="text-[13px] font-semibold">00</span><br />
                <span className="text-[10px]">0</span>
            </div>
        </div>
    );
}

