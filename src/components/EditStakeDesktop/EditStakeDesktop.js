import React, { useState, useEffect } from 'react';
import { BiMessageRoundedCheck } from "react-icons/bi";
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { betChipsData } from '../../_config/index';

export default function EditStakeDesktop(props) {
    const { handleCurrentIndex, finalMatchStack, handleClose, handleStakeInput, stakehandleClose } = props;
    const [stake, setStake] = useState(false);
    // const stakehandleClose = () => setStake(false);


    const dispatch = useDispatch();
    const [keyValues1, setKeyValues1] = useState([]);
    const [betChipsObject, setBetChipsObject] = useState({});

    useEffect(() => {
        const betChipsDataItems = JSON.parse(localStorage.getItem('betChipsData'));
        let betChips = {};

        if (betChipsDataItems != null) {
            betChips = betChipsDataItems;
        } else {
            betChips = betChipsData;
        }
        const updatedKeyValues = Object.entries(betChips).map(([key, value]) => ({
            key,
            value: parseInt(value),
        }));

        setKeyValues1(updatedKeyValues);
    }, []);

    const handleInputChange = (index, key, value) => {
        const updatedKeyValues = [...keyValues1];
        if (key !== undefined) {
            updatedKeyValues[index].key = key;
        }
        if (value !== undefined) {
            updatedKeyValues[index].value = Number(value);
        }
        setKeyValues1(updatedKeyValues);
    };

    const submitValue = () => {
        const newBetChipsObject = {};
        keyValues1.forEach(item => {
            newBetChipsObject[item.key] = item.value;
        });

        setBetChipsObject(newBetChipsObject);
        const user = JSON.parse(localStorage.getItem('spuser'));
        const Id = user?.data?.userId;
        const dataValue = {
            userId: Id,
            betChipsData: newBetChipsObject,
        };
        dispatch(userActions.userUpdate(dataValue));

        localStorage.setItem('betChipsData', JSON.stringify(newBetChipsObject));
    };

    let user = JSON.parse(localStorage.getItem('spuser'));
    console.log("userAccountDetailsItemsuserAccountDetailsItemsuserAccountDetailsItems", user.data)
    return (
        <>
            <div className='fixed w-full h-full top-0 z-40 overflow-hidden mt-0 pt-4 flex justify-center items-start overflow-y-auto bg-black/40 md:p-0 p-1'>
                <div className=" bg-white xl:w-[45rem]  md:w-[32rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2 top-2">
                    {/*modal header*/}
                    <div className="flex items-center justify-between p-6 py-2 bg-black border-b">
                        <div className="text-[16px] font-medium  text-white uppercase">Chip Setting</div>
                        <IoMdClose onClick={handleClose || stakehandleClose} size={30} className='curser text-white' />
                    </div>

                    <form autoComplete="off" className="p-4 space-y-4 capitalize ">
                        <div className="grid grid-cols-2">
                            <div className="w-full">
                                {keyValues1.map((item, index) => (
                                    <>
                                        <div className='flex justify-start items-center space-x-2'>
                                            <label className="block text-md  text-black md:text-left" for="username">Chips Name {index + 1}:</label>
                                            <div className="form-group space-y-2 ">
                                                <div className='py-1'>
                                                    <input
                                                        className='w-full border border-blue-600 p-1.5 text-xs md:text-sm font-medium text-gray-900 rounded'
                                                        key={index}
                                                        type="text"
                                                        name="buttonValue"
                                                        value={item.key}
                                                        placeholder='Button Value'
                                                        onChange={(e) => handleInputChange(index, e.target.value, undefined)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                            <div className="w-full">
                                {keyValues1.map((item, index) => (
                                    <>
                                        <div className='flex justify-start items-center'>
                                            <label className="block text-md  text-black md:text-left" for="username">Chip Value {index + 1}:</label>
                                            <div className="form-group space-y-2">
                                                <div className='py-1'>
                                                    <input
                                                        className='w-full border border-blue-600 p-1.5 text-xs md:text-sm font-medium text-gray-900 rounded'
                                                        key={index}
                                                        type="number"
                                                        name="buttonValue"
                                                        value={item.value}
                                                        placeholder='Button Value'
                                                        onChange={(e) => handleInputChange(index, undefined, e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </form>


                    <div className="flex py-3 justify-center  space-x-4">

                        <button onClick={() => submitValue() || handleClose() || stakehandleClose()}
                            className="bg-[#5CB85C] text-white transition duration-150 text-sm  px-3 py-2 rounded-[.25rem] flex items-center" type="button">
                            Update Chip Setting
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

