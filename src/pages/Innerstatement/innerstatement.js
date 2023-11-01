import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from "../../components/Sidebar/Sidebar";

const InnerStatement = ({ props }) => {



  // console.log('usersusersusersusersusers', users);

  return (
    <>
      <div className=' w-full min-h-screen mainclass '>
        <div className='flex space-x-1 p-1'>
          <Sidebar
            open={true}
            props={props}
            showSport={true}
          />
          <div className='w-full pl-4'>
            <div className='w-full space-y-4 bg-[#fff]'>
              <div className='w-full bg-gradient-to-r from-[#2f5b69] to-[#47889e]  h-10 text-white text-center text-lg flex justify-center items-center font-bold'>
                Match Toss Bets
              </div>
              <div className='w-full bg-gradient-to-r from-[#2f5b69] to-[#47889e]  h-10 text-white text-center text-lg flex justify-center items-center font-bold'>
                Match Winner Bets
              </div>
              <div className='w-full bg-gradient-to-r from-[#2f5b69] to-[#47889e]  h-10 text-white text-center text-lg flex justify-center items-center font-bold'>
                Fancy Bets
              </div>
            </div>
            <div className='flex justify-center items-center font-bold text-lg pt-4 bg-[#fff] text-[#008000]'>
              You Won 0/- Coins
            </div>
            <div className='grid grid-cols-2'>
              <div className='w-full bg-gradient-to-r from-[#2f5b69] to-[#47889e]  h-10 text-white text-center text-lg flex justify-center items-center font-bold'>
                Match Plus Minus
              </div>
              <div className='w-full bg-[#D8D8D8] border-t border-b border-black  h-10 text-[#5CB864] text-center text-lg flex justify-center items-center font-bold'>
                You Won 0/- Coins
              </div>
              <div className='w-full bg-[#A3E672]  h-10 text-[#333333] text-center text-lg flex justify-center items-center font-bold'>
                Fancy Plus Minus
              </div>
              <div className='w-full bg-[#ffffff] border-t border-b border-black  h-10 text-[#5CB864] text-center text-lg flex justify-center items-center font-bold'>
                You Won 0/- Coins
              </div>
              <div className='w-full bg-gradient-to-r from-[#2f5b69] to-[#47889e]  h-10 text-white text-center text-lg flex justify-center items-center font-bold'>
                Total Commission
              </div>
              <div className='w-full bg-[#D8D8D8] border-t border-b border-black  h-10 text-[#5CB864] text-center text-lg flex justify-center items-center font-bold'>
                You Won 0/- Coins
              </div>
              <div className='w-full bg-[#A3E672]  h-10 text-[#333333] text-center text-lg flex justify-center items-center font-bold'>
                Mob. App. Charges
              </div>
              <div className='w-full bg-[#ffffff] border-t border-b border-black  h-10 text-[#FF0C00] text-center text-lg flex justify-center items-center font-bold'>
                You Lost 0/- Coins
              </div>
              <div className='w-full bg-gradient-to-r from-[#2f5b69] to-[#47889e]  h-10 text-white text-center text-lg flex justify-center items-center font-bold'>
                Net Plus Minus
              </div>
              <div className='w-full bg-[#D8D8D8] border-t border-b border-black  h-10 text-[#5CB864] text-center text-lg flex justify-center items-center font-bold'>
                You Won 0/- Coins
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default withRouter(connect(mapStateToProps)(InnerStatement));