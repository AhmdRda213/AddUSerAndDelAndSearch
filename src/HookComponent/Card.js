import React from "react";
import "./Card.css"

const Card=({id, name ,age ,phone,address,type,handleFunc})=>{
    return(
        
        <div  style={{backgroundColor:type==="girl"?"#0667ac":"#ffff",color:type==="girl"?"#ffff":"black"}} className="rounded mb-2 cont">
        <div>{id}</div>
        <div>{name}</div>
        <div>{age}</div>
        <div>{phone}</div>
        <div>{address}</div>
        <div onClick={(event)=>handleFunc(event,id)} className="delet ">&times;</div>
  
        </div>);
    
}
export default Card