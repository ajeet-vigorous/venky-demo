import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
export default function BackLayDesktop() {
    return (
        <div class="text-center flex justify-end bg-white items-center pt-2">
            <div class="w-24 font-semibold text-[13px] text-transparent bg-transparent py-1">Lay</div>
            <div class="w-24 font-semibold text-[13px] text-transparent bg-transparent py-1">Lay</div>
            <div class="w-24 text-center py-0.5 cursor-pointer">
                <span className="text-[16px] ">
                    LAGAI
                </span>
                <br />
                <span className="flex justify-center items-center">
                    <BsArrowDownShort className='bg-[#4fa0e7] text-white h-4 w-4 rounded-full' size={16} />
                </span>
            </div>
            <div class="w-24 lg:pb-3 flex space-x-2 py-0.5 cursor-pointer">
                <span className="text-[16px]">
                    KHAI
                </span>
                <span><BsArrowDownShort className='bg-[#FAA9BA] text-white h-4 w-4 rounded-full' size={16} /></span>
            </div>
            {/* <div class="w-24 font-semibold text-[13px] text-transparent bg-transparent py-1">Lay</div> */}
            <div class="w-24 font-semibold text-[13px] text-transparent bg-transparent py-1">Lay</div>
        </div>
    );
}

