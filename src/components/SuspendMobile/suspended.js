import React from 'react';

export default function SuspendMobile() {
  return (
    <div className="flex justify-end items-center divide-x-2 divide-gray-200 relative">
      <div className="flex flex-row-reverse divide-x-2 divide-gray-200 ">
        <div className="border-l-2 w-24 text-center py-0.5  cursor-pointer match_bg_blue_index-0" >
          <p className="text-[13px] font-semibold">00</p>
          <p className="text-[11px]">0</p>
        </div>
      </div>
      <div className="flex divide-x-2 divide-gray-200">
        <div className="w-24 text-center py-0.5 cursor-pointer match_bg_pink_index-0" >
          <p className="text-[13px] font-medium">00</p>
          <p className="text-[11px]">0</p>
        </div>
      </div>
      <div className='absolute bg-black/50 w-full h-full flex justify-center items-center' style={{ backgroundImage: `url("/images/supend_bg.png")` }}>
        <h2 className='text-white text-xs font-bold'>
          <span>
            Suspended
          </span>
        </h2>
      </div>
    </div>
  );
}

