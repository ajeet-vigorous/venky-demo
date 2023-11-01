import React from "react";
import "./Sidebar.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";


const Sidebar = (props) => {
  // console.log("handleResponseGamehandleResponseGamehandleResponseGame", props);

  const handleResponseGame = (data) => {
    props.props.history.push('/app/ViewMatchis/' + data.marketId)
  }
  let MatchList = JSON.parse(localStorage.getItem('MatchList'));
  console.log("MatchListMatchListMatchList", MatchList);

  return (
    <div className="left-side-bar">
      <div className="sport-left">Sports</div>
      <div className="play-left">In-play</div>

      <div class="cricket-left" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Cricket
        <span><AiFillCaretDown /></span>
      </div>
      {MatchList && MatchList.length > 0 && MatchList.filter((element) => (element.sportId === "4")).length > 0 ? MatchList.map((element, index) => (
        <div class="collapse" id="collapseExample">
          <ul>
            <li className="d-flex " onClick={() => handleResponseGame(element)}> <RiArrowRightDoubleLine className="" size={18} />{element.matchName}</li>
          </ul>
        </div>)) : null}
      <div class="cricket-left" data-bs-toggle="collapse" href="#collapseExampleTennis" role="button" aria-expanded="false" aria-controls="collapseExampleTennis">
        Tennis
        <span><AiFillCaretDown /></span>
      </div>
      <div class="collapse" id="collapseExampleTennis">
        {MatchList && MatchList.length > 0 && MatchList.filter((element) => (element.sportId === "2")).length > 0 ? MatchList.map((element, index) => (
          <ul>
            <li className="d-flex "> <RiArrowRightDoubleLine className="" size={18} />{element.matchName}</li>
          </ul>
        )) : <ul>
          <li className="d-flex "> <RiArrowRightDoubleLine className="" size={18} />No Data Found</li>
        </ul>}
      </div>

      <div class="cricket-left" data-bs-toggle="collapse" href="#collapseExampleTennis" role="button" aria-expanded="false" aria-controls="collapseExampleTennis">
        Soccer
        <span><AiFillCaretDown /></span>
      </div>
      {MatchList && MatchList.length > 0 && MatchList.filter((element) => (element.sportId === "1")).length > 0 ? MatchList.map((element, index) => (
        <div class="collapse" id="collapseExampleTennis">
          <ul>
            <li className="d-flex "> <RiArrowRightDoubleLine className="" size={18} />{element.matchName}</li>
          </ul>
        </div>)) : null}
    </div>
  );
};

export default Sidebar;
