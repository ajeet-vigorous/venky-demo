import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";

// import sport from "."

function Sport(props) {

  let { dataList, handlePageClick, totalPages, handleShowEnties, noOfRecords, betType, optionRadioName, handleRadio, handleBetType } = props;

  const [currentCount, setCurrentCount] = useState(false);
  const custom = "flex items-center  text-white space-x-4 text-slate-400 text-[.8125rem]";
  const active = "bg-[#23292E] rounded-full w-8 h-8 flex items-center justify-center text-[.8125rem] text-white ";

  console.log("MODAL____currentBetsItems::", dataList);

  return (
    <div className=' bg-white xl:p-[1.25rem] p-[0.5rem] rounded-[.25rem] border-t border-gray-300'>
      <div className='w-full bg-white   lg:flex justify-between md:space-y-0 space-y-4 pb-4'>
        <div className='md:flex md:space-x-6 md:space-y-0 space-y-4 '>
          <div className="flex  space-x-10 ">
            <div className='flex space-x-4 items-center xl:text-sm text-xs'>
              <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input name="rone" type='radio' checked={optionRadioName && optionRadioName === "MATCHED" ? true : false} onClick={() => handleRadio("MATCHED")} /><span>Matched</span></label>
              <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input name="rone" type='radio' checked={optionRadioName && optionRadioName === "DELETED" ? true : false} onClick={() => handleRadio("DELETED")} zoom={1} /><span>Deleted</span></label>
            </div>

            <div className='flex space-x-4 items-center xl:text-sm text-xs'>
              <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input name="rtwo" type='radio' checked={betType && betType === 1 ? true : false} onClick={() => handleBetType(1)} /><span>All</span></label>
              <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input name="rtwo" type='radio' checked={betType && betType === 2 ? true : false} onClick={() => handleBetType(2)} /><span>Back</span></label>
              <label className=' font-medium text-slate-600 cursor-pointer flex space-x-2 '><input name="rtwo" type='radio' checked={betType && betType === 3 ? true : false} onClick={() => handleBetType(3)} /><span>Lay</span></label>
            </div>
          </div>


          <div className='flex items-stretch  space-x-4'>
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
            <p className='w-8 '>{noOfRecords}</p>
            <img src='/images/dropshort.svg' alt="sort" className='w-[0.62rem] h-[1rem] p-[1px] ml-[5px]' />

            <div className={currentCount === 1 ? 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px]  ' : 'bg-white border border-gray-500 absolute top-[1.7rem] right-0 w-full space-y-[2px] hidden'}>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => handleShowEnties(25)} >25</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => handleShowEnties(50)} >50</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => handleShowEnties(100)} >100</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => handleShowEnties(125)} >125</span>
              <span className='hover:bg-blue-500 w-full flex px-2 hover:text-white' onClick={() => handleShowEnties(150)} >150</span>
            </div>
          </button>
          <span>entries</span>
        </div>
        <input className='border border-[#ced4da] px-[8px] py-[4px] rounded-[.2rem] md:w-52 w-full focus:outline-none text-[.7109375rem] text-[#495057] placeholder:text-gray-500 ' placeholder='Serach...' />
      </div>

      <div className="overflow-hidden ">
        <div className="max-w-full overflow-auto ">
          <div className="inline-block min-w-full ">
            <div className="overflow-hidden w-full ">

              <table className="min-w-full capitalize border border-collapse ">
                <thead className="">
                  <tr className="text-left text-[12px]  text-gray-600 bg-white border-b border-t">
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize">
                      <div className='flex justify-between items-center'>
                        <p> event Type</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">
                      <div className='flex justify-between items-center'>
                        <p> event Name</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize">
                      <div className='flex justify-between items-center'>
                        <p> username</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left  ">
                      <div className='flex justify-between items-center'>
                        <p> nation</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-right ">
                      <div className='flex justify-end items-center'>
                        <p>price</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-right">
                      <div className='flex justify-end items-center'>
                        <p>Amount</p>
                        <img src='/images/download.svg' alt="sort" className='w-[0.65rem] h-[1rem] p-[1px] ml-[5px]' />
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">marketname</th>
                    <th scope="col" className="whitespace-nowrap border-r px-[6px] py-[4px] font-[600] capitalize text-left">Action</th>
                  </tr>

                </thead>
                <tbody className='divide-y border-b'>

                  {
                    dataList && dataList.length > 0 ?
                      dataList.map((element, index) => (
                        <React.Fragment key={index}>

                          <tr className="text-left text-[12px]  text-gray-600 bg-white border-b border-t odd:bg-sky-100 even:bg-pink-200/80">

                            {
                              element && element.eventType && element.eventType === "4" ?
                                <>
                                  <td className="p-4 py-3 whitespace-nowrap border-r border-white">Cricket</td>
                                </> : null
                            }

                            {
                              element && element.eventType && element.eventType === "1" ?
                                <>
                                  <td className="p-4 py-3 whitespace-nowrap border-r border-white">Soccer</td>
                                </> : null
                            }

                            {
                              element && element.eventType && element.eventType === "2" ?
                                <>
                                  <td className="p-4 py-3 whitespace-nowrap border-r border-white">Tenis</td>
                                </> : null
                            }

                            <td className="p-4 py-3 whitespace-nowrap border-r border-white">{element && element.eventNamem ? element.eventNamem : "-"}</td>
                            <td className="p-4 py-3 whitespace-nowrap border-r border-white">{element && element.username ? element.username : "-"}</td>
                            <td className="p-4 py-3 whitespace-nowrap border-r border-white">{element && element.nation ? element.nation : "-"}</td>
                            <td className="p-4 py-3 whitespace-nowrap border-r border-white">{element && element.rate ? element.rate : "-"}</td>
                            <td className="p-4 py-3 whitespace-nowrap border-r border-white">{element && element.amount ? element.amount : "-"}</td>
                            <td className="p-4 py-3 whitespace-nowrap border-r border-white">{element && element.marketname ? element.marketname : "-"}</td>
                            <td className="px-2 whitespace-nowrap">
                              <div className='flex items-center justify-left p-1 '>

                                <div className='flex rounded overflow-hidden'>
                                  <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      )) :
                      <tr className="text-gray-800 text-sm bg-white hover:bg-gray-100 transition duration-150 cursor-pointer">
                        <td colSpan={10} className="p-4 py-2 whitespace-nowrap text-center"> There are no records to show</td>
                      </tr>
                  }



                </tbody>
              </table>




            </div>
          </div>
        </div>

        {
          isMobile ?
            <nav className="relative z-0 flex justify-end mt-5 w-76">
              {
                totalPages && totalPages > 1 ?
                  <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={'active'}
                  />
                  : null}
            </nav> :
            <nav className="relative z-0 flex justify-end mt-5 w-76">
              {
                totalPages && totalPages > 1 ?
                  <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={active}
                    className={custom}
                  />
                  : null}
            </nav>
        }

      </div>

    </div>


  );

}

function mapStateToProps(state) {
  const { users } = state;
  const { user } = state.authentication;
  return {
    users,
    user
  };
}
export default withRouter(connect(mapStateToProps)(Sport)); 
