import React from "react";
import "./AccountStartment.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
const AccountStatement = () => {
  // const myComponent = {
  //   height: "300px",
  //   overflowX: "scroll",
  //   overflowY: "hidden",
  // };
  return (
    <div>
      <Sidebar />

      <div>
        <div className="acct-state">
          <span>ACCOUNT STATEMENT</span>
          <button className="back-btn">Back</button>
        </div>

        <div className="date-search">
          <div className="date-div">
            <input type="date" id="date-input" value="2000-05-05" />
            <input type="date" id="date-input" value="2000-05-05" />
          </div>
          <div className="A-btn">
            <button className="search-btn">Search</button>
            <button className="reset-btn">Reset</button>
            <button className="all-btn">ALL</button>
            <button className="pl-btn">P&L</button>
            <button className="pdc-btn">PDC</button>
            <button className="acct-btn">Account</button>
          </div>
        </div>
        <div className="acct-stmt-table">
          <Table
            striped
            bordered
            hover
            style={{ marginTop: "10px", width: "84%" }}
          >
            <tbody className="table-name">
              <tr>
                <td>Date</td>
                <td> Description</td>
                <td>Prev. Bal</td>
                <td> CR</td>
                <td>DR</td>
                <td>Comm+</td>
                <td>Comm-</td>
                <td>Balance</td>
              </tr>
              <tr>
                <td>16 Sept 2023 00:18 am</td>
                <td>
                  Cricket / England v New Zealand / Match / England v New
                  Zealand / 32632686 / England
                </td>
                <td>25000</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>25000</td>
              </tr>
              <tr>
                <td>16 Sept 2023 00:18 am</td>
                <td>
                  Cricket / England v New Zealand / Match / England v New
                  Zealand / 32632686 / England
                </td>
                <td>25000</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>25000</td>
              </tr>
              <tr>
                <td>16 Sept 2023 00:18 am</td>
                <td>
                  Cricket / England v New Zealand / Match / England v New
                  Zealand / 32632686 / England
                </td>
                <td>25000</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>25000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
