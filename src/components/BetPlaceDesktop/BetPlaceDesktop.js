import React from 'react';
import "./BetPlaceDesktop.css";
import { betChipsData } from '../../_config';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export default function BetPlaceDesktop(props) {
    const { updateStackOnclick, inputChange, decreaseCount, count, increaseCount, placeBet, handleClose, betSlipData } = props;
    const myArray = Object.values(betChipsData);
    console.log("betSlipDatabetSlipDatabetSlipDataURBET123", betSlipData);

    return (
        <div className='position'>
            <div className='borderye '>
                <div className={`${betSlipData.type === "Yes" ? "match_bg_blue_index-0" : "match_bg_pink_index-0"} p-2`}>
                    <div className="state-name">{betSlipData && betSlipData.name ? betSlipData.name : null}</div>
                    <div className="state-profit-loss">
                        <span>Yet (Bet For)</span>
                        <span>
                            <span>Profit</span>
                            <span>0</span>
                        </span>
                        <span>
                            <span>Loss</span>
                            <span>0</span>
                        </span>
                        <CountdownCircleTimer
                            isPlaying
                            duration={10}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[10, 6, 3, 0]}
                            size={50}
                        >
                            {({ remainingTime }) => remainingTime}
                        </CountdownCircleTimer>
                    </div>
                    <div className="odd-even">
                        <span>odd</span>
                        <span>Stack</span>
                    </div>
                    <div className="choice-betting">
                        <input type="text" className="odd-input" placeholder="0" value={betSlipData.odds} />
                        <input type="text" className="even-input" placeholder="0" value={betSlipData.stake} />
                    </div>
                    <div className='row'>
                        {myArray && myArray.length > 0 ? myArray.map((element, index) => (
                            <>
                                <div className="col-lg-2 col-md-2 col-4 betprice-box">
                                    <span onClick={() => updateStackOnclick(element)} key={index}>{element}</span>
                                </div>
                            </>)) : null}
                        <span className='clearbtn' onClick={() => updateStackOnclick("0")}>C</span>
                    </div>
                    <div className='spacing'>
                        <button className="clear-all-btn" onClick={() => handleClose()}>Clear All</button>
                        <button className="place-bet-btn" onClick={() => placeBet()}>Place Bet</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

