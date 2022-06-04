import React from "react";
import Card from "./Card";

const List=({handleFunc,nameList})=>{
  console.log(nameList)
    const itemData=nameList.length?(nameList.map(({id,...otherProps})=>{
      return( <Card key={id} id={id}{...otherProps} handleFunc={handleFunc}/>);})
    ):(<h1>No Result USER</h1>)
    return(
        <div>
        {itemData}
        </div>
    )
}
export default List