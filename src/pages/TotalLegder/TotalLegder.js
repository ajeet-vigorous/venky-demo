import React from "react";
import "./TotalLegder.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
const TotalLedger = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <div className="lena-dena">
                    <span>COMPANY LENA DENA</span>
                    <button className="back-btn">Back</button>
                </div>
                <div className="date-search">
                    <input type="date" value="2000-05-05" />
                    <input type="date" value="2000-05-05" />
                    <select>
                        <option>All</option>
                        <option>Settlement</option>
                    </select>
                    <button className="lena-dena-search">Search</button>
                </div>
                <hr />
                <div className="score-main">
                    <div className="score-lena">
                        <span className="lena">Lena :</span>
                        <span className="lena-score">0.00</span>
                    </div>
                    <div className="score-dena">
                        <span className="dena">Dena:</span>
                        <span className="dena-score">0.00</span>
                    </div>
                    <div className="score-balance">

                        <span className="balance">Balance:</span>
                        <span className="dena-score">0 Dena Hai</span>
                    </div>
                </div>
                <div className="lena-dena-table">
                    <Table striped bordered hover style={{ width: "83%" }}>
                        <tbody>
                            <tr>
                                <td>Date</td>
                                <td>Collection Name</td>
                                <td> Debit</td>
                                <td>Credit</td>
                                <td>Balance</td>
                                <td>Payment Type</td>
                                <td>Remark</td>
                            </tr>
                            <tr>
                                <td>16 Sept 2023 00:18 am</td>
                                <td>Cricket - England v New Zealand</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>-</td>
                                <td>User Minus</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default TotalLedger;
