import React from 'react';
import { BiMessageRoundedCheck } from "react-icons/bi";

export default function EditStakeDesktop(props) {
    const { handleCurrentIndex, finalMatchStack, handlestakeClose, handleStakeInput } = props;

    return (
        <div className="grid grid-cols-5 gap-2  py-2">
            {finalMatchStack.map((element, index) => (
                <input className="bg-white text-black border border-black rounded px-8 py-1 text-xs"
                    type="text" value={element}
                    onChange={handleStakeInput}
                    onClick={() => handleCurrentIndex(index)}
                />
            ))}
            <button className="bg-[#29C20E] rounded px-4 py-2 text-sm text-white flex justify-center items-center mx-auto"
                onClick={() => handlestakeClose()}>
                <BiMessageRoundedCheck /> Save
            </button>
        </div>

    );
}

