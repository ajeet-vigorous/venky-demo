import React from "react";

function Popup(props) {
    // const onClickMenu = (url) => {
    //     history.push(url);
    // }
    
    // let { addAppSettingModal, history } = props;
    // //console.log("userCreateModal  ",userCreateModal);

    return (props.trigger) ? (


        <div className="absolute top-4 right-0 left-0 text-gray-700 pt-1 rounded-sm transition duration-100 bg-white w-full" >
            <div className="w-full pb-2 border-b border-gray-300">
                <div className="cursor-pointer" ><span className="py-1.5 hover:bg-gray-100 px-4 block whitespace-nowrap hover:no-underline hover:text-black text-sm">Profile</span></div>
                <div className="cursor-pointer" ><span className="py-1.5 hover:bg-gray-100 px-4 block whitespace-nowrap hover:no-underline hover:text-black text-sm">Change Password</span></div>
            </div>
            <div className="py-1 cursor-pointer w-full"><span className="py-1.5 hover:bg-gray-100 px-4 block whitespace-nowrap hover:no-underline hover:text-black text-sm">Logout</span>
            </div>
            {props.children}
        </div>

    ) : "";
}
export default Popup