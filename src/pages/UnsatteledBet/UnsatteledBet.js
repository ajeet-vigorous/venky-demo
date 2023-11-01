import React from 'react';
import { connect } from 'react-redux';
import Sidebar from "../../components/Sidebar/Sidebar";
import { betActions } from '../../_actions';
import Loader from '../../components/Loader/Loader';
import moment from 'moment';

class UnsatteledBet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      currentCount: "Sport",
      noOfRecords: 20,
      index: 0,
      betType: "c",
      optionRadioName: "MATCHED",
      endDate: moment().format('YYYY-MM-DD'),
      startDate: moment().format('YYYY-MM-DD'),
      sportsId: 0,
      limit: "",
      // sportsData: {}
    }
  }

  componentDidMount() {
    let data =
    {
      "from_date": moment(this.state.startDate).startOf('day').unix(),
      "to_date": moment(this.state.endDate).endOf('day').unix(),
      "limit": 15,
      "pageno": 1,
      "betType": "C",
      "market_id": "0",
      "match_id": 0,
      "sport_id": 0,
    }
    console.log("getBatHistorydatedateeee>>>>>>>", data);
    this.props.dispatch(betActions.betHistory(data));
  }


  getUnsattledBat = () => {
    let data =
    {
      "from_date": moment(this.state.startDate).startOf('day').unix(),
      "to_date": moment(this.state.endDate).endOf('day').unix(),
      "limit": 15,
      "pageno": 1,
      "betType": "C",
      "market_id": "0",
      "match_id": 0,
      "sport_id": this.state.sportsId,
    }

    console.log('data2data2data2data2', data);
    console.log("unsatteledBetunsatteledBet>>>>>>>", data);
    this.props.dispatch(betActions.betHistory(data));
  }

  inputChangeStartDate = (e) => {
    this.setState({ startDate: e.target.value });
  }

  inputChangeEndDate = (e) => {
    this.setState({ endDate: e.target.value });
  }

  handleChangeSelect = (event) => {
    this.setState({ sportsId: event.target.value });
  };


  inputChangeCurrentCount = (event) => {
    this.setState({ currentCount: event });
  }

  // handlePageClick = (data) => {
  //   console.log("data  ", data);
  //   this.setState({ index: data.selected });
  //   let pagination =
  //   {
  //     "index": data.selected,
  //     "noOfRecords": this.state.noOfRecords,
  //     "sportId": "",
  //     "matchId": "31819198",
  //     "userId": "4ce89c4ac"
  //   }
  //   this.props.dispatch(betActions.betHistory(pagination));
  // }


  // handleShowEnties = (data) => {
  //   console.log("entries??", data);

  //   let pagination = {
  //     "index": this.state.index,
  //     "noOfRecords": data,
  //     "sportId": "",
  //     "matchId": "31819198",
  //     "userId": "4ce89c4ac"
  //   }
  //   this.props.dispatch(betActions.betHistory(pagination));
  //   this.setState({ showEntries: data, noOfRecords: data });
  // };

  // handleBetType = (data) => {
  //   console.log("entries??", data);
  //   this.setState({ betType: data });
  // };

  // handleRadio = (data) => {
  //   console.log("entries??", data);
  //   this.setState({ optionRadioName: data });
  // };


  render() {


    let { bet } = this.props;
    let { currentBetsItems, betHistoryItems, loading } = bet;

    let { dataList } = currentBetsItems ? currentBetsItems : {}
    // console.log("RENDER____dataList::???:", dataList);
    // console.log("RENDER____betHistoryItemsbetHistoryItems???", betHistoryItems);


    console.log("RENDER___this.state.startDate???", this.state.startDate);
    console.log("RENDER____this.state.endDate???", this.state.endDate);


    // const custom = "flex items-center  text-white space-x-4 text-slate-400 text-[.8125rem]";
    // const active = "bg-[#23292E] rounded-full w-8 h-8 flex items-center justify-center text-[.8125rem] text-white ";


    return (

      <>
        <div>
          <Loader
            active={loading}
          />
        </div>
        <div className='bg-white w-full min-h-screen flex'>
          <div>
            <Sidebar
              open={true}
              // setOpen={setOpen}
              // setOpenMobile={setOpenMobile}
              // openMobile={openMobile}
              showSport={true}
              props={this.props}
            />
          </div>
          <div className='w-full border border-gray-600 px-0.5 space-y-4'>

            <div className='flex justify-between bg-[#1C77B7] p-1.5' >
              <h2 className='text-[0.8125rem] font-medium text-white'>Unsettled Bet</h2>
            </div>
            <div className='flex space-x-4'>
              <input type="date" className="px-3 py-1.5 text-[0.8125rem] bg-transparent border border-gray-900 rounded md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500 "
                name="Date"
                dateFormat="yyyy-mm-dd"
                id="datepicker" required
                value={this.state.startDate} onChange={this.inputChangeStartDate} />

              <input type="date" className="px-3 py-1.5 text-[0.8125rem] bg-transparent border border-gray-900 rounded md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500 "
                name="Date"
                dateFormat="yyyy-mm-dd"
                id="datepicker" required
                value={this.state.endDate} onChange={this.inputChangeEndDate}
              />
              <select onChange={this.handleChangeSelect} name="sports_id" className='px-3 py-1.5 text-[0.8125rem] bg-transparent border border-gray-900 rounded md:w-60 w-full focus:outline-none text-[#495057] placeholder:text-gray-500 block'>
                <option value="0">All</option>
                <option value="4">Cricket</option>
                <option value="2">Tennis</option>
                <option value="1">Soccer</option>
                <option value="111">Casino</option>
              </select>
              <button onClick={() => this.getUnsattledBat()} className='py-1.5 px-4 bg-[#1B7BFF] text-white text-[0.8125rem] rounded'>Submit</button>
            </div>
            <div className="overflow-hidden ">
              <div className="max-w-full overflow-auto ">
                <div className="inline-block min-w-full ">
                  <div className="overflow-hidden w-full ">
                    <table className="min-w-full capitalize border-2 border-collapse ">
                      <tr className=" text-white text-[0.8125rem] text-left font-semibold bg-[#265467] border-b-2">
                        <th className="px-[6px] py-1 whitespace-nowrap">Date</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Competition</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Event</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Market</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Runner</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Side</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Odds</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">Amount</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">PP</th>
                        <th className="px-[6px] py-1 whitespace-nowrap">PL</th>
                      </tr>
                      {
                        betHistoryItems && betHistoryItems.length > 0 ?
                          betHistoryItems.map((element, index) => (
                            <React.Fragment >
                              <tr className=" text-black text-[0.8125rem] text-left font-semibold border-b-2 ">

                                <td className="px-[6px] py-1 whitespace-nowrap">{moment(parseInt(element.Placed) * 1000).utcOffset("+05:30").format("DD MMM, YYYY HH:mm A")}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.seriesName ? element.seriesName : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.matchName ? element.matchName : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.marketName ? element.marketName : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.SelectionName ? element.SelectionName : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.Type ? element.Type : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.Odds ? element.Odds : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap">{element && element.Stack ? element.Stack : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap text-green-600">{element && element.PotentialProfit ? element.PotentialProfit : "-"}</td>
                                <td className="px-[6px] py-1 whitespace-nowrap text-red-600">{element && element.Liability ? element.Liability : "-"}</td>
                                {/* {element.PotentialProfit > 0 ?
                                  <>
                                    <td className="px-[6px] py-1 whitespace-nowrap text-green-600">{element && element.PotentialProfit ? element.PotentialProfit : "-"}</td>
                                    <td className="px-[6px] py-1 whitespace-nowrap text-center">WON</td>
                                  </>
                                  :
                                  <>
                                    <td className="px-[6px] py-1 whitespace-nowrap text-red-600">{element && element.PotentialProfit ? element.PotentialProfit : "-"}</td>
                                    <td className="px-[6px] py-1 whitespace-nowrap text-center">LOSS</td>
                                  </>
                                } */}
                              </tr>
                            </React.Fragment>
                          ))
                          :
                          <tr className="py-1 px-[6px] text-black text-sm text-center whitespace-nowrap">
                            <td>There are no records to show</td>
                          </tr>
                      }
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users, bet } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users,
    bet
  };
}

export default connect(mapStateToProps)(UnsatteledBet);

