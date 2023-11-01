import React from 'react';
import { connect } from 'react-redux';
import { updateCoin } from '../../_actions';

const Balance = ({ balances, updateCoin, authentication, ...props }) => {
    const { staticCoin } = balances
    const { user } = authentication
    const { data } = user
    const {balance} =  data
   

    console.log("staticCoistaticCoinstaticCoinstaticCoin1111111", balance)

    const newCoinValue = 20;

    const handleUpdateCoin = () => {
        updateCoin(staticCoin + balance);
    };

    return (
        <div>
            {/* <p className='text-red-500'>{newBalance}</p> */}
            <button onClick={handleUpdateCoin} className='bg-green-200'>Update Coin</button>
            <br /> <br />
            {/* <button onClick={()=>props.history.push('/app/dashboard')} className='bg-green-200'>dashboard</button> */}
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
