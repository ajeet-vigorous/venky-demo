import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import { BsInfoCircleFill, BsSuitSpadeFill, BsSuitClubFill } from "react-icons/bs";
import { FaGripLinesVertical } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { ImDiamonds } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import io from 'socket.io-client';
import BetLockedRounded from "../../casino_components/BetLockedRounded/BetLockedRounded";
import FlipCountdown from '@rumess/react-flip-countdown';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
import axios from "axios";
import { CASINO } from "../../_config";
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';



class AmarAkbarAnthony extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backBetModal: false,
      offset: 0,
      betSlipData: {},
      fieldsbet: {},
      errorsbet: {},
      count: 0,
      casinoData: [],
      ResultModel: true,
      Result: false,
      backBetModalMobile: false,
      cardShow: true
    };
  }


  handleBackOpen = (data) => {
    this.setState({ betPlaceModal: true, betSlipData: { ...data, stake: "0" }, count: data.odds, teamname: data.name });
    console.log("datattatattatta", data);
    setTimeout(() => this.setState({ betPlaceModal: false }), 10000);
  };

  handleBetList = () => {
    this.setState({ betListShow: !this.state.betListShow });
  }
  handleCompletedFancyModal = () => {
    this.setState({ showCompletedFancy: !this.state.showCompletedFancy });
  }

  handleStakeOpen = () => {
    this.setState({ EditStakeModal: true });

  };

  handlechangepage = () => {
    this.props.history.push('/app/innerstatement')
  }

  handleClose = () => {
    this.setState({ betPlaceModal: false, EditStakeModal: false });
  };

  updateStackOnclick = (num) => {
    let { betSlipData } = this.state;
    betSlipData.stake = num;
    this.setState({
      betSlipData: betSlipData,
    });
  };

  placeBet = () => {
    let betObject = {
      "odds": this.state.count + "",
      "amount": this.state.betSlipData.stake,
      "selectionId": this.state.betSlipData.selectionId + "",
      "name": this.state.betSlipData.name + "",
      "mid": this.state.betSlipData.marketid + "",
      "betFor": this.state.betSlipData.betFor + "",
      // "run": this.state.betSlipData.run ? this.state.betSlipData.run + "" : "0",
      // "oddsType": this.state.betSlipData.oddsType + "",
      // "type": this.state.betSlipData.betType + ""

    }
    // if (this.state.betSlipData.oddsType === "bookmaker") {
    //   this.props.dispatch(userActions.save_bet(betObject, this.props, this.state, this.setState));
    // } else {
    //   this.props.dispatch(userActions.save_bet_fancy(betObject, this.props, this.state, this.setState));
    // }
    this.setState({ betPlaceModal: false })
    console.log("betObjectbetObjectbetObject1235468787", betObject);
  };

  componentDidMount() {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: "https://casino.1ex.in/getMarketcashino?id=aaa",
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(config).then((response) => {
      this.handleIncomingData(response)
      console.log("response.data=============>", response);
    }).catch((error) => {
      console.log('ERRORRRRRRRRRRRRR', error);
    });

    this.interval = setInterval(() => this.loadData(), 1000);
  }

  loadData = () => {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: "https://casino.1ex.in/getMarketcashino?id=aaa",
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(config).then((response) => {
      this.handleIncomingData(response)
      console.log("response.data=============>", response);
    }).catch((error) => {
      console.log('ERRORRRRRRRRRRRRR', error);
    });
  }

  handleIncomingData = (response) => {
    this.setState(() => ({
      casinoData: response.data.data.aaa,
    }));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClose = () => {
    this.setState({ betPlaceModal: false, EditStakeModal: false });
  };

  handleResult = () => {
    this.setState({ ResultModel: !this.state.ResultModel });
  };
  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex, betListShow: true });
  };

  handleCardShow = () => {
    this.setState({ cardShow: !this.state.cardShow });
  };

  render() {
    let { users } = this.props;
    let { getCasinoByEventId } = users;
    const { activeTab, casinoData } = this.state;

    const { odds_data, real_time_card_array, result, timer, market_id, game_type } = casinoData ? casinoData : {};

    let Amar = odds_data && odds_data[0] ? odds_data[0] : {};
    let Akbar = odds_data && odds_data[1] ? odds_data[1] : {};
    let Anthony = odds_data && odds_data[2] ? odds_data[2] : {};
    let Even = odds_data && odds_data[3] ? odds_data[3] : {};
    let Odd = odds_data && odds_data[4] ? odds_data[4] : {};
    let Red = odds_data && odds_data[5] ? odds_data[5] : {};
    let Black = odds_data && odds_data[6] ? odds_data[6] : {};
    let Under7 = odds_data && odds_data[20] ? odds_data[20] : {};
    let Over7 = odds_data && odds_data[21] ? odds_data[21] : {};
    let CardA = odds_data && odds_data[7] ? odds_data[7] : {};
    let Card2 = odds_data && odds_data[8] ? odds_data[8] : {};
    let Card3 = odds_data && odds_data[9] ? odds_data[9] : {};
    let Card4 = odds_data && odds_data[10] ? odds_data[10] : {};
    let Card5 = odds_data && odds_data[11] ? odds_data[11] : {};
    let Card6 = odds_data && odds_data[12] ? odds_data[12] : {};
    let Card7 = odds_data && odds_data[13] ? odds_data[13] : {};
    let Card8 = odds_data && odds_data[14] ? odds_data[14] : {};
    let Card9 = odds_data && odds_data[15] ? odds_data[15] : {};
    let Card10 = odds_data && odds_data[16] ? odds_data[16] : {};
    let CardJ = odds_data && odds_data[17] ? odds_data[17] : {};
    let CardQ = odds_data && odds_data[18] ? odds_data[18] : {};
    let CardK = odds_data && odds_data[19] ? odds_data[19] : {};
    let imageData = real_time_card_array && real_time_card_array.playerA_card ? real_time_card_array.playerA_card : {};

    console.log("casinoDatacasinoDatacasinoData111111111111", casinoData);

    console.log("casinoDatacasinoDatacasinoData111111111111t1t1", CardA);
    return (
      <>
        {this.state.EditStakeModal === true ?
          <EditStakeDesktop
            handleClose={this.handleClose}
            stakehandleClose={this.handleClose}
          />
          : null}
        <div className="min-h-full overflow-y-auto flex">
          <Sidebar />
          <div className="lg:flex w-full h-full p-1.5 lg:space-x-1.5 space-y-4 lg:space-y-0 pb-10">
            <div className="lg:w-[60%] w-full lg:space-y-0 space-y-1">
              <div className="bg-black flex justify-between w-full relative xl:h-[600px] md:h-[350px] h-[250px] px-2 py-1">
                <iframe src={CASINO.VideoUrl + `3056`} title=" " className='relative w-full h-full ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm uppercase">{game_type ? game_type : "AMAR AKBAR ANTHONY"}</span>
                  <span className="text-white font-semibold lg:text-sm text-xs">Round ID: {market_id}</span>
                </div>

                <div className="flex flex-col justify-end items-end absolute top-0 right-0 lg:p-3 p-1.5 space-y-1">
                  <div className="flex justify-center items-center space-x-2">
                    <span className="p-1.5 lg:text-2xl text-lg rounded-full border-[2px] border-white text-white cursor-pointer"><FaHome /></span>
                    <span onClick={this.handleResult} className="lg:block hidden lg:p-1.5 p-1 text-2xl rounded-full border-[2px] border-white text-white cursor-pointer"><FaChevronCircleUp /></span>
                  </div>
                  <div className="lg:block hidden">
                    <div className="py-1 px-2 bg-black/50 rounded-md flex justify-between items-center space-x-2">
                      {this.state.ResultModel ?
                        <div className="grid grid-cols-2 gap-1">
                          {result && result.length > 0 ? result.map((element, index) =>
                            <span key={index} className={`bg-white/20 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : element.result === "2" ? "text-[#F74242]" : element.result === "3" ? "text-white" : "text-white"}`}>
                              {element.result === "1" ? "A" : element.result === "2" ? "B" : element.result === "3" ? "C" : ""}</span>)
                            : null}
                        </div>
                        : null}
                    </div>
                  </div>
                </div>

                <div className="absolute top-[41%] left-0">
                  <div className="py-1 px-2 bg-black/50 rounded-md flex justify-between items-center space-x-2 h-14 lg:h-16">
                    {this.state.cardShow ?
                      <img src={`/cards/${imageData ? imageData : 1}.png`} alt="card" className="h-10 lg:h-14 w-8 lg:w-10" /> : null}
                    <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                  </div>
                </div>
                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${timer === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className={`md:text-4xl text-2xl font-bold text-white absolute`}>{timer ? timer : null}</span>
                </div>
              </div>
              <div className="py-2">
                <div className="bg-white space-y-1">
                  <div className="grid grid-cols-4 gap-1 text-black">
                    <div className="col-span-2 flex justify-between items-center bg-[#DDDDDD] rounded p-2 ">
                      <span className="text-sm font-semibold "
                      >A.{Amar && Amar.nat && Amar.nat ? Amar.nat : "Amar"}</span>
                      <span className="text-sm font-semibold">0.00</span>
                    </div>
                    <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer">
                      <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: Amar, type: "Yes", odds: Amar.b1, name: Amar.nat, selectionId: Amar.sid, marketid: Amar.mid, betFor: "b" })}>
                        <span className="text-sm font-semibold leading-4">{Amar && Amar.b1 && Amar.b1 ? Amar.b1 : "0.00"}</span>
                      </div>
                      {Amar.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative w-full border-[2px] border-[#F994BA] rounded cursor-pointer">
                      <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: Amar, type: "No", odds: Amar.l1, name: Amar.nat, selectionId: Amar.sid, marketid: Amar.mid, betFor: "l" })}>
                        <span className="text-sm font-semibold leading-4">{Amar && Amar.l1 && Amar.l1 ? Amar.l1 : "0.00"}</span>
                      </div>
                      {Amar.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-black">
                    <div className="col-span-2 flex justify-between items-center bg-[#DDDDDD] rounded p-2 ">
                      <span className="text-sm font-semibold ">B.{Akbar && Akbar.nat && Akbar.nat ? Akbar.nat : "Akbar"}</span>
                      <span className="text-sm font-semibold">0.00</span>
                    </div>
                    <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer">
                      <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: Akbar, type: "Yes", odds: Akbar.b1, name: Akbar.nat, selectionId: Akbar.sid, marketid: Akbar.mid, betFor: "b" })}>
                        <span className="text-sm font-semibold leading-4">{Akbar && Akbar.b1 && Akbar.b1 ? Akbar.b1 : "0.00"}</span>
                      </div>
                      {Akbar.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative w-full border-[2px] border-[#F994BA] rounded cursor-pointer">
                      <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: Akbar, type: "No", odds: Akbar.l1, name: Akbar.nat, selectionId: Akbar.sid, marketid: Akbar.mid, betFor: "l" })}>
                        <span className="text-sm font-semibold leading-4">{Akbar && Akbar.l1 && Akbar.l1 ? Akbar.l1 : "0.00"}</span>
                      </div>
                      {Akbar.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-black">
                    <div className="col-span-2 flex justify-between items-center bg-[#DDDDDD] rounded p-2 ">
                      <span className="text-sm font-semibold ">C.{Anthony && Anthony.nat && Anthony.nat ? Anthony.nat : "Anthony"}</span>
                      <span className="text-sm font-semibold">0.00</span>
                    </div>
                    <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer">
                      <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: Anthony, type: "Yes", odds: Anthony.b1, name: Anthony.nat, selectionId: Anthony.sid, marketid: Anthony.mid, betFor: "b" })}>
                        <span className="text-sm font-semibold leading-4">{Anthony && Anthony.b1 && Anthony.b1 ? Anthony.b1 : "0.00"}</span>
                      </div>
                      {Anthony.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative w-full border-[2px] border-[#F994BA] rounded cursor-pointer">
                      <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: Anthony, type: "No", odds: Anthony.l1, name: Anthony.nat, selectionId: Anthony.sid, marketid: Anthony.mid, betFor: "l" })}>
                        <span className="text-sm font-semibold leading-4">{Anthony && Anthony.l1 && Anthony.l1 ? Anthony.l1 : "0.00"}</span>
                      </div>
                      {Anthony.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 py-2">
                  <div className="flex flex-col justify-center items-center text-black w-full space-y-2">
                    <span className="text-sm font-bold">{Even && Even.b1 ? Even.b1 : "0.00"}</span>
                    <div className=" border-[2px] border-[#72BBEF] relative cursor-pointer rounded w-full h-full">
                      <div className="flex justify-center items-center bg-[#ECF3FA] text-center py-3" onClick={() => this.handleBackOpen({ data: Even, type: "Yes", odds: Even.b1, name: Even.nat, selectionId: Even.sid, marketid: Even.mid, betFor: "Even" })}>
                        <span className="text-sm font-bold leading-4 uppercase">{Even && Even.nat ? Even.nat : "Even"}</span>
                      </div>
                      {Even && Even.gstatus === "ACTIVE" ? null :
                        <div className="absolute top-0 bg-[#DDDDDD]/70 flex justify-center items-center w-full h-full rounded cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div>}
                    </div>
                    <span className="text-[16px]">0</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-black w-full space-y-2">
                    <span className="text-sm font-bold">{Odd && Odd.b1 ? Odd.b1 : "0.00"}</span>
                    <div className=" border-[2px] border-[#72BBEF] relative cursor-pointer rounded w-full h-full">
                      <div className="flex justify-center items-center bg-[#ECF3FA] text-center py-3" onClick={() => this.handleBackOpen({ data: Odd, type: "Yes", odds: Odd.b1, name: Odd.nat, selectionId: Odd.sid, marketid: Odd.mid, betFor: "Odd" })}>
                        <span className="text-sm font-bold leading-4 uppercase">{Odd && Odd.nat ? Odd.nat : "Odd"}</span>
                      </div>
                      {Odd && Odd.gstatus === "ACTIVE" ? null :
                        <div className="absolute top-0 bg-[#DDDDDD]/70 flex justify-center items-center w-full h-full rounded cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div>}
                    </div>

                    <span className="text-[16px]">0</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-black w-full space-y-2">
                    <span className="text-sm font-bold">{Black && Black.b1 ? Black.b1 : "0.00"}</span>
                    <div className=" border-[2px] border-[#72BBEF] relative cursor-pointer rounded w-full h-full">
                      <div className="flex justify-center items-center bg-[#ECF3FA] text-center py-3" onClick={() => this.handleBackOpen({ data: Black, type: "Yes", odds: Black.b1, name: Black.nat, selectionId: Black.sid, marketid: Black.mid, betFor: "Black" })}>
                        <BsSuitSpadeFill size={20} />
                        <BsSuitClubFill size={20} />
                      </div>
                      {Black && Black.gstatus === "ACTIVE" ? null :
                        <div className="absolute top-0 bg-[#DDDDDD]/70 flex justify-center items-center w-full h-full rounded cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div>}
                    </div>
                    <span className="text-[16px]">0</span>
                  </div>

                  <div className="flex flex-col justify-center items-center text-black w-full space-y-2">
                    <span className="text-sm font-bold">{Red && Red.b1 ? Red.b1 : "0.00"}</span>
                    <div className=" border-[2px] border-[#72BBEF] relative cursor-pointer rounded w-full h-full">
                      <div className="flex justify-center items-center bg-[#ECF3FA] text-center py-3  text-[#FE0000]" onClick={() => this.handleBackOpen({ data: Red, type: "Yes", odds: Red.b1, name: Red.nat, selectionId: Red.sid, marketid: Red.mid, betFor: "Red" })}>
                        <AiFillHeart size={20} />
                        <ImDiamonds size={20} />
                      </div>
                      {Red && Red.gstatus === "ACTIVE" ? null :
                        <div className="absolute top-0 bg-[#DDDDDD]/70 flex justify-center items-center w-full h-full rounded cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div>}
                    </div>
                    <span className="text-[16px]">0</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-black w-full space-y-2">
                    <span className="text-sm font-bold">{Under7 && Under7.b1 ? Under7.b1 : "0.00"}</span>
                    <div className=" border-[2px] border-[#72BBEF] relative cursor-pointer rounded w-full h-full">
                      <div className="flex justify-center items-center bg-[#ECF3FA] text-center py-3" onClick={() => this.handleBackOpen({ data: Under7, type: "Yes", odds: Under7.b1, name: Under7.nat, selectionId: Under7.sid, marketid: Under7.mid, betFor: "Under7" })}>
                        <span className="text-sm font-bold leading-4 uppercase">{Under7 && Under7.nat ? Under7.nat : "Under 7"}</span>
                      </div>
                      {Under7 && Under7.gstatus === "ACTIVE" ? null :
                        <div className="absolute top-0 bg-[#DDDDDD]/70 flex justify-center items-center w-full h-full rounded cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div>}
                    </div>
                    <span className="text-[16px]">0</span>
                  </div>
                  <div className="flex flex-col justify-center items-center text-black w-full space-y-2">
                    <span className="text-sm font-bold">{Over7 && Over7.b1 ? Over7.b1 : "0.00"}</span>
                    <div className=" border-[2px] border-[#72BBEF] relative cursor-pointer rounded w-full h-full">
                      <div className="flex justify-center items-center bg-[#ECF3FA] text-center py-3" onClick={() => this.handleBackOpen({ data: Over7, type: "Yes", odds: Over7.b1, name: Over7.nat, selectionId: Over7.sid, marketid: Over7.mid, betFor: "Over7" })}>
                        <span className="text-sm font-bold leading-4 uppercase">{Over7 && Over7.nat ? Over7.nat : "Over 7"}</span>
                      </div>
                      {Over7 && Over7.gstatus === "ACTIVE" ? null :
                        <div className="absolute top-0 bg-[#DDDDDD]/70 flex justify-center items-center w-full h-full rounded cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div>}
                    </div>
                    <span className="text-[16px]">0</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center space-y-2">
                  <span className="flex justify-center items-center text-black text-[16px] font-bold">12</span>
                  <div class="grid grid-cols-4 xl:grid-cols-12 lg:grid-cols-6 gap-10 px-5 ">
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: CardA, type: "Yes", odds: CardA.b1, name: CardA.nat, selectionId: CardA.sid, marketid: CardA.mid, betFor: "CardA" })}>
                        <img src="/assets/images/1.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {CardA.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card2, type: "Yes", odds: Card2.b1, name: Card2.nat, selectionId: Card2.sid, marketid: Card2.mid, betFor: "Card2" })}>
                        <img src="/assets/images/2.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card2.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card3, type: "Yes", odds: Card3.b1, name: Card3.nat, selectionId: Card3.sid, marketid: Card3.mid, betFor: "Card3" })}>
                        <img src="/assets/images/3.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card3.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className=" justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card4, type: "Yes", odds: Card4.b1, name: Card4.nat, selectionId: Card4.sid, marketid: Card4.mid, betFor: "Card4" })}>
                        <img src="/assets/images/4.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card4.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card5, type: "Yes", odds: Card5.b1, name: Card5.nat, selectionId: Card5.sid, marketid: Card5.mid, betFor: "Card5" })}>
                        <img src="/assets/images/5.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card5.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card6, type: "Yes", odds: Card6.b1, name: Card6.nat, selectionId: Card6.sid, marketid: Card6.mid, betFor: "Card6" })}>
                        <img src="/assets/images/6.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card6.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card7, type: "Yes", odds: Card7.b1, name: Card7.nat, selectionId: Card7.sid, marketid: Card7.mid, betFor: "Card7" })}>
                        <img src="/assets/images/7.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card7.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card8, type: "Yes", odds: Card8.b1, name: Card8.nat, selectionId: Card8.sid, marketid: Card8.mid, betFor: "Card8" })}>
                        <img src="/assets/images/8.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card8.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card9, type: "Yes", odds: Card9.b1, name: Card9.nat, selectionId: Card9.sid, marketid: Card9.mid, betFor: "Card9" })}>
                        <img src="/assets/images/9.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card9.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: Card10, type: "Yes", odds: Card10.b1, name: Card10.nat, selectionId: Card10.sid, marketid: Card10.mid, betFor: "Card10" })}>
                        <img src="/assets/images/10.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {Card10.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: CardJ, type: "Yes", odds: CardJ.b1, name: CardJ.nat, selectionId: CardJ.sid, marketid: CardJ.mid, betFor: "CardJ" })}>
                        <img src="/assets/images/11.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {CardJ.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                    <div className="relative cursor-pointer w-full ">
                      <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: CardQ, type: "Yes", odds: CardQ.b1, name: CardQ.nat, selectionId: CardQ.sid, marketid: CardQ.mid, betFor: "CardQ" })}>
                        <img src="/assets/images/12.jpg" alt="" className="w-12 h-14" />
                        <span className="text-base">0.00</span>
                      </div>
                      {CardQ.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                    </div>
                  </div>
                  <div className="relative cursor-pointer w-full ">
                    <div className="justify-center flex-col flex items-center" onClick={() => this.handleBackOpen({ data: CardK, type: "Yes", odds: CardK.b1, name: CardK.nat, selectionId: CardK.sid, marketid: CardK.mid, betFor: "CardK" })}>
                      <img src="/assets/images/13.jpg" alt="" className="w-12 h-14" />
                      <span className="text-base">0.00</span>
                    </div>
                    {CardK.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                  </div>
                </div>
                <div className="lg:hidden block">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div className="grid grid-cols-7 gap-2">
                      {result && result.length > 0 ? result.slice(0, 7).map((element, index) =>
                        <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : element.result === "2" ? "text-[#F74242]" : element.result === "3" ? "text-white" : "text-white"}`}>
                          {element.result === "1" ? "A" : element.result === "2" ? "B" : element.result === "3" ? "C" : ""}</span>)
                        : null}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {result && result.length > 0 ? result.slice(6, 9).map((element, index) =>
                        <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : element.result === "2" ? "text-[#F74242]" : element.result === "3" ? "text-white" : "text-white"}`}>
                          {element.result === "1" ? "A" : element.result === "2" ? "B" : element.result === "3" ? "C" : ""}</span>)
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-[40%] w-full space-y-2'>
              {this.state.betPlaceModal === true ?
                <BetPlaceDesktop
                  betSlipData={this.state.betSlipData}
                  updateStackOnclick={this.updateStackOnclick}
                  inputChange={this.inputChange}
                  decreaseCount={this.decreaseCount}
                  increaseCount={this.increaseCount}
                  placeBet={this.placeBet}
                  handleClose={this.handleClose}
                  count={this.state.count}
                />
                : null}

              <div className='flex justify-between items-center text-white pt-2 item-center'>
                <div className="bg-[#417E92] text-center w-full h-10 rounded-tl-md flex justify-center items-center text-md" >Bet Slip</div>
                <div className="bg-[#232323] text-center w-full h-10 rounded-tr-md flex justify-center items-center text-md cursor-pointer" onClick={() => this.handleStakeOpen()}>Edit Stake</div>
              </div>
              <div className='flex justify-between items-center bg-[#F7C200]'>
                <div className="text-xs flex items-center text-white">
                  <button className={`${activeTab === 1 ? "bg-[#0B7D36]" : "bg-[#0B7D36]"} px-2.5 py-[13px] text-center rounded-0`} onClick={() => this.handleTabClick(1)}>Match Bet (10)</button>
                  <button className={`${activeTab === 2 ? "bg-[#417E92]" : "bg-[#417E92]"} px-2.5 py-[13px] text-center rounded-0`} onClick={() => this.handleTabClick(2)}>Fancy Bet (20)</button>
                  {/* <button className={`${activeTab === 3 ? "bg-[#8B0000]" : "bg-[#8B0000]"} px-2.5 py-[13px] text-center rounded-0`} onClick={() => this.handleTabClick(3)}>Current Position</button> */}
                  <button className="bg-[#8B0000] px-2.5 py-[13px] text-center rounded-0" onClick={() => this.handlechangepage()}>Current Position</button>
                </div>
                <div className='flex items-center space-x-2'>
                  <AiFillCaretDown className="text-black hover:border cursor-pointer" onClick={this.handleBetList} />
                  {/* <FaRotate className="text-white" /> */}
                </div>
              </div>
              {this.state.betListShow ?
                <>
                  {activeTab === 1 ?
                    <div className='w-full overflow-x-auto scrollbar-hide'>
                      <table className="w-full">
                        <thead className="rounded-t bg-[#DCDCDC]">
                          <tr className='text-black'>
                            <th className="">No.</th>
                            <th className="">Runner</th>
                            <th className="">Bet Type</th>
                            <th className="">odds</th>
                            <th className="text-center">Stack</th>
                            <th className="">Type</th>
                            <th className="">Matched Time</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {/* {oddsBetData && oddsBetData.length > 0 ? oddsBetData.map((element, index) => (
                          <tr className="bg-white text-black ">
                            <td className="">{index + 1} </td>
                            <td className="font-semibold whitespace-nowrap">{element.teamName}</td>
                            <td className='font-semibold whitespace-nowrap'>{element.oddsType}</td>
                            <td className="font-semibold whitespace-nowrap flex justify-start items-center">{element.amount}</td>
                            <td className="font-semibold whitespace-nowrap text-center">{element.odds}</td>
                            <td className="font-semibold whitespace-nowrap">{element.type}</td>
                            <td className="font-semibold whitespace-nowrap">{element.createdAt}</td>
                          </tr>
                        )) : null
                        } */}


                        </tbody>
                      </table>
                    </div> : null}
                  {activeTab === 2 ?
                    <div className='w-full overflow-x-auto scrollbar-hide'>
                      <table className="w-full">
                        <thead className="rounded-t bg-[#DCDCDC]">
                          <tr className='text-black'>
                            <th className="">No.</th>
                            <th className="">Runner</th>
                            <th className="">Bet Type</th>
                            <th className="">odds</th>
                            <th className="text-center">Stack</th>
                            <th className="">Type</th>
                            <th className="">Matched Time</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {/* {fancyBetData && fancyBetData.length > 0 ? fancyBetData.map((element, index) => (
                          <tr className="bg-white text-black ">
                            <td className="">{index + 1} </td>
                            <td className="font-semibold whitespace-nowrap">{element.teamName}</td>
                            <td className='font-semibold whitespace-nowrap'>{element.oddsType}</td>
                            <td className="font-semibold whitespace-nowrap flex justify-start items-center">{element.amount}</td>
                            <td className="font-semibold whitespace-nowrap text-center">{element.odds}</td>
                            <td className="font-semibold whitespace-nowrap">{element.type}</td>
                            <td className="font-semibold whitespace-nowrap">{element.createdAt}</td>
                          </tr>
                        )) : null
                        } */}


                        </tbody>
                      </table>
                    </div> : null}
                  {activeTab === 3 ? <></> : null}
                </> : null}

              <div onClick={this.handleCompletedFancyModal} className='flex justify-between items-center bg-[#244455] cursor-pointer p-2'>
                <span className='text-white font-semibold'>Completed fancy</span>
                <div className='flex items-center space-x-2'>
                  <FaAngleDown className="text-white hover:border cursor-pointer" />
                  {/* <FaRotate className="text-white" /> */}
                </div>
              </div>
              {this.state.showCompletedFancy ? <div className='w-full overflow-x-auto scrollbar-hide'>
                <table className="w-full">
                  <thead className="rounded-t">
                    <tr className='border-2 border-gray-600 text-white'>
                      <th className="bg-gradient-to-b from-[#264B56] to-[#2A9D8F]">Title</th>
                      <th className="bg-[#2F4050]">P&L</th>
                      <th className="bg-gradient-to-b from-[#264B56] to-[#2A9D8F]">Com+</th>
                      <th className="bg-[#2F4050]">Com-</th>
                      <th className="bg-gradient-to-b from-[#264B56] to-[#2A9D8F]">Won By</th>
                      <th className="bg-[#2F4050] whitespace-nowrap">Net P&L</th>
                      <th className="bg-gradient-to-b from-[#264B56] to-[#2A9D8F] whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="bg-white">
                      <td className="text-[#252525] font-bold">Total</td>
                      <td className='font-semibold whitespace-nowrap text-[#252525]'>0</td>
                      <td className="font-semibold whitespace-nowrap text-[#008000]">0</td>
                      <td className="font-semibold whitespace-nowrap text-[#FF0000]">0</td>
                      <td className="font-semibold whitespace-nowrap"></td>
                      <td className="font-semibold whitespace-nowrap text-[#252525]">0</td>
                      <td className='font-semibold whitespace-nowrap'>0</td>
                    </tr>
                  </tbody>
                </table>
              </div> : null}
            </div>
          </div>
        </div >
      </>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users,
  };
}

export default connect(mapStateToProps)(AmarAkbarAnthony);
