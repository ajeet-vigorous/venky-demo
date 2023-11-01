import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import Sidebar from "../../components/Sidebar/Sidebar";

class MyLedger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOne: '',
    }
  }
  componentDidMount() {
    // let data = {
    //   "limit": 10,
    //   "pageno": 1
    // }
    // let data1 = {
    //   "limit": 1,
    //   "pageno": 1,
    //   "sport_id": 111,
    //   "series_id": 0
    // }
    // let data2 = {
    //   "limit": 10,
    //   "pageno": 1,
    //   "sport_id": this.props.match.params.sportId,
    //   "series_id": this.props.match.params.seriesId ? this.props.match.params.seriesId : 0
    // }

    // console.log('data1????', data1);

    // this.props.dispatch(userActions.game_profile(data));
    // this.props.dispatch(userActions.games_list(data));
    // this.props.dispatch(userActions.event_casino(data1));
    // this.props.dispatch(userActions.event_game(data2));


  }
  handleResponseCasino = (data) => {
    console.log('data::::::::::::::::::::::::::', data);
    if (data && data.sport_id === 1113) {
      this.props.history.push('/app/teenpatti-t20')
    } else if (data && data.sport_id === 5556) {
      this.props.history.push('/app/amar-akbar-anthony')
    }
    else if (data && data.sport_id === 5557) {
      this.props.history.push('/app/7updown')
    }
    else if (data && data.sport_id === 5559) {
      this.props.history.push('/app/dragon-tiger')
    }
  }

  handleResponseTannis = (data, status) => {
    console.log('data1111111111111111', data);
    console.log('/app/cricket-details/' + data.sport_id + "/" + data.series_id + "/" + data.match_id + "/" + data.market_id + "/" + status);
    switch (data.sport_id) {
      case "1":
        this.props.history.push('/app/soccer-details/' + data.sport_id + "/" + data.series_id + "/" + data.match_id + "/" + data.market_id)
        break;
      case "2":
        this.props.history.push('/app/tennis-details/' + data.sport_id + "/" + data.series_id + "/" + data.match_id + "/" + data.market_id)
        break;
      case "4":
        this.props.history.push('/app/cricket-details/' + data.sport_id + "/" + data.series_id + "/" + data.match_id + "/" + data.market_id)
        break;

      default:
        break;
    }

  }

  // renderSwitch(data) {
  //   switch (data) {
  //     case "1":
  //       return "Soccer";
  //     case "2":
  //       return "Tennis";
  //     case "4":
  //       return "Cricket";
  //   }
  // }

  secToTime = (startDate, endDate) => {
    let ms = endDate * 1000 - startDate * 1000;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 3600) % 24);
    return [hours, minutes, seconds].map(v => String(v).padStart(2, 0)).join(':');

  }

  render() {
    // let { users } = this.props;
    // let { eventcasinoItems, eventgameItems, FcurrentTime } = users;
    // let { InplayMatches } = eventgameItems ? eventgameItems : {};
    // let { UpCommingMatches } = eventgameItems ? eventgameItems : {};


    return (
      <div className='relative w-full h-full page_bg overflow-y-auto flex space-x-1 lg:p-1'>
        <Sidebar
          open={true}
          gameItem={this.state.gameItem}
          // setOpenMobile={setOpenMobile}
          // openMobile={openMobile}
          props={this.props}
          showSport={true}
        />
        <div className='overflow-y-auto w-full'>
          <div>
            <div className='w-full bg-[#FFFFFF] h-full border-t-[6px] border-black rounded-t-xl ' >
              <h2 className='text-sm py-2 font-medium px-4 text-[#213042]'>
                My Leadger
              </h2>
            </div>
            <table className="min-w-full capitalize border border-collapse ">
              <tr className="w-full text-gray-700 divide-x divide-gray-400 text-[0.8125rem] font-semibold bg-[#CCCCCC] text-left">
                <th className="px-[6px] py-1 whitespace-nowrap">
                  S.No.
                </th>
                <th className="px-[6px] py-1 whitespace-nowrap">
                  Description
                </th>
                <th className="px-[6px] py-1 whitespace-nowrap">
                  WON BY
                </th>
                <th className="px-[6px] py-1 whitespace-nowrap">
                  WON
                </th>
                <th className="px-[6px] py-1 whitespace-nowrap">
                  LOST
                </th>
                <th className="px-[6px] py-1 whitespace-nowrap">
                  HISAB
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(MyLedger);