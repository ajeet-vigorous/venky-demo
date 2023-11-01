import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ViewMatch.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { userActions } from '../../_actions';
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import axios from "axios";
import BetPlaceDesktop from "../../components/BetPlaceDesktop/BetPlaceDesktop";
import EditStakeDesktop from '../../components/EditStakeDesktop/EditStakeDesktop';
import { FaInfoCircle, FaAngleDown } from 'react-icons/fa';
import { httpPost } from "../../_helpers/http"
import SocketIOClient from 'socket.io-client';
import moment from 'moment';


class LiveReportDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            betPlaceModal: false,
            matchDetails: {},
            matchDetailList: {},
            socketPerm: "",
            socketUrl: "",
            scoreIframe: "",
            tvUrl: "",
            tvId: "",
            matchDetailsForSocket: {},
            scoreHeight: "130",
            inplayMatchList: {},
            scoreScreen: false,
            isTvScreen: false,
            cacheUrl: "",
            matchScoreDetails: {},
            matchList: {},
            matchDetailsModal: false,
            marketId: "",
            filterMatchList: {},
            matchPosition: {},
            // activeTab: 1,
            // betListShow: false,
            // showCompletedFancy: false,
            // fancyDetailsModal: false,
        }

    }
    handlePosition = (data) => {
        let { users } = this.props;
        let { savebetItems } = users;

        console.log("savebetItemssavebetItems", this.props);

        // let finalMatchStack = UserSportSettings && UserSportSettings.length > 0 && UserSportSettings[0].match_stack ? UserSportSettings[0].match_stack.split(',') : []

        // this.setState({ stakeopen: true, finalMatchStack: finalMatchStack });
        // console.log(
        //   "datadatadatadatadatadatadatadatavvvvvvvvvvvvvvvvvvvvvvvvv",
        //   data,
        // );

    };











    componentDidMount() {
        // this.getInplayData();
        this.getMatchDataByMarketIdWise();
        // this.getMatchData();

        if (this.state.socketPerm && this.state.socketPerm === "1") {
            this.socket = SocketIOClient(this.state.socketUrl);
            this.socket.on("key", data => {
                this.setState({ matchDetailsForSocket: data })
            });
        } else {
            this.interval = setInterval(() => this.getMarketCacheUrl(), 2000);
        }
    }

    getMarketCacheUrl = async () => {
        // let matchScoreDetails = await httpPost(`${this.state.cacheUrl}`);
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: this.state.cacheUrl,
            headers: { 'Content-Type': 'application/json' },
        };
        axios.request(config).then((response) => {
            this.handleIncomingData(response)
            console.log("response.data=============>", response);
        }).catch((error) => {
            console.log('ERRORRRRRRRRRRRRR', error);
        });
    }

    handleIncomingData = (data1) => {
        this.setState(() => ({
            matchScoreDetails: data1.data.result,
        }));
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getMatchDataByMarketIdWise = async () => {
        let marketId = {
            "marketId": this.props.match.params.marketId
        }
        let matchDetails = await httpPost("sports/betMatchDetails", marketId);
        this.setState({
            matchDetailList: matchDetails && matchDetails.data ? matchDetails.data : {},
            matchDetails: matchDetails && matchDetails.data && matchDetails.data.matchDetails ? matchDetails.data.matchDetails : {},
            socketPerm: matchDetails && matchDetails.data && matchDetails.data.matchDetails && matchDetails.data.matchDetails.socketPerm ? matchDetails.data.matchDetails.socketPerm : {},
            socketUrl: matchDetails && matchDetails.data && matchDetails.data.matchDetails && matchDetails.data.matchDetails.socketUrl ? matchDetails.data.matchDetails.socketUrl : {},
            scoreIframe: matchDetails && matchDetails.data && matchDetails.data.matchDetails && matchDetails.data.matchDetails.scoreIframe ? matchDetails.data.matchDetails.scoreIframe : {},
            tvUrl: matchDetails && matchDetails.data && matchDetails.data.matchDetails && matchDetails.data.matchDetails.tvUrl ? matchDetails.data.matchDetails.tvUrl : {},
            tvId: matchDetails && matchDetails.data && matchDetails.data.matchDetails && matchDetails.data.matchDetails.tvId ? matchDetails.data.matchDetails.tvId : {},
            cacheUrl: matchDetails && matchDetails.data && matchDetails.data.matchDetails && matchDetails.data.matchDetails.cacheUrl ? matchDetails.data.matchDetails.cacheUrl : {},
            oddsBetData: matchDetails && matchDetails.data && matchDetails.data.oddsBetData ? matchDetails.data.oddsBetData : {},
            fancyBetData: matchDetails && matchDetails.data && matchDetails.data.fancyBetData ? matchDetails.data.fancyBetData : {},
            matchPosition: matchDetails && matchDetails.data && matchDetails.data.matchPosition ? matchDetails.data.matchPosition : [],
            inplayMatchList: matchDetails && matchDetails.data && matchDetails.data.inplayMatchList ? matchDetails.data.inplayMatchList : [],
        })
        if (matchDetails) {
            let finalBalance = {
                mainBlance: matchDetails && matchDetails.data && matchDetails.data.totalCoins ? matchDetails.data.totalCoins : "0",
                exposureBalance: matchDetails && matchDetails.data && matchDetails.data.matchExposure ? matchDetails.data.matchExposure : "0",
            }
            localStorage.setItem('finalBalance', JSON.stringify(finalBalance));
        }
    }

    handleTvScreen = () => {
        this.setState({ isTvScreen: !this.state.isTvScreen });
    }

    handleTabClick = (tabIndex) => {
        this.setState({ activeTab: tabIndex, betListShow: true });
    };

    handleBetList = () => {
        this.setState({ betListShow: !this.state.betListShow });
    }

    handleCompletedFancyModal = () => {
        this.setState({ showCompletedFancy: !this.state.showCompletedFancy });
    }

    handleFancyDetailsModal = () => {
        this.setState({ fancyDetailsModal: !this.state.fancyDetailsModal });
    }
    handleMatchDetailsModal = () => {
        this.setState({ matchDetailsModal: !this.state.matchDetailsModal });
    }
    handleResponseGame = (data, status) => {
        this.props.history.push('/app/ViewMatchis/' + data.marketId)
    }

    handleBackOpen = (data) => {
        this.setState({ betPlaceModal: true, betSlipData: { ...data, stake: "0" }, count: data.odds, teamname: data.name });
        setTimeout(() => this.setState({ betPlaceModal: false }), 10000);
    };

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
    placeBet = async () => {
        let betObject = {
            "odds": this.state.count + "",
            "amount": this.state.betSlipData.stake,
            "selectionId": this.state.betSlipData.selectionId + "",
            "marketId": this.state.matchDetails.marketId + "",
            "eventId": this.state.matchDetails.eventId,
            "betFor": this.state.betSlipData.betFor + "",
            "run": this.state.betSlipData.run ? this.state.betSlipData.run + "" : "0",
            "oddsType": this.state.betSlipData.oddsType + "",
            "type": this.state.betSlipData.betType + ""

        }
        if (this.state.betSlipData.oddsType === "bookmaker") {
            let saveBetOdds = await httpPost("sports/oddBetPlaced", betObject);
            console.log("saveBetOddssaveBetOddssaveBetOdds", saveBetOdds);
            // if (saveBetOdds.error === false) {
            //     this.state.oddsBetData.push(betObject);
            //     this.setState({
            //         matchPosition: saveBetOdds.data,
            //     }); 
            //     console.log("matchPositionmatchPositionmatchPosition", this.state.matchPosition);
            // }
        } else {
            let saveBetFancy = await httpPost("sports/sessionBetPlaced", betObject);
            if (saveBetFancy.error === false) {
                this.state.fancyBetData.push(betObject);
            }
        }
        this.setState({ betPlaceModal: false })
    };


    render() {


        let { users } = this.props;
        let { savebetItems } = users;
        // console.log("RENDER__this.state.matchData______", savebetItems.matchPosition);


        const { activeTab, matchDetails, matchScoreDetails, isTvScreen, oddsBetData, fancyBetData, matchPosition, inplayMatchList } = this.state;
        // console.log("tvUrltvUrltvUrltvUrl", this.props.match);
        // console.log("matchDetailsForSocketmatchDetailsForSocket", fancyBetData);
        let { commission_fancy_data, no_commission_fancy_data, team_data, toss_data } = matchScoreDetails ? matchScoreDetails : {};
        let Team1Toss = toss_data && toss_data[0] ? toss_data[0] : {};
        let Team2Toss = toss_data && toss_data[1] ? toss_data[1] : {};

        // console.log('no_commission_fancy_datano_commission_fancy_data???', matchScoreDetails);
        // console.log("matchScoreDetailsmatchScoreDetailsmatchScoreDetails", matchDetails.notification);

        return (

            <>
                {this.state.EditStakeModal === true ?
                    <EditStakeDesktop
                        handleClose={this.handleClose}
                        stakehandleClose={this.handleClose}
                    />
                    : null}
                <Sidebar props={this.props} />
                <div className="flex flex-col flex-1 overflow-y-auto pb-20 mainclass">
                    <main className="relative lg:flex w-full space-x-1">
                        <section className="lg:w-[60%] w-full rounded-md lg:pr-2 pr-0 lg:pl-4 pl-0">
                            {matchDetails && matchDetails.notification !== "" ?
                                <marquee className="w-full border-red-500 bg-white font-extrabold text-lg">
                                    {matchDetails.notification}
                                </marquee> : null
                            }
                            <div class="flex justify-between border border-white">
                                <div className='px-2 py-2 bg-[#232323] text-white text-left w-full flex justify-start space-x-1 '> <span><AiOutlineStar className='pt-0.5' /></span><span>{matchDetails && matchDetails.matchName ? matchDetails.matchName : ""}</span></div>
                                <span onClick={this.handleTvScreen} className='px-2 py-2 text-sm text-white text-center bg-[#097878] whitespace-nowrap md:w-52 cursor-pointer'>Live TV</span>
                                <span className='px-2 py-2 text-sm text-Black font-semibold text-center bg-[#F7C200] whitespace-nowrap md:w-52 cursor-pointer' onClick={this.handleMatchDetailsModal}>Matches</span>
                            </div>

                            <div className="details ">
                                <div className={`w-full md:text-sm text-[10px] bg-[#000000c6] h-[200px] relative`} >
                                    <iframe src={this.state.scoreIframe ? this.state.scoreIframe : ""} title=" " className="w-[100%] h-[200px]" />
                                    {this.state.matchDetailsModal ?
                                        <ul className='absolute text-white text-sm uppercase top-0  right-2 pt-3 '>
                                            {inplayMatchList && inplayMatchList.length > 0 ? inplayMatchList.map(
                                                (elementinner, index) => (
                                                    <>
                                                        <li className='bg-[#045f5f] hover:bg-white px-2 hover:text-black cursor-pointer py-1 border-1 border-[#55b569] rounded-md w-40 truncate whitespace-nowrap' onClick={() => this.handleResponseGame(elementinner)}>{elementinner.matchName}
                                                        </li>
                                                    </>
                                                )
                                            ) : null}
                                        </ul>
                                        : null
                                    }
                                </div>
                            </div>
                            <div>
                                {isTvScreen ?
                                    <div className="details">
                                        <div className={`w-full relative md:text-sm text-[10px] bg-[#000000c6] h-[200px]`}>
                                            <iframe src={this.state.tvUrl ? this.state.tvUrl.replace('undefined', this.state.tvId) : ""} title=" " className="w-[100%] h-[200px]" />
                                        </div>
                                    </div> : null}
                            </div>

                            <div className='divide-y divide-red-500 space-y-2'>
                                {team_data && team_data.length > 0 ?
                                    <div className="min-w-full border-[1px] border-red-500">
                                        <div className='grid grid-cols-5 lg:grid-cols-4 text-white border-b-[1px] border-red-500 divide-x-[1px] divide-red-500'>
                                            <div className="lg:col-span-2 col-span-3 flex justify-between items-center bg-[#045F5F] p-2">
                                                <span className='font-semibold'>Match Odds</span><FaInfoCircle size={18} />
                                            </div>
                                            <div className="bg-[#B5E0FF] text-center text-black font-semibold p-2">LAGAI</div>
                                            <div className="bg-[#FBB7C5] text-center text-black font-semibold p-2">KHAI</div>
                                        </div>
                                        {team_data && team_data.length > 0 ? team_data.map((element, index) => (
                                            <div className="grid grid-cols-5 lg:grid-cols-4 text-black border-b-[1px] border-gray-500 divide-x-[1px] divide-gray-500">
                                                <div className="col-span-3 lg:col-span-2 flex justify-between items-center p-2">
                                                    <span className='font-semibold h-6'>{element.team_name}</span>
                                                    <span className={`${matchPosition[element.selectionid] < 0 ? "text-red-500" : "text-green-500"} font-extrabold`}>
                                                        {savebetItems && savebetItems.matchPosition && savebetItems.matchPosition[element.selectionid] ? Math.abs(savebetItems.matchPosition[element.selectionid]) : Math.abs(matchPosition[element.selectionid])}
                                                    </span>

                                                </div>
                                                <div className='col-span-2'>
                                                    {element.lgaai == "0.00" ?
                                                        <div className='flex items-center relative h-full'>
                                                            <div className="bg-[#7CC4F7] w-full h-full font-bold text-lg text-black text-center p-2"></div>
                                                            <div className="bg-[#FCA4B7] w-full h-full font-bold text-lg text-black text-center p-2"></div>
                                                            <div className='w-full h-full bg-white/60 absolute top-0 left-0 flex justify-center items-center'>
                                                                <span className='text-red-600 uppercase'>Suspended</span>
                                                            </div>
                                                        </div> :
                                                        <div className='w-full flex items-center'>
                                                            <div className="bg-[#7CC4F7] w-full h-full font-bold text-lg text-black text-center p-2"
                                                                onClick={() => this.handleBackOpen({ data: element, type: "Yes", odds: element.lgaai, name: element.team_name, betFor: "bookmaker", oddsType: "bookmaker", betType: "L", selectionId: element.selectionid })}>{element.lgaai}</div>
                                                            <div className="bg-[#FCA4B7] w-full h-full font-bold text-lg text-black text-center p-2"
                                                                onClick={() => this.handleBackOpen({ data: element, type: "No", odds: element.khaai, name: element.team_name, betFor: "bookmaker", oddsType: "bookmaker", betType: "k", selectionId: element.selectionid })}>{element.khaai}</div>
                                                        </div>}
                                                </div>
                                            </div>
                                        )) : null}

                                    </div>
                                    : null}
                                {Team1Toss && Team1Toss.is_toss === true ?
                                    <div className="min-w-full border-[1px] border-red-500">
                                        <div className='grid grid-cols-5 lg:grid-cols-4 text-white border-b-[1px] border-red-500 divide-x-[1px] divide-red-500'>
                                            <div className="lg:col-span-2 col-span-3 flex justify-between items-center bg-[#F3F0DC] p-2">
                                                <span className='font-semibold text-red-500'>Toss Book</span>
                                            </div>
                                            <div className="bg-[#B5E0FF] text-center text-black font-semibold p-2">{Team1Toss && Team1Toss.team_name ? Team1Toss.team_name : "Team Toss 1"}</div>
                                            <div className="bg-[#B5E0FF] text-center text-black font-semibold p-2">{Team2Toss && Team2Toss.team_name ? Team2Toss.team_name : "Team Toss 2"}</div>
                                        </div>
                                        <div className="grid grid-cols-5 lg:grid-cols-4 text-black border-b-[1px] border-red-500 divide-x-[1px] divide-red-500">
                                            <div className="col-span-3 lg:col-span-2 p-2">
                                                <span className='font-semibold'>WHO WILL WIN THE TOSS</span>
                                            </div>
                                            <div className='col-span-2'>
                                                {Team1Toss.lgaai === "0.00" ?
                                                    <div className='flex items-center relative h-full'>
                                                        <div className="bg-[#7CC4F7] w-full h-full font-bold text-lg text-black text-center p-2"></div>

                                                        <div className='w-full h-full bg-white/60 absolute top-0 left-0 flex justify-center items-center'>
                                                            <span className='text-red-600 uppercase'>Suspended</span>
                                                        </div>
                                                    </div> :
                                                    <div className='w-full flex items-center divide-x divide-red-500 '>
                                                        <div className="bg-[#7CC4F7] w-full h-full font-bold text-lg text-black text-center p-2" onClick={() => this.handleBackOpen({ data: Team1Toss, type: "Yes", odds: Team1Toss.lgaai, name: Team1Toss.team_name, betFor: "toss", oddsType: "bookmaker", betType: "L", selectionId: Team1Toss.selectionid })}>
                                                            <div className='text-lg font-bold'>{Team1Toss.lgaai}</div>
                                                            <div className='md:text-md text-sm text-[#008000] font-normal'> 0</div>
                                                        </div>
                                                        <div className="bg-[#7CC4F7] w-full h-full font-bold text-lg text-black text-center p-2" onClick={() => this.handleBackOpen({ data: Team2Toss, type: "Yes", odds: Team2Toss.lgaai, name: Team2Toss.team_name, betFor: "toss", oddsType: "bookmaker", betType: "L", selectionId: Team1Toss.selectionid })}>
                                                            <div className='text-lg font-bold'>{Team2Toss.lgaai}</div>
                                                            <div className='md:text-md text-sm text-[#008000] font-normal'> 0</div>
                                                        </div>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>
                                    : null}

                                {commission_fancy_data && commission_fancy_data.length > 0 ?
                                    <div className="min-w-full border-[1px] border-red-600">
                                        <div className='grid grid-cols-5 lg:grid-cols-4 text-white w-full border-b-[1px] border-red-500 divide-x-[1px] divide-red-500'>
                                            <div className="col-span-3 lg:col-span-2 bg-[#045F5F] font-semibold p-2">Session</div>
                                            <div className="bg-[#FBB7C5] text-center text-black font-semibold p-2">No</div>
                                            <div className="bg-[#B5E0FF] text-center text-black font-semibold p-2">Yes</div>
                                        </div>
                                        {commission_fancy_data && commission_fancy_data.length > 0 ? (
                                            commission_fancy_data.map((element, index) => (
                                                <div className="grid grid-cols-5 lg:grid-cols-4 text-black border-b-[1px] border-red-500 divide-x-[1px] divide-red-500">
                                                    <div className="col-span-3 lg:col-span-2 cursor-pointer flex justify-between items-center p-2 font-semibold">
                                                        <span>{element.session_name}</span>
                                                        <span className='flex items-center space-x-2 text-gray-800 font-bold text-sm'>
                                                            <div>
                                                                <img src="/images/ladder.svg" alt='lodder' className='h-12 w-14' />
                                                            </div>
                                                            <FaInfoCircle size={18} />
                                                            {/* <span onClick={this.handleFancyDetailsModal} className='bg-[#097878] text-white hover:bg-[#81BA53] py-1 px-2.5 border-[1px] border-red-800 hover:border-[#81BA53] cursor-pointer'>B</span> */}
                                                        </span>
                                                    </div>
                                                    <div className='col-span-2 flex items-center relative '>
                                                        <div className=
                                                            {`${element.runsNo === 0 || element.oddsNo === 0 || element.runsYes === 0 || element.oddsYes === 0 ? "text-[#FCA4B7]" : "text-black"} w-full bg-[#FCA4B7] font-bold text-center p-2`}
                                                            onClick={() => this.handleBackOpen({ data: element, type: "No", odds: element.runsNo, name: element.session_name, betFor: "commission", oddsType: "fancy", betType: "N", run: element.oddsNo, selectionId: element.Selection_id })}>
                                                            <div className='text-lg font-bold'> {element.runsNo}</div>
                                                            <div className='md:text-md text-sm  font-normal'> {element.oddsNo}</div>
                                                        </div>
                                                        <div className={`${element.runsNo === 0 || element.oddsNo === 0 || element.runsYes === 0 || element.oddsYes === 0 ? "text-[#7CC4F7] " : "text-black"} w-full bg-[#7CC4F7]  font-bold text-center p-2`}
                                                            onClick={() => this.handleBackOpen({ data: element, type: "Yes", odds: element.runsYes, name: element.session_name, betFor: "commission", oddsType: "fancy", betType: "Y", run: element.oddsYes, selectionId: element.Selection_id })}>
                                                            <div className='text-lg font-bold'> {element.runsYes}</div>
                                                            <div className='md:text-md text-sm font-normal'> {element.oddsYes}</div>
                                                        </div>
                                                        {element.runsNo === 0 || element.oddsNo === 0 || element.runsYes === 0 || element.oddsYes === 0 ?
                                                            <div className='w-full h-full bg-white/60 absolute top-0 left-0 flex justify-center items-center'>
                                                                <span className='text-red-600 uppercase'>Suspended</span>
                                                            </div> : null}
                                                    </div>
                                                    <marquee className="w-full col-span-5 border-t  border-red-500">
                                                        {element.remark}
                                                    </marquee>
                                                </div>
                                            ))) : null}
                                    </div>
                                    : null}


                                {no_commission_fancy_data && no_commission_fancy_data.length > 0 ?
                                    <div className="min-w-full border-[1px] border-red-600">
                                        <div className='grid grid-cols-5 lg:grid-cols-4 text-white w-full border-b-[1px] border-red-500 divide-x-[1px] divide-red-500'>
                                            <div className="col-span-3 lg:col-span-2 bg-[#045F5F] font-semibold p-2">Extra Fancy(No Commission)</div>
                                            <div className="bg-[#FBB7C5] text-center text-black font-semibold p-2">No</div>
                                            <div className="bg-[#B5E0FF] text-center text-black font-semibold p-2">Yes</div>
                                        </div>
                                        {no_commission_fancy_data && no_commission_fancy_data.length > 0 ? (
                                            no_commission_fancy_data.map((element, index) => (
                                                <div className="grid grid-cols-5 lg:grid-cols-4 text-black border-b-[1px] border-red-500 divide-x-[1px] divide-red-500">
                                                    <div className="col-span-3 lg:col-span-2 cursor-pointer flex justify-between items-center p-2 font-semibold">
                                                        <span>{element.session_name}</span>
                                                        <span className='flex items-center space-x-2 text-gray-800 font-bold text-sm'>
                                                            <div>
                                                                <img src='/images/ladder.svg' alt='lodder' />
                                                            </div>
                                                            <FaInfoCircle size={18} />
                                                            {/* <span onClick={this.handleFancyDetailsModal} className='bg-[#097878] text-white hover:bg-[#81BA53] py-1 px-2.5 border-[1px] border-red-800 hover:border-[#81BA53] cursor-pointer'>B</span> */}
                                                        </span>
                                                    </div>
                                                    <div className='col-span-2 flex relative'>
                                                        <div className={`${element.runsNo === 0 || element.oddsNo === 0 || element.runsYes === 0 || element.oddsYes === 0 ? "text-[#FCA4B7]" : "text-black"} w-full bg-[#FCA4B7] font-bold text-center p-2`}
                                                            onClick={() => this.handleBackOpen({ data: element, type: "No", odds: element.runsNo, name: element.session_name, betFor: "nocommission", oddsType: "fancy", betType: "N", run: element.oddsNo, selectionId: element.Selection_id })}>
                                                            <div className='text-lg font-bold'> {element.runsNo}</div>
                                                            <div className='md:text-md text-sm  font-normal'> {element.oddsNo}</div>
                                                        </div>
                                                        <div className={`${element.runsNo === 0 || element.oddsNo === 0 || element.runsYes === 0 || element.oddsYes === 0 ? "text-[#7CC4F7] " : "text-black"} w-full bg-[#7CC4F7]  font-bold text-center p-2`} onClick={() => this.handleBackOpen({ data: element, type: "Yes", odds: element.runsYes, name: element.session_name, betFor: "nocommission", oddsType: "fancy", betType: "Y", run: element.oddsYes, selectionId: element.Selection_id })}>
                                                            <div className='text-lg font-bold'> {element.runsYes}</div>
                                                            <div className='md:text-md text-sm  font-normal'> {element.oddsYes}</div>
                                                        </div>
                                                        {element.runsNo === 0 || element.oddsNo === 0 || element.runsYes === 0 || element.oddsYes === 0 ?
                                                            <div className='w-full h-full bg-white/60 absolute top-0 left-0 flex justify-center items-center'>
                                                                <span className='text-red-600 uppercase'>Suspended</span>
                                                            </div> : null}
                                                    </div>
                                                    <marquee className="w-full col-span-5 border-t  border-red-500">
                                                        {element.remark}
                                                    </marquee>
                                                </div>
                                            ))) : null}
                                    </div>
                                    : null}

                            </div>
                        </section>
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
                                    <button className={`${activeTab === 1 ? "bg-[#0B7D36]" : "bg-[#0B7D36]"} px-2.5 py-[13px] text-center rounded-0`} onClick={() => this.handleTabClick(1)}>Match Bet ({oddsBetData && oddsBetData.length})</button>
                                    <button className={`${activeTab === 2 ? "bg-[#417E92]" : "bg-[#417E92]"} px-2.5 py-[13px] text-center rounded-0`} onClick={() => this.handleTabClick(2)}>Fancy Bet ({fancyBetData && fancyBetData.length})</button>
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
                                                    {oddsBetData && oddsBetData.length > 0 ? oddsBetData.map((element, index) => (
                                                        <tr className="bg-white text-black ">
                                                            <td className="">{index + 1} </td>
                                                            <td className="font-semibold whitespace-nowrap">{element.teamName}</td>
                                                            <td className='font-semibold whitespace-nowrap'>{element.oddsType}</td>
                                                            <td className="font-semibold whitespace-nowrap flex justify-start items-center">{element.amount}</td>
                                                            <td className="font-semibold whitespace-nowrap text-center">{element.odds}</td>
                                                            <td className="font-semibold whitespace-nowrap">{element.type}</td>
                                                            <td className="font-semibold whitespace-nowrap">{moment(element.createdAt).utcOffset("+05:30").format("DD-MM-YYYY HH:mm:ss")}</td>
                                                        </tr>
                                                    )) : null
                                                    }


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
                                                    {fancyBetData && fancyBetData.length > 0 ? fancyBetData.map((element, index) => (
                                                        <tr className="bg-white text-black ">
                                                            <td className="">{index + 1} </td>
                                                            <td className="font-semibold whitespace-nowrap">{element.teamName}</td>
                                                            <td className='font-semibold whitespace-nowrap'>{element.oddsType}</td>
                                                            <td className="font-semibold whitespace-nowrap flex justify-start items-center">{element.amount}</td>
                                                            <td className="font-semibold whitespace-nowrap text-center">{element.odds}</td>
                                                            <td className="font-semibold whitespace-nowrap">{element.type}</td>
                                                            <td className="font-semibold whitespace-nowrap">{moment(element.createdAt).utcOffset("+05:30").format("DD-MM-YYYY HH:mm:ss")}</td>
                                                        </tr>
                                                    )) : null
                                                    }


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
                        {/* <FancyDetailsModal fancyDetailsModal={this.state.fancyDetailsModal} handleFancyDetailsModal={this.handleFancyDetailsModal} /> */}
                    </main>
                </div >
            </>

        );
    }
}
function mapStateToProps(state) {
    const { users, sport } = state;
    console.log("usersusersusersusers", users);
    return {
        users,
        sport,
        // authentication
    };
}
export default connect(mapStateToProps)(LiveReportDetails);

