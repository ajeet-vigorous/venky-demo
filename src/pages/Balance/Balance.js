import React from 'react';
import { connect } from 'react-redux';
import { updateCoin } from '../../_actions';

const Balance = ({ balances, updateCoin, authentication, ...props }) => {
    const { staticCoin } = balances
    const {  userDetails } = authentication
    const { data } =  userDetails
    const {balance} =  data
   
   

    // console.log("staticCoistaticCoinstaticCoinstaticCoin1111111", user)
    // console.log("staticCoistaticCoinstaticCoinstaticCoin2222222", balances)
    const newCoinValue = 20;

    const handleUpdateCoin = () => {
        updateCoin(staticCoin + balance);
    };

    return (
        <div>
            {/* <p className='text-red-500'>{newBalance}</p> */}
            <span>current Balance Plus user data balance </span>&nbsp;&nbsp;
            <button onClick={handleUpdateCoin} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Update Coin
           
            </button>
            <br /> <br />
            <button onClick={()=>props.history.push('/app/dashboard')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> Go To Dashboard</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state,"balanceaeeeeeeeeee")
    const { balances } = state;
    const { authentication } = state;

    return {
        balances,
        authentication

    };
};

const mapDispatchToProps = {
    updateCoin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Balance);
