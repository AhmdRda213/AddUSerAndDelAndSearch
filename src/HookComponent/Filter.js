import React from "react";

const Filter=({Filterion})=>{
   const handlerFilter=(e)=>{
    Filterion(e.target.value)

   }
   
    return (
        <div>
        <input type="text" placeholder="SEARCH NAME"  onChange={handlerFilter} className="btn"></input>

        </div>
    )
}
export default Filter