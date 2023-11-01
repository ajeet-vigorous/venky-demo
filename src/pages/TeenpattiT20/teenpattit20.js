import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import FlipCountdown from '@rumess/react-flip-countdown';
import BetLocked from "../../casino_components/BetLocked/BetLocked";
import axios from "axios";
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa6";
import { CASINO } from '../../_config';
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';

class Teenpatti20 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backBetModal: false,
      backBetModalMobile: false,
      Result: false,
      BetPlaceDesktop: false,
      result: {},
      betOpen: false,
      betSlipData: {},
      count: 0,
      casinoData: [],
      cardShow: true,
      ResultModel: true,
      isFetch: false,
      showAlert: false,
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

  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex, betListShow: true });
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
      url: "https://casino.1ex.in/getMarketcashino?id=t20",
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
      url: "https://casino.1ex.in/getMarketcashino?id=t20",
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
      casinoData: response.data.data.teen_patti_t20 ? response.data.data.teen_patti_t20 : {},
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
    let { getCasinoByEventId } = users;

    const { activeTab, casinoData } = this.state;

    const { odds_data, real_time_card_array, result, game_type, market_id, timer } = casinoData ? casinoData : {};

    let PlayerA = odds_data && odds_data && odds_data[0] ? odds_data[0] : {};
    let PlayerAPlus = odds_data && odds_data && odds_data[1] ? odds_data[1] : {};
    let PlayerB = odds_data && odds_data && odds_data[2] ? odds_data[2] : {};
    let PlayerBPlus = odds_data && odds_data && odds_data[3] ? odds_data[3] : {};

    let t1 = odds_data && odds_data.t1 && odds_data.t1[0] ? odds_data.t1[0] : {};
    console.log("casinoDatacasinoData", timer);

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
            <div className="lg:w-[60%] w-full h-full bg-white space-y-4">
              <div className="bg-black flex justify-between w-full relative md:text-sm text-[10px] xl:h-[610px] md:h-[300px] h-[200px]">
                <iframe src={CASINO.VideoUrl + `3030`} title=" " className='relative w-full  ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm uppercase">{game_type ? game_type : "TEENPATTI T20"}</span>
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
                            <span key={index} className={`bg-white/20 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                              {element.result === "1" ? "A" : "B"}</span>)
                            : null}
                        </div>
                        : null}
                    </div>
                  </div>
                </div>

                <div className="absolute lg:top-[41%] top-[25%] left-0">
                  <div className={`py-1 ${this.state.cardShow ? "w-full px-2 space-x-2" : "w-7 px-2"} transition ease-linear duration-1000 bg-black/50 rounded-md flex justify-between items-center lg:h-32 h-24`}>
                    {/* {this.state.cardShow ? */}
                    <div className="space-y-1 w-full overflow-hidden" >
                      <div className="flex space-x-2 justify-start">
                        {real_time_card_array && real_time_card_array.playerA_card.length > 0 ? real_time_card_array.playerA_card.map((element, index) => (
                          <>
                            <img src={`/cards/${element}.png`} alt="card" className="h-10 lg:h-14 w-7 lg:w-10" />
                          </>
                        )) : null}
                      </div>
                      <div className="flex space-x-2 justify-start">
                        {real_time_card_array && real_time_card_array.playerB_card.length > 0 ? real_time_card_array.playerB_card.map((element, index) => (
                          <>
                            <img src={`/cards/${element}.png`} alt="card" className="h-10 lg:h-14 w-7 lg:w-10" />
                          </>
                        )) : null}
                      </div>
                    </div>
                    {/* : null} */}
                    <div>
                      <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${timer === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className={`md:text-4xl text-2xl font-bold text-white absolute`}>{timer ? timer : null}</span>
                </div>  
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-center text-black uppercase">
                  <div class="w-full font-semibold lg:text-[16px] text-sm py-1 text-left">Main</div>
                  <div class="w-full font-semibold lg:text-[16px] text-sm py-1">Back</div>
                  <div class="w-full font-semibold lg:text-[16px] text-sm py-1">Lay</div>
                </div>
                <div className="flex justify-between items-center space-x-1 h-full">
                  <div className="border-[4px] border-[#EEEE] w-full h-full text-sm font-semibold uppercase text-gray-800 p-1.5 bg-[#EEEE] rounded">
                    <span>{PlayerA && PlayerA.player ? PlayerA.player : "Player A"}</span>
                  </div>
                  <div className="relative w-full border-[2px] border-[#72BBEF] rounded cursor-pointer" >
                    <div className="text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerA, type: "Yes", odds: PlayerA.rate, name: PlayerA.player, selectionId: PlayerA.player_key, marketid: PlayerA.market_id, betFor: "Player A" })}>
                      <span className="text-sm lg:text-[18px] font-semibold text-black cursor-pointer">{PlayerA && PlayerA.rate ? PlayerA.rate : "0.00"}</span>
                    </div>
                    {PlayerA && PlayerA.status === '1' ? null : <BetLocked />}
                  </div>
                  <div className="relative w-full border-[2px] border-[#F994BA] cursor-pointer rounded">
                    <div className="text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerAPlus, type: "No", odds: PlayerAPlus.rate, name: PlayerAPlus.player, selectionId: PlayerAPlus.player_key, marketid: PlayerAPlus.market_id, betFor: "Pair plus A" })}>
                      <span className="text-sm lg:text-[18px] font-semibold text-black cursor-pointer">{PlayerAPlus && PlayerAPlus.rate ? PlayerAPlus.rate : "0"}</span>
                    </div>
                    {PlayerAPlus && PlayerAPlus.status === '1' ? null : <BetLocked />}
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-1">
                  <div className="border-[4px] border-[#EEEE] w-full h-full text-sm font-semibold uppercase text-gray-800 p-1.5 bg-[#EEEE] rounded">
                    <div>{PlayerB && PlayerB.player ? PlayerB.player : "Player B"}</div>
                  </div>
                  <div className="relative w-full border-[2px] border-[#72BBEF] cursor-pointer rounded" >
                    <div className="text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerB, type: "Yes", odds: PlayerB.rate, name: PlayerB.player, selectionId: PlayerB.player_key, marketid: PlayerB.market_id, betFor: "Player B" })}>
                      <span className="text-sm lg:text-[18px] font-semibold text-black cursor-pointer">{PlayerB && PlayerB.rate ? PlayerB.rate : "0.00"}</span><br />
                    </div>
                    {PlayerB && PlayerB.status === '1' ? null : <BetLocked />}
                  </div>
                  <div className="relative w-full border-[2px] border-[#F994BA] cursor-pointer rounded">
                    <div className=" text-center py-1.5" onClick={() => this.handleBackOpen({ data: PlayerBPlus, type: "No", odds: PlayerBPlus.rate, name: PlayerBPlus.player, selectionId: PlayerBPlus.player_key, marketid: PlayerBPlus.market_id, betFor: "Pair plus B" })}>
                      <span className=" text-sm lg:text-[18px] font-semibold text-black cursor-pointer">{PlayerBPlus && PlayerBPlus.rate ? PlayerBPlus.rate : "0.00"}</span><br />
                    </div>
                    {PlayerBPlus && PlayerBPlus.status === '1' ? null : <BetLocked />}
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

export default connect(mapStateToProps)(Teenpatti20);
