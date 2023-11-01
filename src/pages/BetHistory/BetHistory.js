import React from "react";
import "./BetHistory.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
const BetHistory = () => {
  return (
    <div>
      <Sidebar />
      <div className="bet-history-main">
        <div className="bet-history">
          <span>BET HISTORY</span>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>

        <div className="bet-history-date">
          <input type="date" className="bet-history-input" value="2000-05-05" />

          <input type="date" className="bet-history-input" value="2000-05-05" />
          <input
            type="text"
            placeholder="Search..."
            className="bet-history-input"
          />
          <select className="bet-hitory-select">
            <option>Settled</option>
            <option>Open</option>
          </select>
          <button className="bet-filter">Filter</button>
        </div>
        <div className="all-games">
          <div>All</div>
          <div>Cricket</div>
          <div>Tennis</div>
          <div>Soccer</div>
          <div>Fancy</div>
        </div>
        <div className="bet-history-table">
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
            <tbody>
              <tr></tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
