import React from "react";
import "./LiveBetHistory.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
const LiveBetHistory = () => {
    return (
        <div>
            <Sidebar />
            <div className="live-bet-his-main">
                <div className="client-live-game">
                    <span>CLIENT LIVE GAME BETS REPORT</span>
                    <select>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div className="live-casino-date-main">
                    <input type="date" className="live-casino-input" value="2002-12-09" />
                    <input type="date" className="live-casino-input" value="2002-12-09" />
                    <input
                        type="text"
                        placeholder="Users"
                        className="live-casino-input"
                    />
                    <select>
                        <option>ALL Game</option>
                        <option>Live T20</option>
                        <option>Andar Bahar</option>
                        <option>One Day</option>
                        <option>7up & Down</option>
                        <option>32 Card Casino</option>
                        <option>Dragon Tiger</option>
                        <option>Test Teenpatti</option>
                    </select>
                    <select>
                        <option>Settle</option>
                        <option>Open</option>
                    </select>
                    <button>Filter</button>
                </div>
                <div className="live-casino-table-main">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>S.No.</td>
                                <td>Client</td>
                                <td>Description</td>
                                <td>Selection</td>
                                <td>Type</td>
                                <td>Odds</td>
                                <td>Stack</td>
                                <td>Date</td>
                                <td>P_L</td>
                                <td>Profit </td>
                                <td>Liability</td>
                                <td>Bet type </td>
                                <td>Status</td>
                                <td>IP</td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default LiveBetHistory;
