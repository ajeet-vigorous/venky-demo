import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import io from 'socket.io-client';
import BetLockedRounded from "../../casino_components/BetLockedRounded/BetLockedRounded";
import FlipCountdown from '@rumess/react-flip-countdown';
import RoundedTab from "../../casino_components/RoundedTab/RoundedTab";
import PlaceBetTab from "../../casino_components/PlaceBetTab/PlaceBetTab";
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import { FaGripLinesVertical } from "react-icons/fa6";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
import axios from "axios";
import { CASINO } from '../../_config';
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';

class Card32a extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      betSlipData: {},
      fieldsbet: {},
      errorsbet: {},
      count: 0,
      casinoData: [],
      BetPlaceDesktop: false,
      ResultModel: false,
      Result: false,
      backBetModalMobile: false,
      backBetModal: false,
      cardShow: true
    };
  }

  componentDidMount() {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: "https://apipro.in/v2/api/casinoData?casinoType=card32",
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
      url: "https://apipro.in/v2/api/casinoData?casinoType=card32",
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
      casinoData: response.data.data.data,
      result: response.data.data.result,
    }));
  };

  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex, betListShow: true });
  };
  
  componentWillUnmount() {
    clearInterval(this.interval);
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

  handleIncomingData = (response) => {
    this.setState(() => ({
      casinoData: response.data.data.data ? response.data.data.data : {},
      result: response.data.data.result ? response.data.data.result : {},
    }));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleResult = () => {
    this.setState({ ResultModel: !this.state.ResultModel });
  };

  handleCardShow = () => {
    this.setState({ cardShow: !this.state.cardShow });
  };

  render() {
    let { users } = this.props;
    const { activeTab, casinoData, result } = this.state;


    const { odds_data, real_time_card_array, timer, market_id, game_type, t2 } = casinoData ? casinoData : {};

    let t1 = casinoData && casinoData.t1 && casinoData.t1[0] ? casinoData.t1[0] : {};
    // let t2 = casinoData && casinoData.t1 && casinoData.t1[0] ? casinoData.t1[0] : {};

    let Player8 = casinoData && casinoData.t2 && casinoData.t2[0] ? casinoData.t2[0] : {};
    let Player9 = casinoData && casinoData.t2 && casinoData.t2[1] ? casinoData.t2[1] : {};
    let Player10 = casinoData && casinoData.t2 && casinoData.t2[1] ? casinoData.t2[1] : {};
    let Player11 = casinoData && casinoData.data && casinoData.data.data && casinoData.data.data.t2 && casinoData.data.data.t2[3] ? casinoData.data.data.t2[3] : {};
    let image = t1 && t1.desc ? t1.desc.split(',') : [];

    console.log('casinoDatacasinoDatacasinoDatacasinoDatacasinoDatacasinoDatacasinoDatacasinoDatacasinoData', casinoData);
    return (
      <>
        {this.state.EditStakeModal === true ?
          <EditStakeDesktop
            handleClose={this.handleClose}
            stakehandleClose={this.handleClose}
          />
          : null}
        <div className="relative h-full page_bg overflow-y-auto flex">
          <Sidebar />
          <div className="lg:flex w-full h-screen overflow-y-auto p-1 space-x-1">
            <div className="lg:w-[60%] w-full lg:space-y-0 space-y-1 relative">
              <div className="bg-black flex justify-between w-full relative md:text-sm text-[10px] xl:h-[610px] md:h-[400px] h-[280px]">
                <iframe src={CASINO.VideoUrl + `3055`} title=" " className='relative w-full  ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm uppercase">{game_type ? game_type : "32 CARDS"}</span>
                  <span className="text-white font-semibold lg:text-sm text-xs">Round ID: {t1 && t1.mid ? t1.mid : "0"}</span>
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
                            <span key={index} className={`bg-white/20 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "4" ? "text-[#F74242]" : element.result === "1" ? "text-[#ffffff]" : "text-[#EF910F]"}`}>
                              {element.result === "1" ? "8" : element.result === "2" ? "9" : element.result === "3" ? "10" : "11"}</span>)
                            : null}
                        </div>
                        : null}
                    </div>
                  </div>
                </div>

                <div className="absolute lg:top-[30%] top-[25%] left-0">
                  <div className={`py-1 ${this.state.cardShow ? "w-full px-2 space-x-2" : "w-7 px-2"} transition ease-linear duration-1000 bg-black/50 rounded-md flex justify-between items-center lg:h-[265px] h-48`}>
                    {/* {this.state.cardShow ? */}
                    <div className={`h-full ${this.state.cardShow ? "w-full" : "w-0"}`}>
                      {this.state.cardShow ? <div className="text-white font-semibold whitespace-nowrap">player 8:<span className="text-yellow-500" >{t1 && t1.C1 ? t1.C1 : 0}</span></div> : null}
                      <img src={`/cards/${image && image[0] ? image[0] : "1"}.png`} alt="card" className="h-8 lg:h-11 w-6 lg:w-9" />
                      {this.state.cardShow ? <div className="text-white font-semibold whitespace-nowrap"> player 9: <span className="text-yellow-500" >{t1 && t1.C2 ? t1.C2 : 0}</span></div> : null}
                      <img src={`/cards/${image && image[1] ? image[1] : "1"}.png`} alt="card" className="h-8 lg:h-11 w-6 lg:w-9" />
                      {this.state.cardShow ? <div className="text-white font-semibold whitespace-nowrap"> player 10: <span className="text-yellow-500" >{t1 && t1.C3 ? t1.C3 : 0}</span></div> : null}
                      <img src={`/cards/${image && image[2] ? image[2] : "1"}.png`} alt="card" className="h-8 lg:h-11 w-6 lg:w-9" />
                      {this.state.cardShow ? <div className="text-white font-semibold whitespace-nowrap"> player 11: <span className="text-yellow-500" >{t1 && t1.C4 ? t1.C4 : 0}</span></div> : null}
                      <img src={`/cards/${image && image[3] ? image[3] : "1"}.png`} alt="card" className="h-8 lg:h-11 w-6 lg:w-9" />
                    </div>
                    {/* : null} */}
                    <div>
                      <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${t1 && t1.autotime === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className={`md:text-4xl text-2xl font-bold text-white absolute`}>{t1 && t1.autotime ? t1.autotime : null}</span>
                </div>

              </div>
              <div className="bg-transparent space-y-1  bottom-0 left-0 w-full lg:block hidden">


                {t2 && t2.length > 0 ? t2.map((element, index) => (
                  <>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 text-black">
                      <div className="col-span-1 lg:col-span-2 flex justify-between items-center bg-[#DDDDDD] rounded p-2 ">
                        <span className="text-sm font-semibold ">{element.nation}</span>
                        <span className="text-sm font-semibold">0.00</span>
                      </div>

                      <div className="border-[2px] border-[#72BBEF] w-full relative rounded">
                        <div className="bg-transparent  text-center py-2" onClick={() => this.handleBackOpen({ data: element, type: "Yes", odds: element.b1, name: element.nation, selectionId: element.sid, marketid: element.mid, betFor: element.nation })}>
                          <span className="text-sm font-semibold leading-4">{element.b1}</span>
                        </div>
                        {Player8.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                      </div>
                      <div className="border-[2px] border-[#F994BA] w-full rounded relative">
                        <div className="bg-transparent text-center py-2 " onClick={() => this.handleBackOpen({ data: element, type: "No", odds: element.l1, name: element.nation, selectionId: element.sid, marketid: element.mid, betFor: element.nation })}>
                          <span className="text-sm font-semibold leading-4">{element.l1}</span>
                        </div>
                        {Player8.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                      </div>
                    </div>
                  </>
                ))
                  : null}
              </div>
              <div className="bg-white space-y-1 lg:hidden block pb-4">
                <div className="grid grid-cols-3 gap-1 text-black">
                  <div className="flex justify-start items-center p-2 ">
                    <span className="text-sm font-semibold uppercase">Main</span>
                  </div>
                  <div className="w-full text-center py-2">
                    <span className="text-sm font-semibold uppercase">Back</span>
                  </div>
                  <div className="w-full text-center py-2">
                    <span className="text-sm font-semibold uppercase">Lay</span>
                  </div>
                </div>

                {t2 && t2.length > 0 ? t2.map((element, index) => (
                  <>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 text-black">
                      <div className="col-span-1 lg:col-span-2 flex justify-between items-center bg-[#DDDDDD] rounded p-2 ">
                        <span className="text-sm font-semibold ">{element.nation}</span>
                        <span className="text-sm font-semibold">0.00</span>
                      </div>
                      <div className="border-[2px] border-[#72BBEF] w-full rounded relative">
                        <div className="bg-[#ECF3FA] text-center py-2" onClick={() => this.handleBackOpen({ data: element, type: "Yes", odds: element.b1, name: element.nation, selectionId: element.sid, marketid: element.mid, betFor: element.nation })}>
                          <span className="text-sm font-semibold leading-4">{element.b1}</span>
                        </div>
                        {Player8.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                      </div>
                      <div className="border-[2px] border-[#F994BA] w-full  rounded relative">
                        <div className=" text-center py-2" onClick={() => this.handleBackOpen({ data: element, type: "No", odds: element.l1, name: element.nation, selectionId: element.sid, marketid: element.mid, betFor: element.nation })}>
                          <span className="text-sm font-semibold leading-4">{element.l1}</span>
                        </div>
                        {Player8.gstatus === "ACTIVE" ? null : <BetLockedRounded />}
                      </div>
                    </div>
                  </>
                ))
                  : null}

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

export default connect(mapStateToProps)(Card32a);
