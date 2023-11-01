import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
export default function BackLayMobile() {
    return (
        <div class="text-center flex justify-end items-center space-x-0.5 pt-2  text-[16px] bg-white text-black uppercase">
            <div class=" w-24 text-center py-0.5 cursor-pointer flex justify-center items-center space-x-1 ">  <span className="text-[12px] ">
                                      LAGAI
                                    </span>
                                    <br />
                                    <span className="flex justify-center items-center">
                                      <BsArrowDownShort className='bg-[#4fa0e7] text-white h-4 w-4 rounded-full' size={16} />
                                    </span></div>
            <div class="  w-24 text-center py-0.5 cursor-pointer flex justify-center items-center space-x-1 "><span className="text-[12px]">
                                      KHAI
                                    </span>
                                    <span><BsArrowDownShort className='bg-[#FAA9BA] text-white h-4 w-4 rounded-full' size={16} /></span></div>
        </div>
    );
}

