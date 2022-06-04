import React,{useState } from "react";
import List from "./List";
import"./Add.css"
import Filter from "./Filter";
import Page from "./Page";
import Addlist from "./Addlist";

const App=()=>{
    // const inputEl=useRef(null);
    const[togle,setTogel]=useState(true)
    const[filter,setFilter]=useState("")
    const[close,setClose]=useState(false)
    const[state,setState] = useState([
        {id:1,name:"ahmed", age:20,phone:"0106604545", address:"cairo", type:"men"},
        {id:2,name:"mona", age:22,phone:"0102604545", address:"cairo",type:"girl"},
        {id:3,name:"ali", age:26,phone:"0106454545", address:"cairo", type:"men"},
        {id:6,name:"Dina", age:26,phone:"0106454545", address:"cairo",type:"girl"} 
    
    ]);
    const handleDele = (e, clickIdx)=>{
        const deleItem=state.filter(el=> el.id !== clickIdx );
        
        setState(deleItem)
    }
    

    const AddData=(data)=>{
      setState((prevState)=>setState([...prevState,data]))
    }

    const filterName=(name)=>{
        setFilter(name)
    }
    const namesHandle=()=>{
        if(filter.length!==0){
          return(state.filter((el)=>el.name.includes(filter)))  
        }
        else{  

            return state;
        }
    }
    return(
        <div className="container">
        <Page showModel={close} moClose={()=>setClose(false)}><Addlist AddData={AddData}  moClose={()=>setClose(false)}></Addlist></Page>
   <div className="d-flex mb-5 mt-5 justify-content-between">
   
   <button onClick={()=>setClose(!close)} className="btn btn-primary">ADD NEW USER</button>

   <Filter Filterion={filterName} />
   <button onClick={()=>setTogel(!togle)} className="btn btn-primary">{togle?"showTogle":"hideTogle"}</button>
   </div>
        <div className={togle?"show":"hide"}>
        <List nameList={namesHandle()} handleFunc={handleDele}></List>
        </div>
       
        </div>
    )
}
export default App