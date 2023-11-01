import React from "react";
import "./ProfitAndLoss.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
const ProfitLoss = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div className="profit-lisiting">
          <div>
            <span>PROFIT LOSS LISTING</span>
            <select>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <button className="profit-btn">Back</button>
        </div>
        <div className="select-date">
          <select className="select-game">
            <option>All</option>
            <option>Cricket</option>
            <option>Soccer</option>
            <option>Tennis</option>
            <option>Fancy</option>
            <option>Live Casino</option>
          </select>
          <input type="date" className="profit-loss-input" value="2000-05-05" />
          <input type="date" className="profit-loss-input" value="2000-05-05" />
          <button className="filter-btn">Filter</button>
        </div>
        <div className="profit-loss-table-div">
          <Table striped bordered style={{ width: "83%", marginTop: "10px" }}>
            <tbody>
              <tr>
                <td>S.No.</td>
                <td>Event Name</td>
                <td> Market</td>
                <td>P_L</td>
                <td>Commission</td>
                <td>Created On</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
