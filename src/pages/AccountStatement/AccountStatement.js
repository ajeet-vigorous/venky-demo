// import React from "react";
// import "./AccountStartment.css";
// import Table from "react-bootstrap/Table";
// import Sidebar from "../../components/Sidebar/Sidebar";
// const AccountStatement = () => {
//   // const myComponent = {
//   //   height: "300px",
//   //   overflowX: "scroll",
//   //   overflowY: "hidden",
//   // };
//   return (
//     <div>
//       <Sidebar />

//       <div>
//         <div className="acct-state">
//           <span>ACCOUNT STATEMENT</span>
//           <button className="back-btn">Back</button>
//         </div>

//         <div className="date-search">
//           <div className="date-div">
//             <input type="date" id="date-input" value="2000-05-05" />
//             <input type="date" id="date-input" value="2000-05-05" />
//           </div>
//           <div className="A-btn">
//             <button className="search-btn">Search</button>
//             <button className="reset-btn">Reset</button>
//             <button className="all-btn">ALL</button>
//             <button className="pl-btn">P&L</button>
//             <button className="pdc-btn">PDC</button>
//             <button className="acct-btn">Account</button>
//           </div>
//         </div>
//         <div className="acct-stmt-table">
//           <Table
//             striped
//             bordered
//             hover
//             style={{ marginTop: "10px", width: "84%" }}
//           >
//             <tbody className="table-name">
//               <tr>
//                 <td>Date</td>
//                 <td> Description</td>
//                 <td>Prev. Bal</td>
//                 <td> CR</td>
//                 <td>DR</td>
//                 <td>Comm+</td>
//                 <td>Comm-</td>
//                 <td>Balance</td>
//               </tr>
//               <tr>
//                 <td>16 Sept 2023 00:18 am</td>
//                 <td>
//                   Cricket / England v New Zealand / Match / England v New
//                   Zealand / 32632686 / England
//                 </td>
//                 <td>25000</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>25000</td>
//               </tr>
//               <tr>
//                 <td>16 Sept 2023 00:18 am</td>
//                 <td>
//                   Cricket / England v New Zealand / Match / England v New
//                   Zealand / 32632686 / England
//                 </td>
//                 <td>25000</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>25000</td>
//               </tr>
//               <tr>
//                 <td>16 Sept 2023 00:18 am</td>
//                 <td>
//                   Cricket / England v New Zealand / Match / England v New
//                   Zealand / 32632686 / England
//                 </td>
//                 <td>25000</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>25000</td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountStatement;




// Implement For the  Custom Pagination

import React, { useEffect, useState } from "react";
import moment from 'moment';
import Pagination from '../../components/Pagination/Pagination'
import "./AccountStartment.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
import { httpPost } from "../../_helpers/http";

const AccountStatement = () => {

  let recordsPerPage = 2;

  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadListItem();
  }, [page, recordsPerPage]);

  const loadListItem = async () => {

    await httpPost('user/userStatement')
      .then(response => {
        const totalUsers = response.data.length;
        const totalPages = Math.ceil(totalUsers / recordsPerPage);
        const start = (page - 1) * recordsPerPage;
        const end = start + recordsPerPage;

        setListItems(response.data.slice(start, end));
        setTotalPages(totalPages);
      });
  };

  const onPageChanged = (newPage) => {
    setPage(newPage);
    
  };


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
        <Table striped bordered hover style={{ marginTop: "10px", width: "84%" }}>
          <tbody className="table-name">
            <tr>
              <td>Date</td>
              <td>Description</td>
              <td>Prev. Bal</td>
              <td>CR</td>
              <td>DR</td>
              <td>Comm+</td>
              <td>Comm-</td>
              <td>Balance</td>
            </tr>
            {listItems.map((res) => (
              <tr key={res.id}>
                <td>{moment(res.createdAt).utcOffset("+05:30").format("DD MMM YYYY h:mma")}</td>
                <td>{res.gameType}</td>
                <td>{res.amount}</td>
                <td>{res.remark}</td>
                <td>{res.statementFor}</td>
                <td>{res.marketId}</td>
                <td>{res.oldAmount}</td>
                <td>{res.newAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    {listItems.length > 1 ? (
        <Pagination totalPages={totalPages} currentPage={page} maxVisibleButtons={1} onPageChanged={(e) => onPageChanged(e)} />
      ) : (
        <div />
      )}
    </div>
  );
};

export default AccountStatement;