import React from 'react';
import { connect } from 'react-redux';
import Sidebar from "../../components/Sidebar/Sidebar";
import { userActions } from '../../_actions';
import "./casino.css";
import andarbahar from "../..//Assets/Images/anderbahar.jpg";
import anthony from "../../Assets/Images/anthony.jpg";
import teen from "../../Assets/Images/teen.jpg";
import teen20 from "../../Assets/Images/teen20.jpg";
import card32 from "../../Assets/Images/card32.jpg";
import lucky7 from "../../Assets/Images/lucky7.jpg";
import dt20 from "../../Assets/Images/dt20.jpg";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    let data1 = {
      "limit": 1,
      "pageno": 1,
      "sport_id": 111,
      "series_id": 0
    }
    // this.props.dispatch(userActions.event_casino(data1));
  }



  render() {

    let { users } = this.props;
    let { eventcasinoItems, } = users;

    return (
      <>
        <Sidebar />
        <div className="live-casino-nav">
          <div className="live-casino">Live Casino</div>
          <div>
            <Link to="/">
              <button className="live-casino-btn">Back</button>
            </Link>
          </div>
        </div>
        <div className="casino-game-card">
          <Link to="/app/andar-bahar">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={andarbahar} />
              <Card.Body>
                <Card.Title>Ander Bahar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/app/teenpatti-one-day">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={teen} />
              <Card.Body>
                <Card.Title>Teen Patti 1Day</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/app/teenpatti-20">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={teen20} />
              <Card.Body>
                <Card.Title>Teen Patti T20</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/app/card32a">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={card32} />
              <Card.Body>
                <Card.Title>32Card A</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/app/Lucky7">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={lucky7} />
              <Card.Body>
                <Card.Title>Lucky 7</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/app/dragon-tiger20">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={dt20} />
              <Card.Body>
                <Card.Title>Dragon Tiger T20</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/app/amar-akbar-anthony">
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={anthony} />
              <Card.Body>
                <Card.Title>Amar Akbar Anthony</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>































        {/* <div className="w-full  md:p-4 p-2">
                <div className="grid md:grid-cols-4 grid-cols-2  gap-4 w-full">
                  {
                    eventcasinoItems && eventcasinoItems && eventcasinoItems.InplayMatches && eventcasinoItems.InplayMatches.length > 0 ?
                      eventcasinoItems.InplayMatches.map((element, index) => (
                        <img key={index} src={element.image} alt={`casino ${index}`} className='w-full cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300' onClick={() => this.handleResponseCasino(element)} />
                      )) : ''
                  }
                </div>
              </div> */}

      </>


    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users
  };
}

export default connect(mapStateToProps)(Dashboard);

// export default AdminList;