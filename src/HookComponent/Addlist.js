import React, { useState } from "react";


const Addlist=({AddData, moClose})=>{
    const[id ,setId]=useState("");
    const[name ,setName]=useState("");
    const[age ,setAge]=useState("");
    const[phone ,setPhone]=useState("");
    const[type,setType]=useState("");
    const[address ,setAddress]=useState("");


    const handleSumbit=(e)=>{
        e.preventDefault();
        AddData({id,name, age,phone,address,type} )
      
    setId("");
    setName("");
    setAge("");
    setPhone("");
    setType("");
    setAddress("");
    moClose()

    }
    
    // const handleChange=(e)=>{
    //     const key=e.target.id;
    //     const value=e.target.value;

    // }
    return(
        <form className="d-flex flex-column" onSubmit={handleSumbit}>
        <label htmlFor="id" >Id:-</label>
        <input type="text" placeholder="Enter ID..." id="id" className="rounded" onChange={(e)=>setId(e.target.value)} value={id}></input>
        <label htmlFor="UserName" >Name:-</label>
        <input type="text" placeholder="Enter NAME..." id="Name" className="rounded" onChange={(e)=>setName(e.target.value)} value={name}></input>
        <label htmlFor="Age" >Age:-</label>
        <input type="text" placeholder="Enter AGE..." id="Age" className="rounded" onChange={(e)=>setAge(e.target.value)} value={age}></input>
        <label htmlFor="phone" >Phone:-</label>
        <input type="text" placeholder="Enter PHONE..." id="phone" className="rounded" onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
        <label htmlFor="Adreess" >Adress:-</label>
        <input type="text" placeholder="Enter ADRESS..." id="Adreess" className="rounded" onChange={(e)=>setAddress(e.target.value)} value={address}></input>
        <label htmlFor="type" >Type:-</label>
        <input type="text" placeholder="Enter TYPE..." id="Adreess" className="rounded" onChange={(e)=>setType(e.target.value)} value={type}></input>
        <div className=" d-flex justify-content-between">
        
        <button className="btn btn-primary mt-2 " >Save</button> 
        <button type = "reset"  className="btn btn-primary mt-2">Reset</button>
        </div> 
        </form>
        )
}
export default Addlist