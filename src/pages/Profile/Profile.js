import React from "react";
import "./Profile.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";

const Profile = () => {
    return (
        <div className="mainclass">
            <Sidebar />
            <div style={{ display: "flex" }}>
                <div className="profile-main">
                    <div className="rate-info">RATE INFORMATION</div>
                    <div className="rate-main">
                        <div className="rate-differ">RATE DIFFRENCE</div>
                        <div>
                            <select className="p-2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div>
                            <button className="upt-btn">Update</button>
                        </div>
                    </div>
                    <div className="per-info">PERSONAL INFORMATION</div>

                    <Table striped bordered hover>
                        <tbody className="table-name">
                            <tr>
                                <td>Client Name</td>
                                <td>JK CLIENT</td>
                            </tr>
                            <tr>
                                <td>Client Code</td>
                                <td>c1150</td>
                            </tr>
                            <tr>
                                <td>Chips</td>
                                <td> 25000.00</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <td>Contact No.</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Date Of Joining</td>
                                <td>Thu Jan 13 22:56:18 IST 2022</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>INDIA</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="com-info">COMPANY INFORMATION</div>
                    <Table striped bordered hover>
                        <tbody className="company-contact">
                            <tr>
                                <td>Help Line No.</td>
                                <td>+91 1234567890</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
