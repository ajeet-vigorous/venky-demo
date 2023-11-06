import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css";
import { connect } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaUserSecret } from 'react-icons/fa6'
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { GiHamburgerMenu } from 'react-icons/gi'
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
import { betChipsData } from '../../_config/index';
import EditStakeDesktop from '../EditStakeDesktop/EditStakeDesktop';
import RulesNotification from '../RulesNotification/RulesNotification'
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { updateCoin } from '../../_actions';
import { balances } from '../../_reducers/balance.reducer';
import { headerConstent } from './HeaderConstent'

const Header = ({ balances, updateCoin, ...props }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShow = () => setShow(true);
  const [visible, setVisible] = useState(false);
  const [stake, setStake] = useState(false);
  const stakehandleClose = () => setStake(false);
  const stakehandleShow = () => setStake(true);
  // resposive header state click to open dropdown
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [showLiveGamesDropdown, setShowLiveGamesDropdown] = useState(false);

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
  const { staticCoin } = balances
  const { userAccountDetailsItems } = users


  const handleUpdateCoin = () => {
    updateCoin(staticCoin + 20);
  };

  const toggleReportDropdown = () => {
    setShowReportDropdown(!showReportDropdown);
  };
  const toggleLiveGamesDropdown = () => {
    setShowLiveGamesDropdown(!showLiveGamesDropdown);
  };

  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <Link to="/">
            <img src={roayl} alt="logo" className="vanky-logo" />
          </Link>
          <button className="hamburger-menu" onClick={() => setOpen(!open)}>
            {open ? (
              <div className='w-56 h-16 bg-amber-500 -ml-2.5 '>
                <div className='pt-[12px] flex gap-2'>
                  <span><FaUserSecret size={30} /></span>
                  <span className='text-black-500'> {user && user.data && user.data.username ? user.data.username : "user"} (Name)
                  </span>
                  <span> <AiOutlineClose style={{ color: "black" }} size={30} /></span>

                </div>
              </div>
            ) : (
              <GiHamburgerMenu style={{ color: "white" }} />
            )}
          </button>
          <div>
            <marquee attribute_name="welcome" className="nav-marquee">
              {headerConstent.WELCOME_TO}
            </marquee>
            <span className="nav-bell-icon">
              {/* <img className="bell-icon" src={bellicon} alt="" /> */}
            </span>
          </div>
        </div>

        <div className="navbar-right">

          {/* redux static data workflow */}
          {/* <span className='text-white'>{staticCoin}</span> */}

          {/* End of redux static data workflow */}
          <div>
            <span>
              <HiCurrencyRupee size={30} className="rupee-logo text-white" />
            </span>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
              <span className='text-white'>{headerConstent.Main}
                {finalBalance && finalBalance.mainBlance ? finalBalance.mainBlance : user.data.balance}
              </span>
              <span className='text-white'>{headerConstent.Exposure}
                <span className='text-red-600'>{" "}{finalBalance && finalBalance.exposureBalance ? finalBalance.exposureBalance : "0.00"}
                </span>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginRight: "1rem" }}>
            <img src={bethistory} alt="user" style={{ width: "30px" }} />
            <span style={{ color: "white" }}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {user && user.data && user.data.username ? user.data.username : "user"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => onClickMenutwo("/app/changepassword")}>{headerConstent.Change_Password}</Dropdown.Item>
                  <Dropdown.Item onClick={() => onClickMenutwo("/login")}>{headerConstent.Log_out}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </div>
        </div>
      </div>
      <marquee attribute_name="welcome" className="mobile-nav-marquee">
        <span style={{ fontWeight: "700" }}>{headerConstent.WELCOME_TO}</span>
      </marquee>
      <div className="nav-menu">
        <ul>
          <li> <Link to="/" className="link-css"> <FaHome size={25} /> <span className='flex items-center'>{headerConstent.Dashoard}</span>  </Link> </li>
          <li> <Link to="/" className="link-css"> <BsPlayFill size={25} /> <span className='flex items-center'>{headerConstent.In_play}</span> </Link></li>
          <li><Link to="/app/runningmarketanalysis" className="link-css"> <VscGraph size={25} /> <span className='flex items-center'>{headerConstent.All_Market_Book}</span></Link> </li>
          <li><Link to="/app/Profile" className="link-css"><CgProfile size={25} /><span className='flex items-center'>{headerConstent.Profile}</span></Link></li>
          <li><Link className="link-css" to="/app/changepassword"><RiLockPasswordFill size={25} /><span className='flex items-center'>{headerConstent.Password}</span></Link></li>
          <li onClick={handleShow} className="link-css"><AiFillInfoCircle size={25} /><span className='flex items-center'>{headerConstent.Rules}</span></li>
          <li><Link to="/app/MyCommission" className="link-css"><BiBook size={25} /><span className='flex items-center'> {headerConstent.My_Commision}</span></Link></li>
          <li>
            <div className="dropdown">
              <div className="dropbtn flex">
                <BiBook size={25} />
                <p>{headerConstent.Report}</p>
              </div>
              <div className="dropdown-content">
                <Link to="/app/accountstatement">{headerConstent.Account_Statement}</Link>
                <Link to="/app/TotalLedger">{headerConstent.Total_Ledger}</Link>
                <Link to="/app/profit-loss">{headerConstent.Profit_Loss}</Link>
                <Link to="/app/my-bets">{headerConstent.Bet_History}</Link>
                <Link to="/app/LiveBetHistory">{headerConstent.Live_Bet_History}</Link>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <div class="dropbtn"><CgGames size={25} /> {headerConstent.Live_Games}
              </div>
              <div class="dropdown-content">
                <Link to="/app/casino">{headerConstent.TeenPatti_T20}</Link>
                <Link to="/app/casino">{headerConstent.TeenPatti_1Day}</Link>
                <Link to="/app/casino">{headerConstent.AndarBahar}</Link>
                <Link to="/app/casino">{headerConstent.Dragon_Tiger}</Link>
                <Link to="/app/casino"> {headerConstent.Cards_32}</Link>
                <Link to="/app/casino"> {headerConstent.Amar_Akbar_Anthony}</Link>
                <a>{headerConstent.Search_Result}</a>
              </div>
            </div>
          </li>
          <li onClick={stakehandleShow} className="link-css"><BiBook size={25} /><span>{headerConstent.Edit_Stake}</span></li>
          <li><Link to="/app/CupWinner" className="link-css"><VscGraph size={25} /><span className='flex items-center'> {headerConstent.IPL_Winner}</span></Link></li>
        </ul>
      </div>
      {open ?
        <div className="nav-menu-mobile">
          <ul className='linehight'>
            <li onClick={() => setOpen(false)} className=''> <Link to="/" className="link-css">  <FaHome size={25} /> <span >{headerConstent.Dashoard}</span>  </Link> </li>
            <li onClick={() => setOpen(false)} className=''> <Link to="/" className="link-css"> <BsPlayFill size={25} /> <span >{headerConstent.In_play}</span> </Link></li>
            <li onClick={() => setOpen(false)} className=''><Link to="/app/runningmarketanalysis" className="link-css "> <VscGraph size={25} /> <span >{headerConstent.All_Market_Book}</span></Link> </li>
            <li onClick={() => setOpen(false)} className=''><Link to="/app/Profile" className="link-css "><CgProfile size={25} />{headerConstent.Profile}</Link></li>
            <li onClick={() => setOpen(false)} className=''><Link className="link-css " to="/app/changepassword"><RiLockPasswordFill size={25} />{headerConstent.Password}</Link></li>
            <li onClick={handleShow} className="link-css "><AiFillInfoCircle size={25} /><span>{headerConstent.Rules}</span></li>
            <li onClick={() => setOpen(false)} className=''><Link to="/app/MyCommission" className="link-css"><BiBook size={25} /><span> {headerConstent.My_Commision}</span></Link></li>
            <li className=''>
              <ul className="space-y-2 font-medium">
                <li className={showReportDropdown ? 'active' : ''}>
                  <div className={`flex ${showReportDropdown ? 'activesss' : ''}`}>
                    <BiBook size={25} style={{ height: "37px", marginLeft: "4px" }} />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-white">{headerConstent.Report}</span>
                    <span className={`plus-sign ${showReportDropdown ? 'plus-icon' : ''}`}><AiOutlinePlus onClick={toggleReportDropdown} size={22} /></span>
                  </div>
                  {showReportDropdown && (
                    <ul className="nolinehight">
                      <li onClick={() => setOpen(false)} className='bg-black divide-y divide-slate-200'>
                        <Link to="/app/accountstatement" className="flex items-center w-full p-2 text-white transition duration-75 pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700">{headerConstent.Account_Statement}</Link>
                        <Link to="/app/TotalLedger" className="flex items-center w-full p-2 text-white transition duration-75 pl-11 group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700">{headerConstent.Total_Ledger}</Link>
                        <Link to="/app/profit-loss" className="flex items-center w-full p-2 text-white transition duration-75 pl-11 group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700">{headerConstent.Profit_Loss}</Link>
                        <Link to="/app/my-bets" className="flex items-center w-full p-2 text-white transition duration-75 pl-11 group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700">{headerConstent.Bet_History}</Link>
                        <Link to="/app/LiveBetHistory" className="flex items-center w-full p-2 text-white transition duration-75 pl-11 group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700">{headerConstent.Live_Bet_History}</Link>
                      </li>

                    </ul>
                  )}
                </li> </ul>
            </li>

            <li className=''>
              <ul className="space-y-2 font-medium">
                <li className={showLiveGamesDropdown ? 'active' : ''}>
                  <div className={`flex ${showLiveGamesDropdown ? 'activesss' : ''}`}>
                    <CgGames size={25} style={{ height: "37px", marginLeft: "4px" }} />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-white">{headerConstent.Live_Games}</span>
                    <span className={`plus-sign ${showLiveGamesDropdown ? 'plus-icon' : ''}`}><AiOutlinePlus onClick={toggleLiveGamesDropdown} size={22} /></span>
                  </div>
                  {showLiveGamesDropdown && (
                    <ul className="nolinehight">
                      <li onClick={() => setOpen(false)} className='bg-black divide-y divide-slate-200'>
                        <Link to="/app/casino" className="flex items-center w-full p-2 text-white transition duration-75  pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700">{headerConstent.TeenPatti_T20}</Link>
                        <Link to="/app/casino" className="flex items-center w-full p-2 text-white transition duration-75  pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700">{headerConstent.TeenPatti_1Day} </Link>
                        <Link to="/app/casino" className="flex items-center w-full p-2 text-white transition duration-75  pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700"> {headerConstent.AndarBahar}</Link>
                        <Link to="/app/casino" className="flex items-center w-full p-2 text-white transition duration-75  pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700">{headerConstent.Dragon_Tiger}</Link>
                        <Link to="/app/casino" className="flex items-center w-full p-2 text-white transition duration-75  pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700">{headerConstent.Cards_32}</Link>
                        <Link to="/app/casino" className="flex items-center w-full p-2 text-white transition duration-75  pl-11  hover:bg-red-200 dark:text-white dark:hover-bg-gray-700">{headerConstent.Amar_Akbar_Anthony}</Link>
                        {/* <a>Search Result</a> */}
                      </li>

                    </ul>
                  )}
                </li>
              </ul>
            </li>
            <li onClick={stakehandleShow} className="link-css"><BiBook size={25} /><span>{headerConstent.Edit_Stake}</span></li>
            <li onClick={() => setOpen(false)}><Link to="/app/CupWinner" className="link-css"><VscGraph size={25} /><span> {headerConstent.IPL_Winner}</span></Link></li>
          </ul>

        </div> : ""
      }
      {show ? <RulesNotification handleClose={handleCloseModal} /> : null}
      {stake ? <EditStakeDesktop stakehandleClose={stakehandleClose} handleClose={stakehandleClose} /> : null}
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







