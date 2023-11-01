import React from 'react';
import { connect } from 'react-redux';
import { DomainName } from '../../_config/index';
import { userActions } from '../../_actions';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiFillPlayCircle, AiOutlineStar } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import moment from 'moment'
import Sidebar from "../../components/Sidebar/Sidebar";
import SportsNavigationTab from "../../casino_components/SportsNavigationTab/SportsNavigationTab";
import RulesNotification from "../../components/RulesNotification/RulesNotification";
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import EditformModal from "../../casino_components/EditformModal/EditformModal";
import "./Dashboard.css";
import Carousel from "react-bootstrap/Carousel";
import ronaldo from "../../Assets/Images/ronaldo.jpg";
import congrats from "../../Assets/Images/congrats.jpg";
import casino from "../../Assets/Images/casino.jpg";
import livescore from "../../Assets/Images/livescore.png";
import blackcard from "../../Assets/Images/blackcard.png";
import tv from "../../Assets/Images/tv.png";
import Matchname from "../../Assets/Images/matchname.png";
import cricket from "../../Assets/Images/cricket-icon.png";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Rules from '../../components/Rules/Rules';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notification: false,
      activeTab: 1,
    }
  }

  componentDidMount() {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      this.setState({ notification: true });
      localStorage.setItem('hasSeenPopup', true);
    }

    let MatchListdata = {
      "status": "inplay",
    }
    this.props.dispatch(userActions.MatchList(MatchListdata));
    // setTimeout(this.InplayStatus, 1000);
  }
  handleResponseGame = (data, status) => {
    console.log('data::::::::::::::::::::::::::', data);
    this.props.history.push('/app/ViewMatchis/' + data.marketId)
  }

  handleCloseNotification = () => {
    this.setState({ notification: false });
    localStorage.setItem('hasSeenPopup', true);
  };
  handleTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex });
  };

  render() {
    const { activeTab, notification } = this.state;
    let { users } = this.props;
    let { FcurrentTime, eventgameItems, matchlistItems } = users;
    console.log("matchlistItemsmatchlistItemsmatchlistItemsmatchlistItems", matchlistItems)


    return (

      <>
        <div className="main-body">
          <Sidebar props={this.props} />
          <div className="slider-main-div">

            <div className="carousalalign">
        
               <Carousel fade>
                <Carousel.Item>
                  <img src={ronaldo} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={congrats} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={casino} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={livescore} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={blackcard} alt="" />
                </Carousel.Item>
              </Carousel> 
            </div>
            <div>
              <SportsNavigationTab
                activeTab={activeTab}
                handleTabClick={this.handleTabClick}
                navigation={this.navigation}
              />

              {activeTab === 1 ? (
                <div className="cricket-icon-main">
                  <div className="cricket-icon">
                    <img src={cricket} alt="" />
                    <span>Cricket</span>
                  </div>
                  {matchlistItems && matchlistItems.data && matchlistItems.data.length > 0 && matchlistItems.data.filter((element) => (element.sportId === "4")).length > 0 ? matchlistItems.data.map((element, index) => (
                    <>
                      <div className="about-matches">
                        <div className='mobileflex'>
                          <div className="match-name">
                            <img src={Matchname} alt="" className='imagesize' />
                            <div>
                              <span className='matchname' onClick={() => this.handleResponseGame(element)}>{element.matchName}</span>
                              <p className='matchdate d-flex'><BiTime className='pt-0.5' size={16} />{element && element.matchDate ? element.matchDate : "--"}<AiOutlineStar className='pt-0.5' size={16} /></p>
                            </div>
                          </div>
                          <div>
                            <img src={tv} alt="" style={{ width: "30px" }} />
                          </div>
                        </div>
                        <div className="back-cell">
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>
                            <FaGreaterThan />
                          </span>
                        </div>
                      </div>
                    </>)) : null}
                </div>) : null}
              {activeTab === 2 ? (
                <div className="cricket-icon-main">
                  <div className="cricket-icon">
                    <img src="/image/soccer.svg" alt="" />
                    <span>Soccer</span>
                  </div>
                  {matchlistItems && matchlistItems.data && matchlistItems.data.length > 0 && matchlistItems.data.filter((element) => (element.sportId === "2")).length > 0 ? matchlistItems.data.map((element, index) => (
                    <>
                      <div className="about-matches">
                        <div className="match-name d-flex">
                          <img src={Matchname} alt="" />
                          <div>
                            <span onClick={() => this.handleResponseGame(element)}>{element.matchName}</span>
                            <p>{element && element.matchDate ? element.matchDate : "--"}</p>
                          </div>
                        </div>
                        <div>
                          <img src={tv} alt="" style={{ width: "30px" }} />
                        </div>
                        <div className="back-cell">
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>
                            <FaGreaterThan />
                          </span>
                        </div>
                      </div>
                    </>)) : null}
                </div>) : null}
              {activeTab === 3 ? (
                <div className="cricket-icon-main">
                  <div className="cricket-icon">
                    <img src="/image/tennis.png" alt="" />
                    <span>Tennis</span>
                  </div>
                  {matchlistItems && matchlistItems.data && matchlistItems.data.length > 0 && matchlistItems.data.filter((element) => (element.sportId === "1")).length > 0 ? matchlistItems.data.map((element, index) => (
                    <>
                      <div className="about-matches">
                        <div className="match-name d-flex">
                          <img src={Matchname} alt="" />
                          <div>
                            <span onClick={() => this.handleResponseGame(element)}>{element.matchName}</span>
                            <p>{element && element.matchDate ? element.matchDate : "--"}</p>
                          </div>
                        </div>
                        <div>
                          <img src={tv} alt="" style={{ width: "30px" }} />
                        </div>
                        <div className="back-cell">
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>{Math.floor(Math.random() * 100)}</span>
                          <span>
                            <FaGreaterThan />
                          </span>
                        </div>
                      </div>
                    </>)) : null}
                </div>) : null}
            </div>
          </div>
          <div className="rightbar-main m-hide">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Mini Games</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        {notification &&
          <Rules
            handleCloseNotification={this.handleCloseNotification}
            DomainName={DomainName}
          />}

      </>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(Dashboard);
