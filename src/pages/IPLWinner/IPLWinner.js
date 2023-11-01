import React, { Component } from "react";
import { connect } from 'react-redux';
import "./IPLWinner.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

class IplWinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
        }
    }

    render() {
        const { activeTab } = this.state;


        return (
            <div>
                <Sidebar />
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <main className="relative lg:flex w-full lg:space-x-2 space-x-0">
                        <section className="lg:w-[60%] w-full rounded-md">
                            <div class="flex justify-between border border-white">
                                <div className='px-2 py-2 bg-[#232323] text-white text-left w-full flex justify-start space-x-1 '> <span><AiOutlineStar className='pt-0.5' /></span></div>
                            </div>
                            <div className='divide-y divide-red-500 space-y-2'>
                                <div className="min-w-full border-[1px] border-red-500">
                                    <div className='grid grid-cols-5 lg:grid-cols-4 text-white border-b-[1px] border-red-500 divide-x-[1px] divide-red-500'>
                                        <div className="lg:col-span-2 col-span-3 flex justify-between items-center bg-[#045F5F] p-2">
                                            <span className='font-semibold'>Match Odds</span><FaInfoCircle size={18} />
                                        </div>
                                        <div className="bg-[#B5E0FF] text-center text-black font-semibold p-2">LAGAI</div>
                                        <div className="bg-[#FBB7C5] text-center text-black font-semibold p-2">KHAI</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='lg:w-[40%] w-full space-y-2'>

                            <div className='flex justify-between items-center text-white pt-2 item-center'>
                                <div className="bg-[#417E92] text-center w-full h-10 rounded-tl-md flex justify-center items-center text-md" >Bet Slip</div>
                                <div className="bg-[#232323] text-center w-full h-10 rounded-tr-md flex justify-center items-center text-md">Edit Stake</div>
                            </div>
                            <div className='flex justify-between items-center bg-[#F7C200]'>
                                <div className="text-xs flex items-center text-white">
                                    <button className="bg-[#0B7D36] px-2.5 py-[13px] text-center rounded-0" >Matched Bet (324)</button>
                                    <button className="bg-[#417E92] px-2.5 py-[13px] text-center rounded-0">Fancy Bet (424)</button>
                                    <button className="bg-[#8B0000] px-2.5 py-[13px] text-center rounded-0" >Completed Fancy</button>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <AiFillCaretDown className="text-black hover:border cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div >
        );
    };
}

function mapStateToProps(state) {
    const { users, sport } = state;
    return {
        users,
        sport,
    };
}
export default connect(mapStateToProps)(IplWinner);
