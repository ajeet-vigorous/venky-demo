import React from 'react';
import moment from "moment";
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

export default function MyBetHeader(props) {
    const { listfnmatchItems, myBetOpenStatus, myBetOpen } = props;
    console.log("myBetOpenStatusmyBetOpenStatusmyBetOpenStatus", props.myBetOpenStatus);

    return (
        <div className="bg-[#1C77C7] flex justify-between items-center py-1.5 px-1 text-white text-sm font-medium">
            <span>
                My Bets (
                {listfnmatchItems && listfnmatchItems.MatchAndBetfair && listfnmatchItems.MatchAndBetfair.length ? listfnmatchItems.MatchAndBetfair.length : "0"}
                )
            </span>
            {myBetOpenStatus === true ?
                <span onClick={() => myBetOpen()} className="cursor-pointer text-black">
                    <AiFillCaretUp />
                </span> : <span onClick={() => myBetOpen()} className="cursor-pointer text-black">
                    <AiFillCaretDown />
                </span>}
        </div>
    );
}

