import React from 'react';
// import { connect } from 'react-redux';


export default function Loader(props) {
    let { active } = props;
    return (
        <>
            {
                active ?
                    <>
                        <div className='fixed inset-0 w-full h-screen flex justify-center items-center bg-white/50 z-40'>
                            <div class="sk-fading-circle">
                                <div class="sk-circle1 sk-circle"></div>
                                <div class="sk-circle2 sk-circle"></div>
                                <div class="sk-circle3 sk-circle"></div>
                                <div class="sk-circle4 sk-circle"></div>
                                <div class="sk-circle5 sk-circle"></div>
                                <div class="sk-circle6 sk-circle"></div>
                                <div class="sk-circle7 sk-circle"></div>
                                <div class="sk-circle8 sk-circle"></div>
                                <div class="sk-circle9 sk-circle"></div>
                                <div class="sk-circle10 sk-circle"></div>
                                <div class="sk-circle11 sk-circle"></div>
                                <div class="sk-circle12 sk-circle"></div>
                            </div>
                        </div>
                    </> :
                    null
            }
        </>


    );
}








// const Loader = (props) => {

//     return (
//         <>
//             <div className='fixed inset-0 w-full h-screen flex justify-center items-center bg-white/50 z-40'>
//                 <div class="sk-fading-circle">
//                     <div class="sk-circle1 sk-circle"></div>
//                     <div class="sk-circle2 sk-circle"></div>
//                     <div class="sk-circle3 sk-circle"></div>
//                     <div class="sk-circle4 sk-circle"></div>
//                     <div class="sk-circle5 sk-circle"></div>
//                     <div class="sk-circle6 sk-circle"></div>
//                     <div class="sk-circle7 sk-circle"></div>
//                     <div class="sk-circle8 sk-circle"></div>
//                     <div class="sk-circle9 sk-circle"></div>
//                     <div class="sk-circle10 sk-circle"></div>
//                     <div class="sk-circle11 sk-circle"></div>
//                     <div class="sk-circle12 sk-circle"></div>
//                 </div>
//             </div>
//         </>

//     );

// }

// function mapStateToProps(state) {
//     const { users } = state;
//     return {
//         users
//     };
// }
// export default connect(mapStateToProps)(Loader);