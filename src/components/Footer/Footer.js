import React from 'react';
import { connect } from 'react-redux';
import editstate from "../../Assets/Images/editstake.png";
import inplay from "../../Assets/Images/inplay.png";
import logout from "../../Assets/Images/logout.png";
import bethistory from "../../Assets/Images/bethistory.png";
import home from "../../Assets/Images/home.png";
import "./Footer.css";

const Footer = (props) => {
  console.log("Footer Props are working and testing data ",props)
  const onClickMenu = (url) => {
    props.props.history.push(url)
  }

  return (

    <div className="mobile-main">
      <div className="mobile-menu">
        <div className="icon-menu" onClick={() => onClickMenu("/app/accountstatement")}>
          <img src={inplay} alt="" />
          <span>Acc</span>
        </div>
        <div className="icon-menu" onClick={() => onClickMenu("/app/TotalLedger")}>
          <img src={editstate} alt="" />
          <span>Total</span>
        </div>
        <div className="home-icon" onClick={() => onClickMenu("/app/dashboard")}>
          <img src={home} alt="" className="home-image" />
        </div>
        <div className="icon-menu" onClick={() => onClickMenu("/app/my-bets")}>
          <img src={bethistory} alt="" />
          <span>P&L</span>
        </div>
        <div className="icon-menu" onClick={() => onClickMenu("/app/casino")}>
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