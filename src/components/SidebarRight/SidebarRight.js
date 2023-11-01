import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Sidebar(props) {

  return (
    <div className="overflow-hidden w-full">
      <div className="max-w-full overflow-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden w-full rounded">
            <div className="w-full capitalize  border border-collapse ">
              <div className="w-full grid grid-cols-4 text-white text-[13px] font-medium bg-[#2A2A2A] rounded-t">
                <span className="w-24 px-[6px] whitespace-nowrap hover:text-[#2A2A2A]">All Bet</span>
                <span className="w-24 px-[6px] whitespace-nowrap hover:text-[#2A2A2A]">Match Bet</span>
                <span className="w-24 px-[6px] whitespace-nowrap hover:text-[#2A2A2A]">Fancy Bet</span>
                <span className="w-24 px-[6px] whitespace-nowrap text-[#2A2A2A]">Fancy Bet</span>
                <span className="w-24 px-[6px] whitespace-nowrap pulse3">Casino Bet</span>
                <span className="w-24 px-[6px] whitespace-nowrap pulse3">Matka Bet</span>
              </div>
            </div>
            <table className="min-w-full capitalize border border-collapse ">
              <tr className="w-full text-[#3E4955] divide-x divide-gray-400 text-[0.8125rem] font-semibold bg-[#CCCCCC] text-center">
                <th className="px-[6px] py-3 whitespace-nowrap">Team</th>
                <th className="px-[6px] py-3 whitespace-nowrap">Mode</th>
                <th className="px-[6px] py-3 whitespace-nowrap">Run</th>
                <th className="px-[6px] py-3 whitespace-nowrap">Rate</th>
                <th className="px-[6px] py-3 whitespace-nowrap">Amount</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}

function mapStateToProps(state) {
  const { users } = state;
  const { user } = state.authentication;
  // console.log("mapStateToProps___________user:::", user);
  return {
    users,
    user,
  };
}
export default withRouter(connect(mapStateToProps)(Sidebar));
// export default withRouter(Sidebar);
