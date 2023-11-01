import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
function Casino({ location, history, user }) {

  const [currentCount, setCurrentCount] = useState(false);

  return (


    <div className=' bg-white xl:p-[1.25rem] p-[0.5rem] rounded-[.25rem] border-t border-gray-300'>

      <div className='w-full bg-white  md:flex md:space-y-0 space-y-4 items-center justify-between pb-4'>
        <div className='flex items-center  space-x-10'>

          <div className='  flex space-x-4 items-center xl:text-sm text-xs'>
            <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input type='radio' /><span>All</span></label>
            <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input type='radio' /><span>Black</span></label>
            <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input type='radio' /><span>Lay</span></label>

          </div>

          <div className='flex items-stretch  space-x-6'>
            <div className='flex items-center space-x-2 text-sm'>
              <button className='p-2 px-3 bg-[#23292E] text-white rounded-md'> Load</button>
            </div>
            {/* <div className='flex space-x-2'>
              <button className='p-2.5 bg-[#34c38f] text-white rounded-md hover:bg-[#34c38f] transition duration-150 focus:ring-2 ring-green-200'><AiFillFileExcel size={18} /></button>
              <button className='p-2.5 bg-[#f46a6a] text-white rounded-md hover:bg-[#f46a6a] transition duration-150 focus:ring-2 ring-red-200'><AiFillFilePdf size={18} /></button>
            </div> */}
          </div>

        </div>
        <div>
          <div className='flex items-center  space-x-4 '>
            <div className='flex space-x-4 text-base font-medium text-gray-600'>
              <p>Total Soda: 0 </p>
              <p>Total Amount: 0 </p>
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-between items-center  text-[0.8125rem] text-gray-600 font-medium py-2 space-x-2">
        <div className='flex space-x-2 items-center'>
          <span>Show</span>
          <button onClick={() => setCurrentCount(currentCount === 1 ? 0 : 1)} className='border flex items-center py-[4px] px-[8px] text-[.7109375rem] rounded-[0.25rem] focus:ring-2 ring-[#556ee6]/30 relative  '>
            <p className='w-8 '>2500</p>
            <img src='/images/dropshort.svg' alt="sort" className='w-[0.62rem] h-[1rem] p-[1px] ml-[5px]' />

            <div className={currentCount === 1 ? 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px]  ' : 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px] hidden'}>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>25</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>50</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>100</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>125</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white'>150</span>
            </div>
          </button>
          <span>entries</span>
        </div>
        <input className='border border-[#ced4da] px-[8px] py-[4px] rounded-[.2rem] md:w-52 w-full focus:outline-none text-[.7109375rem] text-[#495057] placeholder:text-gray-500 ' placeholder='Serach...' />
      </div>

      <div className="overflow-hidden ">
        <div className="max-w-full overflow-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden w-full ">
              <table className="min-w-full capitalize border border-collapse ">
                <thead className="">
                  <tr className="text-left text-[12px]  text-gray-600 bg-white border-b border-t">
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">
                      <div className='flex justify-between items-center'>
                        <p> Event Name</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">
                      <div className='flex justify-between items-center'>
                        <p> User Name</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left  ">
                      <div className='flex justify-between items-center'>
                        <p> Nation</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left ">
                      <div className='flex justify-end items-center'>
                        <p>U Rate</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">
                      <div className='flex justify-end items-center'>
                        <p>Amount</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">Place date</th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">IP</th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">Browser</th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">Action</th>
                  </tr>
                </thead>
                <tbody className='divide-y border-b'>


                  <React.Fragment >
                    <tr className="text-[#495057] text-[12px] bg-white hover:bg-gray-100 transition duration-150 cursor-pointer">
                      <td colSpan={10} className="py-[4px] px-[6px] whitespace-nowrap text-center"> There are no records to show</td>
                    </tr>
                  </React.Fragment>

                </tbody>
              </table>




            </div>
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
    user
  };
}
export default withRouter(connect(mapStateToProps)(Casino));
// export default withRouter(Sidebar);
