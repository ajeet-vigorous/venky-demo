import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { betChipsData } from '../../_config/index';


export default function EditformModal(props) {
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
        console.log(dataValue.betChipsData,"1111122222233333333444444444445555555555666666666677777777")
        dispatch(userActions.userUpdate(dataValue));

        localStorage.setItem('betChipsData', JSON.stringify(newBetChipsObject));
    };
    const { setEditStakeOpen } = props;
    return (
        <div className=' fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1'>
            <div className="animate__animated animate__fadeInDown animate__faster bg-[#EEEEEE] xl:w-[45rem]  md:w-[32rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
                {/*modal header*/}
                <div className="flex items-center justify-between p-6 py-2 bg-black border-b">
                    <p className="text-[16px] font-medium  text-white uppercase">Chip Setting</p>
                    <div className="rounded-full cursor-pointer modal-close ">
                        {/* <svg onClick={() => setEditformModalToFalse()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                            </path>
                        </svg> */}
                    </div>
                </div>

                <div className="p-4">
                    <form autoComplete="off" className="p-4 space-y-4 capitalize border-b border-b-gray-300 ">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-full">
                                {keyValues1.map((item, index) => (
                                    <>
                                        <label className="block text-base  text-black md:text-left" for="username">Chips Name {index + 1}:</label>

                                        <div className="form-group space-y-2">
                                            <div className='py-1'>
                                                <input
                                                    className='w-full border border-gray-400 p-1.5 focus:outline-none text-xs md:text-sm font-medium text-gray-900 rounded'
                                                    key={index}
                                                    type="text"
                                                    name="buttonValue"
                                                    value={item.key}
                                                    placeholder='Button Value'
                                                    onChange={(e) => handleInputChange(index, e.target.value, undefined)}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                            <div className="w-full">
                                {keyValues1.map((item, index) => (
                                    <>
                                        <label className="block text-base  text-black md:text-left" for="username">Chip Value {index + 1}:</label>

                                        <div className="form-group space-y-2">
                                            <div className='py-1'>
                                                <input
                                                    className='w-full border border-gray-400 p-1.5 focus:outline-none text-xs md:text-sm font-medium text-gray-900 rounded'
                                                    key={index}
                                                    type="number"
                                                    name="buttonValue"
                                                    value={item.value}
                                                    placeholder='Button Value'
                                                    onChange={(e) => handleInputChange(index, undefined, e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </form>

                    {/* btns */}
                    <div className="flex py-3 justify-end  space-x-4">
                        <button className="bg-[#F7BE27]  transition duration-150 text-sm  px-3 py-2 rounded-[.25rem] flex items-center active:ring-green-400 active:ring-4 " type="button"
                            onClick={() => setEditStakeOpen()}>Close</button>
                        <button onClick={() => submitValue()}
                            className="bg-[#F7BE27]  transition duration-150 text-sm  px-3 py-2 rounded-[.25rem] flex items-center active:ring-green-400 active:ring-4 " type="button">
                            Update Chip Setting
                        </button>
                    </div>
                </div>
                {/*Footer*/}
            </div>
        </div>

    );
}

