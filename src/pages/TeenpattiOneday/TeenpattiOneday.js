import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import FlipCountdown from '@rumess/react-flip-countdown';
import Marquee from "react-fast-marquee";
import { FaGripLinesVertical } from "react-icons/fa6";
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import BetLocked from "../../casino_components/BetLocked/BetLocked";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
import io from 'socket.io-client';
import { CASINO } from "../../_config";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';


class TeenpattiOneday extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      betOpen: false,
      backBetModal: false,
      betSlipData: {},
      fieldsbet: {},
      errorsbet: {},
      count: 0,
      cardShow: true,
      ResultModel: true
    };
  }

  // componentDidMount() {
  //   let data = {
  //     eventId: this.props.match.params.eventId,
  //   };

  //   console.log('eventfuncsnoItemseventfuncsnoItemseventfuncsnoItemseventfuncsnoItems', data);
  //   // this.props.dispatch(userActions.getCasinoByEventId(data));
  //   let { users } = this.props;
  //   let { getCasinoByEventId } = users;
  //   let { socketURL } = getCasinoByEventId ? getCasinoByEventId : {};
  //   this.socket = io.connect(socketURL);
  //   this.socket.emit('JoinRoom', "teen20");
  //   this.socket.on("teen20", this.handleIncomingData);
  // }

  // handleIncomingData = (socketData) => {
  //   this.setState(() => ({
  //     casinoData: socketData,
  //   }));
  // };
  
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
      url: "https://apipro.in/v2/api/casinoData?casinoType=teen20",
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
      url: "https://apipro.in/v2/api/casinoData?casinoType=teen20",
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
    let { eventfuncsnoItems, getCasinoByEventId } = users;
    const { casinoData, activeTab } = this.state;
    const { data, result } = casinoData ? casinoData : {};

    let PlayerA = data && data.t2[0] ? data.t2[0] : {};
    let PlayerAPlus = data && data.t2[1] ? data.t2[1] : {};
    let PlayerB = data && data.t2[2] ? data.t2[2] : {};
    let PlayerBPlus = data && data.t2[3] ? data.t2[3] : {};

    let t1 = data && data.t1 && data.t1[0] ? data.t1[0] : {};

    console.log("RENDERcasinoDatacasinoDatacasinoData", casinoData);

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
          <div className="lg:flex w-full h-full p-1.5 space-x-1.5">
            <div className="lg:w-[60%] w-full h-full bg-white">
              <div className="bg-black flex justify-between w-full relative md:text-sm text-[10px] xl:h-[610px] md:h-[300px] h-[200px]">
                <iframe src={CASINO.VideoUrl + `3031`} title=" " className='relative w-full  ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm uppercase">{"TEENPATTI 1-DAY"}</span>
                  <span className="text-white font-semibold lg:text-sm text-xs">Round ID: {t1 && t1.mid ? t1.mid : null}</span>
                </div>
                <div className="flex flex-col justify-end items-end absolute top-0 right-0 lg:p-3 p-1.5 space-y-1">
                  <div className="flex justify-center items-center space-x-2">
                    <span className="p-1.5 text-2xl rounded-full border-[2px] border-white text-white cursor-pointer"><FaHome /></span>
                    <span onClick={this.handleResult} className="lg:block hidden p-1.5 text-2xl rounded-full border-[2px] border-white text-white cursor-pointer"><FaChevronCircleUp /></span>
                  </div>
                  <div className="lg:block hidden">
                    <div className="py-1 px-2 bg-black/50 rounded-md flex justify-between items-center space-x-2">
                      {this.state.ResultModel ?
                        <div className="grid grid-cols-2 gap-1">
                          {result && result.length > 0 ? result.map((element, index) =>
                            <span key={index} className={`bg-white/20 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                              {element.result === "1" ? "A" : "B"}</span>)
                            : null}
                        </div> : null}
                    </div>
                  </div>
                </div>
                <div className="absolute top-[41%] left-0">
                  <div className="py-1 px-2 bg-black/50 rounded-md flex justify-between items-center space-x-2 h-32">
                    {this.state.cardShow ?
                      <div className="w-full p-1 space-y-1">
                        <div className="flex space-x-2 justify-start">
                          <img src={`/cards/${t1 && t1.C1 ? t1.C1 : 1}.png`} alt="card" className="h-14 w-10" />
                          <img src={`/cards/${t1 && t1.C2 ? t1.C2 : 1}.png`} alt="card" className="h-14 w-10" />
                          <img src={`/cards/${t1 && t1.C3 ? t1.C3 : 1}.png`} alt="card" className="h-14 w-10" />
                        </div>
                        <div className="flex space-x-2 justify-start">
                          <img src={`/cards/${t1 && t1.C4 ? t1.C4 : 1}.png`} alt="card" className="h-14 w-10" />
                          <img src={`/cards/${t1 && t1.C5 ? t1.C5 : 1}.png`} alt="card" className="h-14 w-10" />
                          <img src={`/cards/${t1 && t1.C6 ? t1.C6 : 1}.png`} alt="card" className="h-14 w-10" />
                        </div>
                      </div> : null}
                    <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                  </div>
                </div>

                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${t1 && t1.autotime === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className={`text-4xl font-bold text-white absolute`}>{t1 && t1.autotime ? t1.autotime : null}</span>
                </div>
              </div>

              <div className="space-y-1 py-2">
                <div className="flex justify-between items-center text-center text-black uppercase">
                  <div class="w-full font-semibold text-[16px] py-1 text-left">Main</div>
                  <div class="w-full font-semibold text-[16px] py-1">Back</div>
                  <div class="w-full font-semibold text-[16px] py-1">Lay</div>
                </div>
                <div className="flex justify-between items-center space-x-1">
                  <div className="w-full flex justify-between items-center text-sm font-semibold uppercase text-gray-800 p-2 bg-[#EEEE] rounded border-[4px] border-[#EEEE]">
                    <span>{PlayerA && PlayerA.nation ? PlayerA.nation : "Player A"}</span>
                    <span>0</span>
                  </div>
                  <div className="w-full border-[2px] border-[#72BBEF] rounded cursor-pointer relative" >
                    <div className="text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerA, type: "Yes", odds: PlayerA.rate, name: PlayerA.nation, selectionId: PlayerA.sid, marketid: PlayerA.mid, betFor: "Player A" })}>
                      <span className="text-[18px] font-semibold text-black">{PlayerA && PlayerA.rate ? PlayerA.rate : "0.00"}</span>
                    </div>
                    {PlayerA && PlayerA.gstatus === '1' ? null : <BetLocked />}
                  </div>
                  <div className="w-full border-[2px] border-[#F994BA] cursor-pointer rounded relative">
                    <div className=" text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerAPlus, type: "No", odds: PlayerAPlus.rate, name: PlayerAPlus.nation, selectionId: PlayerAPlus.sid, marketid: PlayerAPlus.mid, betFor: "Player A Plus" })}>
                      <span className="text-[18px] font-semibold text-black">{PlayerAPlus && PlayerAPlus.rate ? PlayerAPlus.rate : "0"}</span>
                    </div>
                    {PlayerAPlus && PlayerAPlus.gstatus === '1' ? null : <BetLocked />}
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-1">
                  <div className="w-full flex justify-between items-center text-sm font-semibold uppercase text-gray-800 p-2 bg-[#EEEE] rounded border-[4px] border-[#EEEE]">
                    <span>{PlayerB && PlayerB.nation ? PlayerB.nation : "Player B"}</span>
                    <span>0</span>
                  </div>
                  <div className="w-full border-[2px] border-[#72BBEF] cursor-pointer rounded relative" >
                    <div className="text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerB, type: "Yes", odds: PlayerB.rate, name: PlayerB.nation, selectionId: PlayerB.sid, marketid: PlayerB.mid, betFor: "Player B" })}>
                      <span className="text-[18px] font-semibold text-black">{PlayerB && PlayerB.rate ? PlayerB.rate : "0.00"}</span><br />
                    </div>
                    {PlayerB && PlayerB.gstatus === '1' ? null : <BetLocked />}
                  </div>
                  <div className="w-full border-[2px] border-[#F994BA] cursor-pointer rounded relative">
                    <div className=" text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerBPlus, type: "No", odds: PlayerBPlus.rate, name: PlayerBPlus.nation, selectionId: PlayerBPlus.sid, marketid: PlayerBPlus.mid, betFor: "Player B Plus" })}>
                      <span className=" text-[18px] font-semibold text-black">{PlayerBPlus && PlayerBPlus.rate ? PlayerBPlus.rate : "0.00"}</span><br />
                    </div>
                    {PlayerBPlus && PlayerBPlus.gstatus === '1' ? null : <BetLocked />}
                  </div>
                </div>
              </div>
              <div className="lg:hidden block">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <div className="grid grid-cols-7 gap-2">
                    {result && result.length > 0 ? result.slice(0, 7).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "1" ? "A" : "B"}</span>)
                      : null}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {result && result.length > 0 ? result.slice(6, 9).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "1" ? "A" : "B"}</span>)
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

export default connect(mapStateToProps)(TeenpattiOneday);
