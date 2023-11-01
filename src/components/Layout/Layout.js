import React, { useState } from 'react';
import { Route, Switch, withRouter, } from "react-router-dom";
import Header from "../Header";
import AmarAkbarAnthony from "../../pages/AmarAkbarAnthony/amarakbaranthony";
import AndarBahar from "../../pages/AndarBahar/AndarBahar"
import Card32a from "../../pages/Card32a/Card32a"
import DragonTiger20 from "../../pages/DragonTiger20/DragonTiger20";
import Lucky7 from "../../pages/Luky7/Luky7";
import TeenpattiOneday from "../../pages/TeenpattiOneday/TeenpattiOneday";
import Teenpatti20 from "../../pages/TeenpattiT20/teenpattit20";
import AccountStatement from "../../pages/AccountStatement/AccountStatement";
import BetHistory from "../../pages/BetHistory/BetHistory";
import ProfitAndLoss from "../../pages/ProfitAndLoss/ProfitAndLoss";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Casino from '../../pages/Casino/casino';
import UnsatteledBet from '../../pages/UnsatteledBet/UnsatteledBet'
import changepassword from '../../pages/ChangePassword/changepassword';
import innerstatement from '../../pages/Innerstatement/innerstatement';
import MyLedger from '../../pages/MyLedger/MyLedger';
import Footer from '../../components/Footer';
import AllMarketBook from '../../pages/AllMarketBook/AllMarketBook';
import IplWinner from '../../pages/IPLWinner/IPLWinner';
import LiveBetHistory from '../../pages/LiveBetHistory/LiveBetHistory';
import MyCommission from '../../pages/MyCommission/MyCommission';
import Profile from '../../pages/Profile/Profile';
import TotalLedger from '../../pages/TotalLegder/TotalLegder';
import ViewMatch from '../../pages/ViewMatch/ViewMatch';
import Balance from '../../pages/Balance/Balance';


function Layout(props) {
  const [open, setOpen] = useState(false);

  const [openMobile, setOpenMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="overflow-hidden h-screen"  >
      <div className="overflow-hidden">
        <Header history={props.history}
          setOpen={setOpen} open={open}
          setOpenMobile={setOpenMobile}
          openMobile={openMobile}
          openModal={openModal} setOpenModal={setOpenModal}
        />
        <div className="flex h-screen overflow-hidden ">
          <div className="w-full overflow-y-auto bg-[#f3f3f4] h-[calc(100%-4rem)] pt-0.5 ">
            <Switch>
              <Route path="/app/accountstatement" component={withRouter(AccountStatement)} />
              <Route path="/app/runningmarketanalysis" component={withRouter(AllMarketBook)} />
              <Route path="/app/ViewMatchis/:marketId" component={withRouter(ViewMatch)} />
              <Route path="/app/amar-akbar-anthony" component={withRouter(AmarAkbarAnthony)} />
              <Route path="/app/andar-bahar" component={withRouter(AndarBahar)} />
              <Route path="/app/card32a" component={withRouter(Card32a)} />
              <Route path="/app/dragon-tiger20" component={withRouter(DragonTiger20)} />
              <Route path="/app/Lucky7" component={withRouter(Lucky7)} />
              <Route path="/app/teenpatti-one-day" component={withRouter(TeenpattiOneday)} />
              <Route path="/app/teenpatti-20" component={withRouter(Teenpatti20)} />
              <Route path="/app/TotalLedger" component={withRouter(TotalLedger)} />
              <Route path="/app/Profile" component={withRouter(Profile)} />
              <Route path="/app/MyCommission" component={withRouter(MyCommission)} />
              <Route path="/app/CupWinner" component={withRouter(IplWinner)} />
              <Route path="/app/LiveBetHistory" component={withRouter(LiveBetHistory)} />
              <Route path="/app/my-bets" component={withRouter(BetHistory)} />
              <Route path="/app/unsetteled-bet" component={withRouter(UnsatteledBet)} />
              <Route path="/app/profit-loss" component={withRouter(ProfitAndLoss)} />
              <Route path="/app/dashboard/:gameId?/:seriesId?" component={withRouter(Dashboard)} />
              <Route path="/app/casino" component={withRouter(Casino)} />
              <Route path="/app/changepassword" component={withRouter(changepassword)} />
              <Route path="/app/innerstatement" component={withRouter(innerstatement)} />
              <Route path="/app/my-ledger" component={withRouter(MyLedger)} />
              <Route path="/app/balance" component={withRouter(Balance)} />
            </Switch>
          </div>
        </div>
        <Footer props={props} />
      </div>

    </div>
  );
}

export default withRouter(Layout);
