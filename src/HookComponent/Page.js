import React, { Fragment } from "react";
import ReactDOM  from "react-dom";

import "./page.css"
const BackDrop=({close})=>{
    return(
        <div className="backDrop"onClick={close}></div>

    )
}


const OverLay=({children})=>{
    return(
        <div className="overLay">
        {children}
        </div>

    )
}


const Page=({showModel,moClose,children})=>{
    return(
     showModel&&
       ( <Fragment>
        {ReactDOM.createPortal(<BackDrop close={moClose}></BackDrop>,document.getElementById("model"))}
        {ReactDOM.createPortal(<OverLay>{children}</OverLay>,document.getElementById("model"))}
        </Fragment>)
    )
}
export default Page