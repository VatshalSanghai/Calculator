import { useState } from 'react'
import './Display.css'
import Layout from './Layout';
export default function Display(){
   
    let  [display,setDisplay]= useState("");
     let displayfunc= (result)=>{
        setDisplay(result);
    }

  
    
    let  [displayAns,setDisplayAns]= useState("");
     let displayAnsfunc= (result)=>{
        setDisplayAns(result);
    }
    
    

    return(
        <div className="display">
            <input className='displayp' type="text" readOnly  value={display}/>
            <br />

            <p className='displayAns'>
             Ans : {displayAns}
            </p>
            <Layout func={displayfunc} value={displayAnsfunc}/>

        </div>
    )
}