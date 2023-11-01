import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import FlipCountdown from '@rumess/react-flip-countdown';
import { FaGripLinesVertical } from "react-icons/fa6";
import io from 'socket.io-client';
import axios from "axios";
import Card from "../../casino_components/Card/Card"
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsSuitSpadeFill, BsSuitClubFill, BsSuitDiamondFill, BsFillSuitHeartFill } from "react-icons/bs";
import { CASINO } from '../../_config';
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';


class Lucky7 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCasinoModal: false,
      backBetModal: false,
      betSlipData: {},
      fieldsbet: {},
      errorsbet: {},
      count: 0,
      casinoData: [],
      BetPlaceDesktop: false,
      ResultModel: true,
      Result: false,
      backBetModalMobile: false,
      cardShow: true
    };
  }



  handleBackOpen = (data) => {
    this.setState({ betPlaceModal: true, betSlipData: { ...data, stake: "0" }, count: data.rate, teamname: data.name });
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
      "odds": this.state.betSlipData.odds + "",
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
      url: "https://casino.1ex.in/getMarketcashino?id=lucky7_a",
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
      url: "https://casino.1ex.in/getMarketcashino?id=lucky7_a",
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
      casinoData: response.data.data.lucky7_a,
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
    const { odds_data, real_time_card_array, result, game_type, market_id, timer } = casinoData ? casinoData : {};

    let LOWCard = odds_data && odds_data.t2 && odds_data.t2[0] ? odds_data.t2[0] : {};
    let HIGHCard = odds_data && odds_data.t2 && odds_data.t2[1] ? odds_data.t2[1] : {};
    let Even = odds_data && odds_data.t2 && odds_data.t2[2] ? odds_data.t2[2] : {};
    let Odd = odds_data && odds_data.t2 && odds_data.t2[3] ? odds_data.t2[3] : {};
    let Red = odds_data && odds_data.t2 && odds_data.t2[4] ? odds_data.t2[4] : {};
    let Black = odds_data && odds_data.t2 && odds_data.t2[5] ? odds_data.t2[5] : {};
    let CardA = odds_data && odds_data.t2 && odds_data.t2[6] ? odds_data.t2[6] : {};
    let Card2 = odds_data && odds_data.t2 && odds_data.t2[7] ? odds_data.t2[7] : {};
    let Card3 = odds_data && odds_data.t2 && odds_data.t2[8] ? odds_data.t2[8] : {};
    let Card4 = odds_data && odds_data.t2 && odds_data.t2[9] ? odds_data.t2[9] : {};
    let Card5 = odds_data && odds_data.t2 && odds_data.t2[10] ? odds_data.t2[10] : {};
    let Card6 = odds_data && odds_data.t2 && odds_data.t2[11] ? odds_data.t2[11] : {};
    let Card7 = odds_data && odds_data.t2 && odds_data.t2[12] ? odds_data.t2[12] : {};
    let Card8 = odds_data && odds_data.t2 && odds_data.t2[13] ? odds_data.t2[13] : {};
    let Card9 = odds_data && odds_data.t2 && odds_data.t2[14] ? odds_data.t2[14] : {};
    let Card10 = odds_data && odds_data.t2 && odds_data.t2[15] ? odds_data.t2[15] : {};
    let CardJ = odds_data && odds_data.t2 && odds_data.t2[16] ? odds_data.t2[16] : {};
    let CardQ = odds_data && odds_data.t2 && odds_data.t2[17] ? odds_data.t2[17] : {};
    let CardK = odds_data && odds_data.t2 && odds_data.t2[18] ? odds_data.t2[18] : {};
    let imageData = real_time_card_array && real_time_card_array.playerA_card ? real_time_card_array.playerA_card : {};

    console.log("casinoDatacasinoDatacasinoData111111111111", casinoData);
    console.log("LOWCardLOWCardLOWCardLOWCard", LOWCard);


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
          <div className="lg:flex w-full h-full p-1.5 lg:space-x-1.5 space-y-4 lg:space-y-0">
            <div className="lg:w-[60%] w-full h-full bg-white">
              <div className="bg-black flex justify-between w-full relative xl:h-[610px] md:h-[350px] h-[250px]">
                <iframe src={CASINO.VideoUrl + `3058`} title=" " className='relative w-full  ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm">{game_type ? game_type : "32 CARDS"}</span>
                  <span className="text-white font-semibold lg:text-sm text-xs">
                    Round ID: {market_id}
                  </span>
                </div>

                <div className="absolute top-[41%] left-0">
                  <div className="py-1 px-2 bg-black/50 rounded-r-md flex justify-between items-center space-x-2 h-14 lg:h-16">
                    {this.state.cardShow ?
                      <img src={`/cards/${imageData ? imageData : 1}.png`} alt="card" className="h-10 lg:h-14 w-8 lg:w-10" /> : null}
                    <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end absolute top-0 right-0 lg:p-3 p-1.5 space-y-1">
                  <div className="flex justify-center items-center space-x-2">
                    <span className="p-1 lg:p-1.5 text-lg lg:text-2xl rounded-full border-[2px] border-white text-white cursor-pointer"><FaHome /></span>
                    <span onClick={this.handleResult} className="lg:block hidden p-1.5 text-2xl rounded-full border-[2px] border-white text-white cursor-pointer"><FaChevronCircleUp /></span>
                  </div>
                  <div className="lg:block hidden">
                    <div className="py-1 px-2 bg-black/50 rounded-md flex justify-between items-center space-x-2">
                      {this.state.ResultModel ?
                        <div className="grid grid-cols-2 gap-1">
                          {result && result.length > 0 ? result.map((element, index) =>
                            <span key={index} className={`bg-white/20 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "0" ? "text-white" : element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                              {element.result === "0" ? "T" : element.result === "1" ? "H" : element.result === "2" ? "L" : null}</span>)
                            : null}
                        </div> : null}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${timer === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className={`md:text-4xl text-2xl font-bold text-white absolute`}>{timer ? timer : null}</span>
                </div>
                {/* <div className="flex justify-end items-end absolute md:bottom-2 bottom-4 right-0 ">
                <FlipCountdown
                  titlePosition='hidden'
                  hideYear
                  hideMonth
                  hideDay
                  hideHour
                  hideMinute
                  endAtZero
                  size='small'
                  endAt={new Date(Date.now() + 1000 * (t1 && t1.autotime ? t1.autotime : null)).toUTCString()}
                />
              </div> */}
              </div>

              <div className="py-2">
                <div className=" bg-[#EEEEEE] w-full ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 w-full">
                    <div className="w-full h-full grid grid-cols-3 gap-2">
                      <div className="border-[6px] border-[#FC4242] w-full h-full relative">
                        <div className="bg-[#434343] flex flex-col justify-center items-center w-full h-full py-2 cursor-pointer" onClick={() => this.handleBackOpen({ data: LOWCard, type: "Yes", odds: LOWCard.rate, name: LOWCard.nat, selectionId: LOWCard.sid, marketid: LOWCard.mid, betFor: "b" })}>
                          <span className="text-sm px-2 text-white">{LOWCard && LOWCard.rate ? LOWCard.rate : 0}</span>
                          <span className="text-sm px-2 text-white capitalize">{LOWCard && LOWCard.nat ? LOWCard.nat : "Low Card"}</span>
                          <span className="text-[16px] text-black px-2 font-semibold">0.00</span>
                        </div>
                        {LOWCard.gstatus === "0" ?
                          <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full cursor-pointer">
                            <FaLock size={16} className="text-black" />
                          </div> : null}
                      </div>
                      <div className=" flex justify-center items-center">
                        <img src="/assets/images/7.jpg" alt="aaaaaa" className="h-14 w-12" />
                      </div>
                      <div className="border-[6px] border-[#03B37F] w-full h-full relative">
                        <div className="bg-[#434343] flex flex-col justify-center items-center w-full h-full py-2 cursor-pointer" onClick={() => this.handleBackOpen({ data: HIGHCard, type: "No", odds: HIGHCard.rate, name: HIGHCard.nat, selectionId: HIGHCard.sid, marketid: HIGHCard.mid, betFor: "l" })}>
                          <span className="text-sm px-2 text-white">{HIGHCard && HIGHCard.rate ? HIGHCard.rate : 0}</span>
                          <span className="text-sm px-2 text-white capitalize">{HIGHCard && HIGHCard.nat ? HIGHCard.nat : "Low Card"}</span>
                          <span className="text-[16px] text-black px-2 font-semibold">0.00</span>
                        </div>
                        {HIGHCard.gstatus === "0" ?
                          <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full cursor-pointer">
                            <FaLock size={16} className="text-black" />
                          </div> : null}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 w-full h-full">
                      <div className="relative w-full h-full">
                        <div className="bg-[#434343] flex flex-col justify-center items-center h-full py-2 rounded-md cursor-pointer" onClick={() => this.handleBackOpen({ data: Even, type: "Yes", odds: Even.rate, name: Even.nat, selectionId: Even.sid, marketid: Even.mid, betFor: "Even" })}>
                          <span className="text-sm px-2 text-white">{Even && Even.rate ? Even.rate : 0}</span>
                          <span className="text-sm px-2 text-white capitalize">{Even && Even.nat ? Even.nat : "Low Card"}</span>
                          <span className="text-[16px] text-black px-2 font-semibold">0.00</span>
                        </div>
                        {Even.gstatus === "0" ?
                          <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full rounded-md cursor-pointer">
                            <FaLock size={16} className="text-black" />
                          </div> : null}
                      </div>
                      <div className="relative w-full h-full">
                        <div className="bg-[#434343] flex flex-col justify-center items-center h-full py-2 rounded-md cursor-pointer" onClick={() => this.handleBackOpen({ data: Odd, type: "Yes", odds: Odd.rate, name: Odd.nat, selectionId: Odd.sid, marketid: Odd.mid, betFor: "Odd " })}>
                          <span className="text-sm px-2 text-white">{Odd && Odd.rate ? Odd.rate : 0}</span>
                          <span className="text-sm px-2 text-white capitalize">{Odd && Odd.nat ? Odd.nat : "Low Card"}</span>
                          <span className="text-[16px] text-black px-2 font-semibold">0.00</span>
                        </div>
                        {Odd.gstatus === "0" ?
                          <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full rounded-md cursor-pointer">
                            <FaLock size={16} className="text-black" />
                          </div> : null}
                      </div>
                      <div className="relative w-full h-full">
                        <div className="bg-[#434343] flex flex-col justify-center items-center h-full py-2 rounded-md cursor-pointer" onClick={() => this.handleBackOpen({ data: Black, type: "Yes", odds: Black.rate, name: Black.nat, selectionId: Black.sid, marketid: Black.mid, betFor: "Black" })}>
                          <span className="text-sm px-2 text-white">{Black && Black.rate ? Black.rate : 0}</span>
                          <div className="flex justify-center items-center text-black">
                            <BsSuitSpadeFill />
                            <BsSuitClubFill />
                          </div>
                          <span className="text-[16px] text-black px-2 font-semibold">0.00</span>
                        </div>
                        {Black.gstatus === "0" ?
                          <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full rounded-md cursor-pointer">
                            <FaLock size={16} className="text-black" />
                          </div> : null}
                      </div>
                      <div className="relative w-full h-full">
                        <div className="bg-[#434343] flex flex-col justify-center items-center h-full py-2 rounded-md cursor-pointer" onClick={() => this.handleBackOpen({ data: Red, type: "Yes", odds: Red.rate, name: Red.nat, selectionId: Red.sid, marketid: Red.mid, betFor: "Red" })}>
                          <span className="text-sm px-2 text-white">{Red && Red.rate ? Red.rate : 0}</span>
                          <div className="flex justify-center items-center text-red-500">
                            <BsFillSuitHeartFill />
                            <BsSuitDiamondFill />
                          </div>
                          <span className="text-[16px] text-black px-2 font-semibold">0.00</span>
                        </div>
                        {Red.gstatus === "0" ?
                          <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full rounded-md cursor-pointer">
                            <FaLock size={16} className="text-black" />
                          </div> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-2 lg:block hidden">
                <div className="bg-[#EEEE]">
                  <p className="flex justify-center items-center text-black text-[16px] font-bold">{CardA.rate}</p>
                  <div class="w-full flex flex-col justify-center items-center">
                    <div class="grid grid-cols-10 gap-6">
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={CardA}
                        num={"1"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card2}
                        num={"2"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card3}
                        num={"3"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card4}
                        num={"4"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card5}
                        num={"5"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card6}
                        num={"6"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card7}
                        num={"7"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card8}
                        num={"8"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card9}
                        num={"9"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={Card10}
                        num={"10"}
                      />
                    </div>
                    <div class="grid grid-cols-3 gap-6">
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={CardJ}
                        num={"11"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={CardQ}
                        num={"12"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={CardK}
                        num={"13"}
                      />
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-full text-center px-4 py-1 lg:hidden block">
                <p className="flex justify-center items-center text-black font-semibold">{CardA.rate}</p>
                <div className="grid grid-cols-3 gap-6 px-16">
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={CardA}
                    num={"1"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card2}
                    num={"2"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card3}
                    num={"3"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card4}
                    num={"4"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card5}
                    num={"5"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card6}
                    num={"6"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card7}
                    num={"7"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card8}
                    num={"8"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card9}
                    num={"9"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={Card10}
                    num={"10"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={CardJ}
                    num={"11"}
                  />
                  <Card
                    handleBackOpen={this.handleBackOpen}
                    Data={CardQ}
                    num={"12"}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <Card
                      handleBackOpen={this.handleBackOpen}
                      Data={CardK}
                      num={"13"}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:hidden block">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <div className="grid grid-cols-7 gap-2">
                    {result && result.length > 0 ? result.slice(0, 7).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "0" ? "text-white" : element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "0" ? "T" : element.result === "1" ? "H" : element.result === "2" ? "L" : null}</span>)
                      : null}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {result && result.length > 0 ? result.slice(6, 9).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "0" ? "text-white" : element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "0" ? "T" : element.result === "1" ? "H" : element.result === "2" ? "L" : null}</span>)
                      : null}
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
        </div>
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

export default connect(mapStateToProps)(Lucky7);
