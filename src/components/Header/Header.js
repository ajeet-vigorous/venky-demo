import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css";
import { connect } from 'react-redux';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiSpeakerphone } from 'react-icons/hi'
import Marquee from "react-fast-marquee";
import SubHeader from '../SubHeader/SubHeader';
import SidebarRight from "../../components/SidebarRight/SidebarRight";
import EditformModal from '../../casino_components/EditformModal/EditformModal';
import roayl from "../../Assets/Images/royal.png";
import bethistory from "../../Assets/Images/bethistory.png";
import { AiFillInfoCircle } from "react-icons/ai";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { betChipsData } from '../../_config/index';
import EditStakeDesktop from '../EditStakeDesktop/EditStakeDesktop';
import RulesNotification from '../RulesNotification/RulesNotification'
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { updateCoin } from '../../_actions';
import { balances } from '../../_reducers/balance.reducer';

//import socket clint 
// import io from "socket.io-client";

const Header = ({ balances, updateCoin, ...props }) => {



  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShow = () => setShow(true);
  const [visible, setVisible] = useState(false);
  const [stake, setStake] = useState(false);
  const stakehandleClose = () => setStake(false);
  const stakehandleShow = () => setStake(true);
  const myComponent = {
    height: "300px",
    overflowX: "hidden",
    overflowY: "scroll",
  };

  const onClickMenutwo = (url) => {
    localStorage.removeItem('user');
    props.history.push(url)
  }
  const onClickMenu = (url) => {
    props.history.push(url)
  }

  // For edit stak model
  const dispatch = useDispatch();
  const [keyValues1, setKeyValues1] = useState([]);
  const [betChipsObject, setBetChipsObject] = useState({});



  useEffect(() => {
    const betChipsDataItems = JSON.parse(localStorage.getItem('betChipsData'));
    let betChips = {};

    if (betChipsDataItems != null) {
      betChips = betChipsDataItems;
    } else {
      betChips = betChipsData;
    }
    const updatedKeyValues = Object.entries(betChips).map(([key, value]) => ({
      key,
      value: parseInt(value),
    }));

    setKeyValues1(updatedKeyValues);
  }, []);

  const handleInputChange = (index, key, value) => {
    const updatedKeyValues = [...keyValues1];
    if (key !== undefined) {
      updatedKeyValues[index].key = key;
    }
    if (value !== undefined) {
      updatedKeyValues[index].value = Number(value);
    }
    setKeyValues1(updatedKeyValues);
  };

  const submitValue = () => {
    const newBetChipsObject = {};
    keyValues1.forEach(item => {
      newBetChipsObject[item.key] = item.value;
    });

    setBetChipsObject(newBetChipsObject);
    const user = JSON.parse(localStorage.getItem('spuser'));
    const Id = user?.data?.userId;
    const dataValue = {
      userId: Id,
      betChipsData: newBetChipsObject,
    };
    dispatch(userActions.userUpdate(dataValue));

    localStorage.setItem('betChipsData', JSON.stringify(newBetChipsObject));
  };

  let finalBalance = JSON.parse(localStorage.getItem('finalBalance'))
  let user = JSON.parse(localStorage.getItem('spuser'));
  const { users } = props
  console.log("userserrrrrrrrrrr", users)
  const { staticCoin } = balances
  const { userAccountDetailsItems } = users
  // console.log(users,"userAccountDetailsItems11111111111111111111111")


  const handleUpdateCoin = () => {
    updateCoin(staticCoin + 20);
  };




  // =============================================================Update user.data.balance in real time

  // // implemet socket in final step
  // const socket = io.connect("http://localhost:3001");
  // socket.io client  use effect=================
  // useEffect(() => {
  //   socket.on("balance", (data) => {
  //     setBalance(data);
  //   });
  // }, [socket]);


  // const socket = io.connect("http://localhost:3001");



  // user update the Data in
  // useEffect(() => {
  //   const handleBalanceUpdate = (data) => {
  //     let currentBalance = JSON.parse(localStorage.getItem('spuser'));
  //     let newBalance = currentBalance.data.balance;
  //     newBalance += 40;
  //     localStorage.setItem('balance', newBalance);
  //     setBalance(newBalance)
  //   };
  //   socket.on("balance", handleBalanceUpdate);
  //   return () => {
  //     socket.off("balance", handleBalanceUpdate);
  //   };
  // }, [socket]);




  // ================== infitiv render error of code

  // useEffect(() => {
  //   const handleBalanceUpdate = (data) => {
  //     let spuserData = JSON.parse(localStorage.getItem('spuser'));
  //     if (spuserData) {
  //       spuserData.data.balance += 80;
  //       setBalance(spuserData.data.balance);
  //       localStorage.setItem('spuser', JSON.stringify(spuserData));
  //     }
  //   };
  //   socket.on("balance", handleBalanceUpdate);
  //   return () => {
  //     socket.off("balance", handleBalanceUpdate);
  //   };
  // }, [socket])



  // First Time Dom Render THen Update the VAlue
  // useEffect(() => {
  //   const handleBalanceUpdate = (data) => {
  //     let spuserData = JSON.parse(localStorage.getItem('spuser'));
  //     if (spuserData) {
  //       let updateAmount = 90; // You can change this value to any desired amount
  //       if (!spuserData.data.balanceUpdated) {
  //         spuserData.data.balance += updateAmount;
  //         spuserData.data.balanceUpdated = true;
  //         localStorage.setItem('spuser', JSON.stringify(spuserData));
  //         setBalance(spuserData.data.balance);
  //       }
  //     }
  //   };

  //   socket.on("balance", handleBalanceUpdate);

  //   return () => {
  //     socket.off("balance", handleBalanceUpdate);
  //   };
  // }, [socket]);



  return (
    <>
      <>
        <div className="navbar-main">
          <div className="navbar-left">
          <div >
            {open ? (
            <>
            <div className='w-[200px] -ml-2.5  h-[5rem] -mt-2.5' style={{backgroundColor:"yellow"}}>
                <p className='text-black-500'>
                  User: {user && user.data && user.data.username ? user.data.username : "user"} ({user && user.data && user.data.name})
                </p>
                <button className="hamburger-menu ml-[10rem]" onClick={() => setOpen(!open)}>
                  <AiOutlineClose style={{ color: "black" }} />
                </button>
                </div>
                 </>
             
            ) : (
             <>
                <button className="hamburger-menu" onClick={() => setOpen(!open)}>
                  <GiHamburgerMenu style={{ color: "white" }} />
                </button>
                <Link to="/">
                  <img src={roayl} alt="logo" className="vanky-logo" />
                </Link>
                </>
            )}
 </div>




            <div>
              <marquee attribute_name="welcome" className="nav-marquee">
                WELCOME TO THE VANKY.COM
              </marquee>

              <span className="nav-bell-icon">
                {/* <img className="bell-icon" src={bellicon} alt="" /> */}
              </span>
            </div>
          </div>

          <div className="navbar-right">

            <button onClick={handleUpdateCoin} className='bg-green-200'>ADD 20 Coin </button>
            <button onClick={() => props.history.push('/app/dashboard')} className='bg-green-200'>dashboard</button>
            <button onClick={() => props.history.push('/app/balance')} className='bg-green-200'>Balance</button><br /> <br />
            <span className='text-white'>{staticCoin}</span>
            <div>

              <span>
                <HiCurrencyRupee
                  style={{ fontSize: "30px", color: "white" }}
                  className="rupee-logo"
                />
              </span>
            </div>

            <div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <span style={{ color: "white" }}>Main:
                  {finalBalance && finalBalance.mainBlance ? finalBalance.mainBlance : user.data.balance}

                  {/* {balance ? balance : user.data.balance} */}

                </span>
                <span style={{ color: "white" }}>Exposure :
                  <span style={{ color: "red" }}>{" "}{finalBalance && finalBalance.exposureBalance ? finalBalance.exposureBalance : "0.00"}
                  </span>
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1rem",
              }}
            >
              <img src={bethistory} alt="user" style={{ width: "30px" }} />
              <span style={{ color: "white" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {user && user.data && user.data.username ? user.data.username : "user"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onClickMenutwo("/app/changepassword")}>Change Password</Dropdown.Item>
                    <Dropdown.Item onClick={() => onClickMenutwo("/login")}>Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </div>
          </div>
        </div>

        <marquee attribute_name="welcome" className="mobile-nav-marquee">
          <span style={{ fontWeight: "700" }}>WELCOME TO THE VANKY.COM</span>
        </marquee>
        <div
          className={open ? "nav-menu-mobile" : "nav-menu"}
          onClick={() => setOpen(false)}
        >
          <ul>
            <li>
              <Link to="/" className="link-css">
                <FaHome style={{ fontSize: "20px" }} />
                <span>Dashoard</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="link-css">
                <BsPlayFill style={{ fontSize: "20px" }} />
                <span>In-play</span>
              </Link>
            </li>

            <li>
              <Link to="/app/runningmarketanalysis" className="link-css">
                <VscGraph style={{ fontSize: "20px" }} />
                <span>All Market Book</span>
              </Link>
            </li>

            <li>
              <Link to="/app/Profile" className="link-css">
                <CgProfile style={{ fontSize: "20px" }} />
                Profile
              </Link>
            </li>
            <li>
              <Link className="link-css" to="/app/changepassword">
                <RiLockPasswordFill style={{ fontSize: "20px" }} />
                Password
              </Link>
            </li>
            <li onClick={handleShow}>
              <AiFillInfoCircle style={{ fontSize: "20px" }} />

              <span>Rules</span>
            </li>
            <li>
              <Link to="/app/MyCommission" className="link-css">
                <BiBook style={{ fontSize: "20px" }} />
                <span> My Commision</span>
              </Link>
            </li>
            <li>
              <div class="dropdown">
                <div class="dropbtn"><BiBook style={{ fontSize: "20px" }} /> Report</div>
                <div class="dropdown-content">
                  <Link to="/app/accountstatement">
                    Account Statement
                  </Link>
                  <Link to="/app/TotalLedger">
                    Total Legder
                  </Link>
                  <Link to="/app/profit-loss">
                    Profit & Loss
                  </Link>
                  <Link to="/app/my-bets">
                    Bet History
                  </Link>
                  <Link to="/app/LiveBetHistory">
                    Live Bet History
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <div class="dropbtn"><CgGames style={{ fontSize: "20px" }} /> Live Games</div>
                <div class="dropdown-content">
                  <Link to="/app/casino">
                    TeenPatti T20
                  </Link>
                  <Link to="/app/casino">
                    TeenPatti 1Day
                  </Link>
                  <Link to="/app/casino">
                    Andar Bahar
                  </Link>
                  <Link to="/app/casino">
                    Dragon Tiger
                  </Link>
                  <Link to="/app/casino">
                    32 Cards
                  </Link>
                  <Link to="/app/casino">
                    Amar Akbar Anthony
                  </Link>
                  <a>Search Result</a>
                </div>
              </div>
            </li>

            <li onClick={stakehandleShow}>
              <BiBook style={{ fontSize: "20px" }} />
              <span>Edit Stake</span>
            </li>
            <li>
              <Link to="/app/CupWinner" className="link-css">
                <VscGraph style={{ fontSize: "20px" }} />
                <span> IPL Winner</span>
              </Link>
            </li>

          </ul>

          {show ? <RulesNotification handleClose={handleCloseModal} /> : null}
          {stake ? <EditStakeDesktop stakehandleClose={stakehandleClose} handleClose={stakehandleClose} /> : null}


        </div>
      </>
    </>

  );

}

const mapStateToProps = (state) => {
  const { users } = state;
  const { balances } = state;
  return {
    balances,
    users

  };
};

const mapDispatchToProps = {
  updateCoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);