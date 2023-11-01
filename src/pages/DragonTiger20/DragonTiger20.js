import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import io from 'socket.io-client';
import { userActions } from "../../_actions";
import FlipCountdown from '@rumess/react-flip-countdown';
import RoundedTab from "../../casino_components/RoundedTab/RoundedTab";
import Card from "../../casino_components/Card/Card";
import BetLockedRounded from "../../casino_components/BetLockedRounded/BetLockedRounded";
import { FaLock } from "react-icons/fa";
import { BsSuitSpadeFill, BsSuitClubFill, BsSuitDiamondFill, BsFillSuitHeartFill } from "react-icons/bs";
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa6";
import { CASINO } from '../../_config';
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';


class DragonTiger20 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCasinoModal: false,
      betOpen: false,
      myBetOpen: false,
      betSlipData: {},
      fieldsbet: {},
      errorsbet: {},
      count: 0,
      backBetModal: false,
      backBetModalMobile: false,
      BetPlaceDesktop: false,
      ResultModel: true,
      cardShow: true,
      casinoData: [],
    };

  }

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

  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex, betListShow: true });
  };
  componentDidMount() {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: "https://apipro.in/v2/api/casinoData?casinoType=dt20",
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
      url: "https://apipro.in/v2/api/casinoData?casinoType=dt20",
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
      casinoData: response.data.data,
    }));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  handleBackOpen = (data) => {
    this.setState({ betPlaceModal: true, betSlipData: { ...data, stake: "0" }, count: data.rate, teamname: data.name });
    console.log("datattatattatta", data);
    setTimeout(() => this.setState({ betPlaceModal: false }), 10000);
  };

  handleCardShow = () => {
    this.setState({ cardShow: !this.state.cardShow });
  };

  handleResult = () => {
    this.setState({ ResultModel: !this.state.ResultModel });
  };


  render() {
    let { users } = this.props;
    let { getCasinoByEventId } = users;
    const { casinoData, activeTab } = this.state;
    console.log("casinoDatacasinoDatacasinoData", casinoData);

    const { odds_data, real_time_card_array, game_type, market_id, timer } = casinoData ? casinoData : {};

    let { result, data } = casinoData ? casinoData : {};

    console.log("resultresultresultresult", data);
    let Dragon = data && data.t2 && data.t2[0] ? data.t2[0] : {};
    let Tiger = data && data.t2 && data.t2[1] ? data.t2[1] : {};
    let Tie = data && data.t2 && data.t2[2] ? data.t2[2] : {};
    let Pair = data && data.t2 && data.t2[3] ? data.t2[3] : {};

    let DragonEven = data && data.t2 && data.t2[4] ? data.t2[4] : {};
    let DragonOdd = data && data.t2 && data.t2[5] ? data.t2[5] : {};
    let DragonRed = data && data.t2 && data.t2[6] ? data.t2[6] : {};
    let DragonBlack = data && data.t2 && data.t2[7] ? data.t2[7] : {};
    let DragonCard1 = data && data.t2 && data.t2[8] ? data.t2[8] : {};
    let DragonCard2 = data && data.t2 && data.t2[9] ? data.t2[9] : {};
    let DragonCard3 = data && data.t2 && data.t2[10] ? data.t2[10] : {};
    let DragonCard4 = data && data.t2 && data.t2[11] ? data.t2[11] : {};
    let DragonCard5 = data && data.t2 && data.t2[12] ? data.t2[12] : {};
    let DragonCard6 = data && data.t2 && data.t2[13] ? data.t2[13] : {};
    let DragonCard7 = data && data.t2 && data.t2[14] ? data.t2[14] : {};
    let DragonCard8 = data && data.t2 && data.t2[15] ? data.t2[15] : {};
    let DragonCard9 = data && data.t2 && data.t2[16] ? data.t2[16] : {};
    let DragonCard10 = data && data.t2 && data.t2[17] ? data.t2[17] : {};
    let DragonCard11 = data && data.t2 && data.t2[18] ? data.t2[18] : {};
    let DragonCard12 = data && data.t2 && data.t2[19] ? data.t2[19] : {};
    let DragonCard13 = data && data.t2 && data.t2[20] ? data.t2[20] : {};

    let TigerCard1 = data && data.t2 && data.t2[25] ? data.t2[25] : {};
    let TigerCard2 = data && data.t2 && data.t2[26] ? data.t2[26] : {};
    let TigerCard3 = data && data.t2 && data.t2[27] ? data.t2[27] : {};
    let TigerCard4 = data && data.t2 && data.t2[28] ? data.t2[28] : {};
    let TigerCard5 = data && data.t2 && data.t2[29] ? data.t2[29] : {};
    let TigerCard6 = data && data.t2 && data.t2[30] ? data.t2[30] : {};
    let TigerCard7 = data && data.t2 && data.t2[31] ? data.t2[31] : {};
    let TigerCard8 = data && data.t2 && data.t2[32] ? data.t2[32] : {};
    let TigerCard9 = data && data.t2 && data.t2[33] ? data.t2[33] : {};
    let TigerCard10 = data && data.t2 && data.t2[34] ? data.t2[34] : {};
    let TigerCard11 = data && data.t2 && data.t2[35] ? data.t2[35] : {};
    let TigerCard12 = data && data.t2 && data.t2[36] ? data.t2[36] : {};
    let TigerCard13 = data && data.t2 && data.t2[37] ? data.t2[37] : {};

    let TigerEven = data && data.t2 && data.t2[21] ? data.t2[21] : {};
    let TigerOdd = data && data.t2 && data.t2[22] ? data.t2[22] : {};
    let TigerRed = data && data.t2 && data.t2[23] ? data.t2[23] : {};
    let TigerBlack = data && data.t2 && data.t2[24] ? data.t2[24] : {};
    let t1 = data && data.t1 && data.t1[0] ? data.t1[0] : {};



    return (
      <>
        {
          this.state.EditStakeModal === true ?
            <EditStakeDesktop
              handleClose={this.handleClose}
              stakehandleClose={this.handleClose}
            />
            : null
        }
        <div className="min-h-full overflow-y-auto flex" >
          <Sidebar />
          <div className="lg:flex w-full h-full p-1.5 lg:space-x-1.5 space-y-4 lg:space-y-0 pb-24s">
            <div className="lg:w-[60%] w-full h-full bg-white">
              <div className="bg-black flex justify-between w-full relative md:text-sm text-[10px] xl:h-[610px] md:h-[300px] h-[200px]">
                <iframe src={CASINO.VideoUrl + `3035`} title=" " className='relative w-full  ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm uppercase">{game_type ? game_type : "20-20 Dragon Tiger"}</span>
                  <span className="text-white font-semibold lg:text-sm text-xs">Round ID: {t1 && t1.mid ? t1.mid : null}</span>
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
                            <span key={index} className={`bg-white/20 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                              {element.result === "1" ? "D" : "T"}</span>)
                            : null}
                        </div>
                        : null}
                    </div>
                  </div>
                </div>

                <div className="absolute lg:top-[41%] top-[39%] left-0">
                  <div className="py-1 w-full px-2 space-x-2 bg-black/50 rounded-r-md flex justify-between items-center h-14 lg:h-16">
                    {this.state.cardShow ?
                      <div className="flex space-x-2 justify-start">
                        <img src={`/cards/${t1 && t1.C1 ? t1.C1 : 1}.png`} alt="card" className="h-10 lg:h-14 w-7 lg:w-10" />
                        <img src={`/cards/${t1 && t1.C2 ? t1.C2 : 1}.png`} alt="card" className="h-10 lg:h-14 w-7 lg:w-10" />
                      </div>
                      : null}
                    <div>
                      <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${t1 && t1.autotime === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className="md:text-4xl text-2xl font-bold text-white absolute">{t1 && t1.autotime ? t1.autotime : null}</span>
                </div>
              </div>

              <div className="bg-[#EEEE] w-full p-2">
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                  <div className="lg:col-span-4 col-span-1 gap-12 flex relative">
                    <div className=" border-[2px] border-[#FC4242] relative cursor-pointer w-full h-full p-2">
                      <div className="bg-[#F8D7DA] flex justify-between items-center text-black " onClick={() => this.handleBackOpen({ data: Dragon, type: "Yes", odds: Dragon.rate, name: Dragon.nat, selectionId: Dragon.sid, marketid: Dragon.mid, betFor: "Dragon" })}>
                        <span className="text-sm px-2 capitalize font-semibold">{Dragon && Dragon.nat ? Dragon.nat : "Dragon"}</span>
                        <div className="flex flex-col pr-2">
                          <span className="text-sm px-2  font-semibold">{Dragon && Dragon.rate ? Dragon.rate : 0}</span>
                          <span className="text-[16px] px-2 ">0</span>
                        </div>
                      </div>
                      {Dragon.gstatus === "0" ?
                        <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div> : null}
                    </div>
                    <div className="border-[2px] border-[#EF910F]  w-full h-full p-2 cursor-pointer relative">
                      <div className="bg-[#F9F0D1]  flex justify-between items-center text-black" onClick={() => this.handleBackOpen({ data: Tiger, type: "No", odds: Tiger.rate, name: Tiger.nat, selectionId: Tiger.sid, marketid: Tiger.mid, betFor: "Tiger" })}>
                        <span className="text-sm px-4 pl-4 capitalize font-semibold">{Tiger && Tiger.nat ? Tiger.nat : "Tiger"}</span>
                        <div className="flex flex-col"  >
                          <span className="text-sm px-2 font-semibold">{Tiger && Tiger.rate ? Tiger.rate : 0}</span>
                          <span className="text-[16px] px-2 ">0</span>
                        </div>
                      </div>
                      {Tiger.gstatus === "0" ?
                        <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full cursor-pointer">
                          <FaLock size={16} className="text-black" />
                        </div> : null}
                    </div>
                    <div className="absolute 2xl:left-[45%] lg:left-[42%] md:left-[45%] left-[39%] -top-2 ">
                      <div className="relative h-full w-full">
                        <div className="bg-[#03B37F] flex flex-col justify-center items-center px-3 py-2 text-white rounded-full cursor-pointer" onClick={() => this.handleBackOpen({ data: Tie, type: "Yes", odds: Tie.rate, name: Tie.nat, selectionId: Tie.sid, marketid: Tie.mid, betFor: "Tie" })}>
                          <span className="px-2 font-semibold">{Tie && Tie.nate ? Tie.nate : "Tie"}</span>
                          <span className="px-2 font-semibold">{Tie && Tie.rate ? Tie.rate : 0}</span>
                          <span className="px-2 text-black">0</span>
                        </div>
                        {Tie.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 border-[2px] border-[#434343] w-full h-full relative" onClick={() => this.handleBackOpen({ data: Pair, type: "Yes", odds: Pair.rate, name: Pair.nat, selectionId: Pair.sid, marketid: Pair.mid, betFor: "Pair" })}>
                    <div className="bg-[#434343] flex justify-between items-center text-white w-full h-full p-2 cursor-pointer">
                      <span className="text-sm px-2 capitalize font-semibold">{Pair && Pair.nat ? Pair.nat : "Pair"}</span>
                      <div className="flex flex-col">
                        <span className="text-sm px-2 font-semibold text-black">{Pair && Pair.rate ? Pair.rate : 0}</span>
                        <span className="text-[16px] px-2 ">0</span>
                      </div>
                    </div>
                    {Pair.gstatus === "0" ?
                      <div className="absolute top-0 bg-white/70 flex justify-center items-center w-full h-full cursor-pointer">
                        <FaLock size={16} className="text-black" />
                      </div> : null}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white w-full p-2 space-y-2">
                  <div className="flex justify-start items-center bg-[#DDDDDD] px-2 py-1.5">
                    <span className="text-red-500 cursor-pointer capitalize font-semibold">Dragon</span>
                  </div>
                  <div className="flex w-full space-x-4">
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{DragonEven && DragonEven.rate ? DragonEven.rate : 0}</span>
                      <div className=" relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer" >
                        <div className="bg-white flex justify-center items-center" onClick={() => this.handleBackOpen({ data: DragonEven, type: "Yes", odds: DragonEven.rate, name: DragonEven.nat, selectionId: DragonEven.sid, marketid: DragonEven.mid, betFor: "Dragon Even" })}>
                          <span className="text-base py-2 font-semibold text-black uppercase">{DragonEven && DragonEven.nate ? DragonEven.nate : "Even"}</span>
                        </div>
                        {DragonEven.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{DragonOdd && DragonOdd.rate ? DragonOdd.rate : 0}</span>
                      <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer ">
                        <div className="bg-white flex justify-center items-center" onClick={() => this.handleBackOpen({ data: DragonOdd, type: "Yes", odds: DragonOdd.rate, name: DragonOdd.nat, selectionId: DragonOdd.sid, marketid: DragonOdd.mid, betFor: "Dragon Odd" })}>
                          <span className="text-base py-2 font-semibold text-black uppercase">{DragonOdd && DragonOdd.nate ? DragonOdd.nate : "ODD"}</span>
                        </div>
                        {DragonOdd.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px]  px-2 font-semibold">{DragonBlack && DragonBlack.rate ? DragonBlack.rate : 0}</span>
                      <div className="relative border-[2px] w-full border-[#72BBEF] rounded cursor-pointer">
                        <div className="bg-white text-black py-2.5 flex justify-center items-center" onClick={() => this.handleBackOpen({ data: DragonBlack, type: "Yes", odds: DragonBlack.rate, name: DragonBlack.nat, selectionId: DragonBlack.sid, marketid: DragonBlack.mid, betFor: "Dragon Black" })}>
                          <BsSuitSpadeFill size={20} />
                          <BsSuitClubFill size={20} />
                        </div>
                        {DragonBlack.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{DragonRed && DragonRed.rate ? DragonRed.rate : 0}</span>
                      <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer ">
                        <div className="bg-white text-red-500 py-2.5 flex justify-center items-center" onClick={() => this.handleBackOpen({ data: DragonRed, type: "Yes", odds: DragonRed.rate, name: DragonRed.nat, selectionId: DragonRed.sid, marketid: DragonRed.mid, betFor: "Dragon Red  " })}>
                          <BsFillSuitHeartFill size={20} />
                          <BsSuitDiamondFill size={20} />
                        </div>
                        {DragonRed.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-[#DDDDDD] px-2 py-1.5">
                    <span className="text-black cursor-pointer capitalize font-semibold">0</span>
                  </div>
                  <div class="w-full flex flex-col justify-center items-center px-12">
                    <div className="w-full grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3 gap-0">
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard1}
                        num={"1"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard2}
                        num={"2"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard3}
                        num={"3"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard4}
                        num={"4"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard5}
                        num={"5"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard6}
                        num={"6"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard7}
                        num={"7"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard8}
                        num={"8"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard9}
                        num={"9"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard10}
                        num={"10"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard11}
                        num={"11"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard12}
                        num={"12"}
                      />
                    </div>
                    <div>
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={DragonCard13}
                        num={"13"}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white w-full p-2 space-y-1">
                  <div className="flex justify-start items-center bg-[#DDDDDD] px-2 py-1.5">
                    <span className="text-red-500 cursor-pointer capitalize font-semibold">Tiger</span>
                  </div>
                  <div className="flex w-full space-x-4">
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{TigerEven && TigerEven.rate ? TigerEven.rate : 0}</span>
                      <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer">
                        <div className="bg-white flex justify-center items-center" onClick={() => this.handleBackOpen({ data: TigerEven, type: "Yes", odds: TigerEven.rate, name: TigerEven.nat, selectionId: TigerEven.sid, marketid: TigerEven.mid, betFor: "Tiger Even" })}>
                          <span className="text-base py-2 font-semibold text-black uppercase">{TigerEven && TigerEven.nate ? TigerEven.nate : "Even"}</span>
                        </div>
                        {TigerEven.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{TigerOdd && TigerOdd.rate ? TigerOdd.rate : 0}</span>
                      <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer">
                        <div className="bg-white  flex justify-center items-center" onClick={() => this.handleBackOpen({ data: TigerOdd, type: "Yes", odds: TigerOdd.rate, name: TigerOdd.nat, selectionId: TigerOdd.sid, marketid: TigerOdd.mid, betFor: "Tiger Odd" })}>
                          <span className="text-base py-2 font-semibold text-black uppercase">{TigerOdd && TigerOdd.nate ? TigerOdd.nate : "ODD"}</span>
                        </div>
                        {TigerOdd.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{TigerBlack && TigerBlack.rate ? TigerBlack.rate : 0}</span>
                      <div className="relative border-[2px] border-[#72BBEF] rounded cursor-pointer w-full">
                        <div className="bg-white  text-black w-full flex justify-center items-center py-2.5 " onClick={() => this.handleBackOpen({ data: TigerBlack, type: "Yes", odds: TigerBlack.rate, name: TigerBlack.nat, selectionId: TigerBlack.sid, marketid: TigerBlack.mid, betFor: "Tiger Black" })}>
                          <BsSuitSpadeFill size={20} />
                          <BsSuitClubFill size={20} />
                        </div>
                        {TigerBlack.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                    <div className=" w-full h-full flex flex-col items-center">
                      <span className="uppercase text-[16px] px-2 font-semibold">{TigerRed && TigerRed.rate ? TigerRed.rate : 0}</span>
                      <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer">  
                      <div className="bg-white  py-2.5 text-red-500 flex justify-center items-center" onClick={() => this.handleBackOpen({ data: TigerRed, type: "Yes", odds: TigerRed.rate, name: TigerRed.nat, selectionId: TigerRed.sid, marketid: TigerRed.mid, betFor: "Tiger Red" })}>
                        <BsFillSuitHeartFill size={20} />
                        <BsSuitDiamondFill size={20} />
                        {TigerRed.gstatus === "0" ? <BetLockedRounded /> : null}
                      </div>
                      </div>
                      <span className="text-[16px] px-2 font-semibold">0</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-[#DDDDDD] px-2 py-1.5">
                    <span className="text-black cursor-pointer capitalize font-semibold">0</span>
                  </div>
                  <div class="w-full flex flex-col justify-center items-center px-12">
                    <div className="w-full grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3 gap-0">
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard1}
                        num={"1"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard2}
                        num={"2"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard3}
                        num={"3"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard4}
                        num={"4"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard5}
                        num={"5"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard6}
                        num={"6"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard7}
                        num={"7"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard8}
                        num={"8"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard9}
                        num={"9"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard10}
                        num={"10"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard11}
                        num={"11"}
                      />
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard12}
                        num={"12"}
                      />
                    </div>
                    <div>
                      <Card
                        handleBackOpen={this.handleBackOpen}
                        Data={TigerCard13}
                        num={"13"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden block">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <div className="grid grid-cols-7 gap-2">
                    {result && result.length > 0 ? result.slice(0, 7).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "1" ? "D" : "T"}</span>)
                      : null}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {result && result.length > 0 ? result.slice(6, 9).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "1" ? "D" : "T"}</span>)
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

export default connect(mapStateToProps)(DragonTiger20);
