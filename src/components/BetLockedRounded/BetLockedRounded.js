import React from 'react';
import { FaLock } from "react-icons/fa";

export default function BetLoked() {
  return (
    <div className="absolute top-0 bg-black/50 flex justify-center items-center w-full h-full rounded cursor-pointer">
      <FaLock size={16} className="text-white" />
    </div>
  );
}

