import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import FlipCountdown from '@rumess/react-flip-countdown';
import io from 'socket.io-client';
import { FaGripLinesVertical } from "react-icons/fa6";
import MyBetTab from "../../casino_components/MyBetTab/MyBetTab";
import { FaHome, FaChevronCircleUp } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import axios from "axios";
import { CASINO } from '../../_config';
import Sidebar from "../../components/Sidebar/Sidebar";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';

class AndarBahar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backBetModal: false,
      backBetModalMobile: false,
      Result: false,
      result: {},
      betSlipData: {},
      count: 0,
      casinoData: [],
      andarCardCharacters: [],
      baharCardCharacters: [],
      cardShow: true
    };
  }

  componentDidMount() {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: "https://apipro.in/v2/api/casinoData?casinoType=ab20",
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(config).then((response) => {
      this.handleIncomingData(response)
      console.log("response.data=============>", response);
    }).catch((error) => {
      console.log('ERRORRRRRRRRRRRRR', error);
    });

    this.interval = setInterval(() => this.loadData(), 1000);
    setTimeout(this.andarCardNumber, 5000);
  }

  loadData = () => {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: "https://apipro.in/v2/api/casinoData?casinoType=ab20",
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(config).then((abresponse) => {
      this.handleIncomingData(abresponse)
      console.log("abresponse.data=============>", abresponse);
    }).catch((error) => {
      console.log('ERRORRRRRRRRRRRRR', error);
    });
    setTimeout(this.andarCardNumber, 5000);
  }

  handleIncomingData = (abresponse) => {
    this.setState(() => ({
      casinoData: abresponse.data,
    }));
  };

  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex, betListShow: true });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  andarCardNumber = () => {
    const { casinoData } = this.state;
    let Andar = casinoData && casinoData.data && casinoData.data.data && casinoData.data.data.t3 && casinoData.data.data.t3[0].aall && casinoData.data.data.t3[0].aall ? casinoData.data.data.t3[0].aall.split(',') : {};
    let Bahar = casinoData && casinoData.data && casinoData.data.data && casinoData.data.data.t3 && casinoData.data.data.t3[0].ball && casinoData.data.data.t3[0].ball ? casinoData.data.data.t3[0].ball.split(',') : {};
    const charactersAndar = Andar && Andar.length > 0 ? Andar.map(card => card.charAt(0)) : [];
    this.setState({ andarCardCharacters: charactersAndar });

    const charactersBahar = Bahar && Bahar.length > 0 ? Bahar.map(card => card.charAt(0)) : [];
    this.setState({ baharCardCharacters: charactersBahar });
  };

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

  handleResult = () => {
    this.setState({ ResultModel: !this.state.ResultModel });
  };

  cardParser = (cardData) => {
    console.log("cardDatacardData  ", cardData);
    if (!cardData) {
      return 0;
    }
    if (cardData === "1") {
      return 0;
    } else {
      if (Array.from(cardData)[0] === "A") {
        return 1
      } else {
        return parseInt(Array.from(cardData)[0])
      }
    }
  };

  handleCardShow = () => {
    this.setState({ cardShow: !this.state.cardShow });
  };

  render() {
    let { users } = this.props;

    const { activeTab, casinoData, andarCardCharacters, baharCardCharacters } = this.state;
    let t1 = casinoData && casinoData.data && casinoData.data.data && casinoData.data.data.t1 && casinoData.data.data.t1[0] ? casinoData.data.data.t1[0] : {};
    let Andar = casinoData && casinoData.data && casinoData.data.data && casinoData.data.data.t3 && casinoData.data.data.t3[0].aall && casinoData.data.data.t3[0].aall ? casinoData.data.data.t3[0].aall.split(',') : {};
    let Bahar = casinoData && casinoData.data && casinoData.data.data && casinoData.data.data.t3 && casinoData.data.data.t3[0].aall && casinoData.data.data.t3[0].ball ? casinoData.data.data.t3[0].ball.split(',') : {};

    let result = casinoData && casinoData.data && casinoData.data.result ? casinoData.data.result : {};


    console.log("casinoDatacasinoDatacasinoDatacasinoData", casinoData);
    console.log("cardCharacterscardCharacterscardCharacterscardCharacters", andarCardCharacters);
    console.log("baharCardCharactersbaharCardCharacters1111111222222", baharCardCharacters);
    console.log("AndarAndarAndarAndarAndar", Andar);
    console.log("resultresultresultresult", result);

    return (
      <>
        {this.state.EditStakeModal === true ?
          <EditStakeDesktop
            handleClose={this.handleClose}
            stakehandleClose={this.handleClose}
          />
          : null}
        <div className="relative min-h-full page_bg overflow-y-auto lg:flex block">
          <Sidebar />
          <div className="lg:flex w-full h-full p-1.5 lg:space-x-1.5 space-y-4 lg:space-y-0">
            <div className="lg:w-[60%] w-full h-full bg-white">
              <div className="bg-black flex justify-between w-full relative md:text-sm text-[10px] xl:h-[615px] md:h-[350px] h-[250px]">
                <iframe src={CASINO.VideoUrl + `3053`} title=" " className='relative w-full h-full ' />
                <div className="bg-black/70 flex flex-col justify-center items-center absolute top-0 left-0 lg:p-3 p-1.5">
                  <span className="text-[#E18C18] font-bold lg:text-lg text-sm uppercase">{"Andar Bahar"}</span>
                  <span className="text-white font-semibold lg:text-sm text-xs"> Round ID: {t1 && t1.mid ? t1.mid : null}</span>
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
                              {element.result === "1" ? "A" : element.result === "2" ? "B" : "R"}</span>)
                            : null}
                        </div>
                        : null}
                    </div>
                  </div>
                </div>

                <div className="absolute top-[41%] left-0">
                  <div className="p-2 bg-black/50 rounded-md flex justify-between items-center space-x-2 w-full h-28 lg:h-32">
                    {this.state.cardShow ?
                      <div className="w-[100px] lg:w-[200px]">
                        <div className='w-full overflow-x-auto flex space-x-2 justify-start'>
                          {Andar[0] === "1" ? null : <img src={`/cards/${Andar && Andar[0] ? Andar[0] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[1] === "1" ? null : <img src={`/cards/${Andar && Andar[1] ? Andar[1] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[2] === "1" ? null : <img src={`/cards/${Andar && Andar[2] ? Andar[2] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[3] === "1" ? null : <img src={`/cards/${Andar && Andar[3] ? Andar[3] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[4] === "1" ? null : <img src={`/cards/${Andar && Andar[4] ? Andar[4] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[5] === "1" ? null : <img src={`/cards/${Andar && Andar[5] ? Andar[5] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[6] === "1" ? null : <img src={`/cards/${Andar && Andar[6] ? Andar[6] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[7] === "1" ? null : <img src={`/cards/${Andar && Andar[7] ? Andar[7] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[8] === "1" ? null : <img src={`/cards/${Andar && Andar[8] ? Andar[8] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[9] === "1" ? null : <img src={`/cards/${Andar && Andar[9] ? Andar[9] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[10] === "1" ? null : <img src={`/cards/${Andar && Andar[10] ? Andar[10] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[11] === "1" ? null : <img src={`/cards/${Andar && Andar[11] ? Andar[11] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Andar[12] === "1" ? null : <img src={`/cards/${Andar && Andar[12] ? Andar[12] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                        </div>
                        <div className='w-full overflow-x-auto flex space-x-2 justify-start'>
                          {Bahar[0] === "1" ? null : <img src={`/cards/${Bahar && Bahar[0] ? Bahar[0] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[1] === "1" ? null : <img src={`/cards/${Bahar && Bahar[1] ? Bahar[1] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[2] === "1" ? null : <img src={`/cards/${Bahar && Bahar[2] ? Bahar[2] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[3] === "1" ? null : <img src={`/cards/${Bahar && Bahar[3] ? Bahar[3] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[4] === "1" ? null : <img src={`/cards/${Bahar && Bahar[4] ? Bahar[4] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[5] === "1" ? null : <img src={`/cards/${Bahar && Bahar[5] ? Bahar[5] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[6] === "1" ? null : <img src={`/cards/${Bahar && Bahar[6] ? Bahar[6] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[7] === "1" ? null : <img src={`/cards/${Bahar && Bahar[7] ? Bahar[7] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[8] === "1" ? null : <img src={`/cards/${Bahar && Bahar[8] ? Bahar[8] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[9] === "1" ? null : <img src={`/cards/${Bahar && Bahar[9] ? Bahar[9] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[10] === "1" ? null : <img src={`/cards/${Bahar && Bahar[10] ? Bahar[10] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[11] === "1" ? null : <img src={`/cards/${Bahar && Bahar[11] ? Bahar[11] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                          {Bahar[12] === "1" ? null : <img src={`/cards/${Bahar && Bahar[12] ? Bahar[12] : 1}.png`} alt="card" className="h-10 w-10 rounded" />}
                        </div>
                      </div> : null}
                    <FaGripLinesVertical className="h-10 text-white/80 cursor-pointer" onClick={this.handleCardShow} />
                  </div>
                </div>
                <div className="flex justify-center items-center absolute md:bottom-0 bottom-4 right-0">
                  <div class={`${t1 && t1.autotime === "0" ? "loader1" : "loader"}`}>
                  </div>
                  <span className="text-4xl font-bold text-white absolute">{t1 && t1.autotime ? t1.autotime : null}</span>
                </div>
              </div>

              <div className="lg:block hidden pb-14">
                <div className="flex space-x-4 w-full p-4">
                  <div className="bg-[#F9EAEC] border-[4px] border-[#FC4242] w-full">
                    <div className="flex flex-col justify-center items-center font-medium text-lg text-[#FC4242]" >
                      <span>Andar</span>
                      <span>1.96</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-2">
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("A") ?
                          <img src="/assets/images/1.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("2") ?
                          <img src="/assets/images/2.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("3") ?
                          <img src="/assets/images/3.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("4") ?
                          <img src="/assets/images/4.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("5") ?
                          <img src="/assets/images/5.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("6") ?
                          <img src="/assets/images/6.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("7") ?
                          <img src="/assets/images/7.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-2">
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("8") ?
                          <img src="/assets/images/8.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("9") ?
                          <img src="/assets/images/9.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("10") ?
                          <img src="/assets/images/10.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("J") ?
                          <img src="/assets/images/11.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("Q") ?
                          <img src="/assets/images/12.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("K") ?
                          <img src="/assets/images/13.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9F5E8] border-[4px] border-[#FDCF13] w-full">
                    <div className="flex flex-col justify-center items-center font-medium text-lg text-[#EF910F]" >
                      <span>Bahar</span>
                      <span>1.96</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-2">
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("A") ?
                          <img src="/assets/images/1.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("2") ?
                          <img src="/assets/images/2.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("3") ?
                          <img src="/assets/images/3.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("4") ?
                          <img src="/assets/images/4.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("5") ?
                          <img src="/assets/images/5.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("6") ?
                          <img src="/assets/images/6.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("7") ?
                          <img src="/assets/images/7.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                    </div>
                    <div className=" flex justify-center items-center gap-2 py-2">
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("8") ?
                          <img src="/assets/images/8.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("9") ?
                          <img src="/assets/images/9.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("10") ?
                          <img src="/assets/images/10.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("J") ?
                          <img src="/assets/images/11.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("Q") ?
                          <img src="/assets/images/12.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("K") ?
                          <img src="/assets/images/13.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile view  start*/}
              <div className="lg:hidden block">
                <div className="w-full space-y-2 p-3">
                  <div className="bg-[#F9EAEC] border-[4px] border-[#FC4242] w-full">
                    <div className="flex flex-col justify-center items-center font-medium text-lg text-[#FC4242]" >
                      <span>Andar</span>
                      <span>1.96</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 py-2">
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("A") ?
                          <img src="/assets/images/1.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("2") ?
                          <img src="/assets/images/2.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("3") ?
                          <img src="/assets/images/3.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("4") ?
                          <img src="/assets/images/4.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("5") ?
                          <img src="/assets/images/5.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("6") ?
                          <img src="/assets/images/6.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("7") ?
                          <img src="/assets/images/7.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("8") ?
                          <img src="/assets/images/8.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("9") ?
                          <img src="/assets/images/9.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("10") ?
                          <img src="/assets/images/10.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("J") ?
                          <img src="/assets/images/11.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {andarCardCharacters.includes("Q") ?
                          <img src="/assets/images/12.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                    </div>
                    <div className="justify-center flex-col flex items-center">
                      {andarCardCharacters.includes("K") ?
                        <img src="/assets/images/13.jpg" alt="" className="w-13 h-16" /> :
                        <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                      <span className="text-lg">0.00</span>
                    </div>
                  </div>
                  <div className="bg-[#F9F5E8] border-[4px] border-[#FDCF13] w-full">
                    <div className="flex flex-col justify-center items-center font-medium text-lg text-[#EF910F]" >
                      <span>Bahar</span>
                      <span>1.96</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 py-2">
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("A") ?
                          <img src="/assets/images/1.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("2") ?
                          <img src="/assets/images/2.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("3") ?
                          <img src="/assets/images/3.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("4") ?
                          <img src="/assets/images/4.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("5") ?
                          <img src="/assets/images/5.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("6") ?
                          <img src="/assets/images/6.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("7") ?
                          <img src="/assets/images/7.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("8") ?
                          <img src="/assets/images/8.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("9") ?
                          <img src="/assets/images/9.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("10") ?
                          <img src="/assets/images/10.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("J") ?
                          <img src="/assets/images/11.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                      <div className="justify-center flex-col flex items-center">
                        {baharCardCharacters.includes("Q") ?
                          <img src="/assets/images/12.jpg" alt="" className="w-13 h-16" /> :
                          <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                        <span className="text-lg">0.00</span>
                      </div>
                    </div>
                    <div className="justify-center flex-col flex items-center">
                      {baharCardCharacters.includes("K") ?
                        <img src="/assets/images/13.jpg" alt="" className="w-13 h-16" /> :
                        <img src="/cards/1.png" alt="" className="w-13 h-16" />}
                      <span className="text-lg">0.00</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* mobile view end */}

              <div className="lg:hidden block">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <div className="grid grid-cols-7 gap-2">
                    {result && result.length > 0 ? result.slice(0, 7).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "1" ? "A" : element.result === "2" ? "B" : "R"}</span>)
                      : null}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {result && result.length > 0 ? result.slice(6, 9).map((element, index) =>
                      <span key={index} className={`bg-black/80 px-2 py-1 rounded font-bold cursor-pointer ${element.result === "1" ? "text-[#EF910F]" : "text-[#F74242]"}`}>
                        {element.result === "1" ? "A" : element.result === "2" ? "B" : "R"}</span>)
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

export default connect(mapStateToProps)(AndarBahar);
