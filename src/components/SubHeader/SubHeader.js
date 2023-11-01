import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

function SubHeader(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const onClickMenu = (url) => {
    props.history.push(url);
    setNavbarOpen(!navbarOpen);
  };
  AOS.init();

  return (
    <div className="border-b border-green-300 lg:block hidden">
      <div className="flex items-center px-3">
        <span onClick={() => { onClickMenu("/app/ac-statement") }}
          className={`p-3 uppercase font-semibold text-black cursor-pointer hover:text-white hover:bg-[#2A2A2A] text-xs ${props.location.pathname === "/app/ac-statement" ? "text-white cursor-pointer bg-[#2A2A2A]" : ""}`}>
          Account statement
        </span>
        <span onClick={() => { onClickMenu("/app/my-ledger"); }}
          className={`p-3 uppercase font-semibold text-black cursor-pointer hover:text-white hover:bg-[#2A2A2A] text-xs ${props.location.pathname === "/app/my-ledger" ? "text-white cursor-pointer bg-[#2A2A2A]" : ""}`}>
          My Ledger
        </span>
        <span onClick={() => { onClickMenu("/app/livegames") }}
          className={`p-3 uppercase font-semibold text-black cursor-pointer hover:text-white hover:bg-[#2A2A2A] text-xs ${props.location.pathname === "/app/livegames" ? "text-white cursor-pointer bg-[#2A2A2A]" : ""}`}>
          Live games
        </span>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { users } = state;
  const { user } = state.authentication;
  return {
    users,
    user,
  };
}
export default withRouter(connect(mapStateToProps)(SubHeader));
