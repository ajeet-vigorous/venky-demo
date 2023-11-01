import React from 'react';
import { connect } from 'react-redux';
import { FaHome, FaThumbtack, FaRegMoneyBillAlt, FaKey, FaUserCircle } from 'react-icons/fa';
import editstate from "../../Assets/Images/editstake.png";
import inplay from "../../Assets/Images/inplay.png";
import logout from "../../Assets/Images/logout.png";
import bethistory from "../../Assets/Images/bethistory.png";
import home from "../../Assets/Images/home.png";
import "./Footer.css";

const Footer = (props) => {
  const onClickMenu = (url) => {
    props.props.history.push(url)
  }

  return (

    <div className="mobile-main">
      <div className="mobile-menu">
        <div className="icon-menu">
          <img src={inplay} alt="" />
          <span>Acc</span>
        </div>
        <div className="icon-menu">
          <img src={editstate} alt="" />
          <span>Total</span>
        </div>
        <div className="home-icon" onClick={() => onClickMenu("/app/dashboard")}>
          <img src={home} alt="" className="home-image" />
        </div>
        <div className="icon-menu">
          <img src={bethistory} alt="" />
          <span>P&L</span>
        </div>
        <div className="icon-menu">
          <img src={logout} alt="" />
          <span>Casino</span>
        </div>
      </div>
    </div>

  );
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}
export default connect(mapStateToProps)(Footer);