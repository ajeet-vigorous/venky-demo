import React from 'react';
import moment from "moment";

export default function MyBetList(props) {
    const { listfnmatchItems, offset } = props;

    return (
        <div className="overflow-hidden w-full">
            <div className="max-w-full overflow-auto ">
                <div className="inline-block min-w-full ">
                    <div className="overflow-hidden w-full ">
                        <table className="min-w-full capitalize border border-collapse ">
                            <tr className="w-full text-white text-[0.8125rem] font-semibold bg-[#265467] text-center">
                                <th className="px-[6px] py-1 whitespace-nowrap">
                                    Sr. No.
                                </th>
                                <th className="px-[6px] py-1 whitespace-nowrap">
                                    Runner
                                </th>
                                <th className="px-[6px] py-1 whitespace-nowrap">
                                    odds
                                </th>
                                <th className="px-[6px] py-1 whitespace-nowrap">
                                    Stake
                                </th>
                                <th className="px-[6px] py-1 whitespace-nowrap">
                                    P&L
                                </th>
                            </tr>
                            {listfnmatchItems &&
                                listfnmatchItems.MatchAndBetfair &&
                                listfnmatchItems.MatchAndBetfair.length > 0 ? (
                                listfnmatchItems.MatchAndBetfair.map(
                                    (elementInner, indexInner) => (
                                        <React.Fragment>
                                            <tr className="w-full text-black text-[0.8125rem] border-b border-t text-center bg-[#72BBEF] divide-x-2 divide-white">
                                                <td className="px-6 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                                                    {offset + indexInner + 1}
                                                </td>
                                                <td className="px-[6px] py-1 whitespace-nowrap">
                                                    <div>
                                                        {elementInner.marketName} -&gt; <br />
                                                        <span className="font-bold">
                                                            {" "}
                                                            {elementInner.selectionName}
                                                        </span>
                                                        <br />
                                                        {moment(
                                                            parseInt(elementInner.created_at) *
                                                            1000,
                                                        )
                                                            .utcOffset("+05:30")
                                                            .format("DD MMM, YYYY HH:mm A")}
                                                    </div>
                                                </td>
                                                <td className="px-[6px] py-1 whitespace-nowrap">
                                                    {elementInner.odds}
                                                </td>
                                                <td className="px-[6px] py-1 whitespace-nowrap">
                                                    {elementInner.stack}
                                                </td>
                                                <td className="px-[6px] py-1 whitespace-nowrap">
                                                    {elementInner.p_l}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ),
                                )
                            ) : (
                                <tr className="text-[#495057] text-sm text-center">
                                    <td className="py-1 px-[6px] whitespace-nowrap">
                                        {" "}
                                        There are no records to show
                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

