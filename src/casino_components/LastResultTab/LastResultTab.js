import React from 'react';

export default function LastResultTab(props) {
    const { } = props;

    return (
        <div className="bg-black border-b rounded-t-lg item-center h-10 lg:h-12 lg:p-4 p-3 flex justify-between">
            <span className="flex space-x-1 text-white text-bold text-[13px]">Last Result</span>
            <span className="text-white text-bold text-[13px]">View All</span>
        </div>
    );
}

