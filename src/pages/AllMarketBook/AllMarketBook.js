import React from "react";
import "./AllMarketBook.css";
import Sidebar from "../../components/Sidebar/Sidebar";
const AllMarketBook = () => {
    return (
        <div>
            <Sidebar />
            <div className="my-market-main">
                <div className="my-mart-div">MY MARKET</div>
                <div className="no-reacod-div">No Record Found</div>
            </div>
        </div>
    );
};

export default AllMarketBook;