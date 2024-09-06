import Button from "./Button"
import './Layout.css';
import FuncButton from "./FuncButton";
import { useState } from "react";
export default function Layout({func,value}){
    let[ans,setAns]= useState ("");
    let[ans2,setAns2]=useState("");
    let[bol,setBol]=useState(false);
    let[opr,setOpr]=useState("");
  
       
    let result=(res)=>{
        if(bol==true){
        setAns2((prev)=>{
       return prev+res;
   }); 
      }
        else{
            setAns((prev)=>{
                return prev+res; 
            }); 
        }
}

    let acResult = ()=>{
        setAns("");
        setAns2("");
        setOpr("");
        setBol(false);
    }
    let delResult = ()=>{
        if(ans2==""){
            if(bol==true){
                setOpr("");
                setBol(false);
                console.log(ans);
            }
            else{
                
                  setAns((prev)=>{
                    prev= String(prev);
                    return prev.slice(0,-1);
                });
            }
        }
        else{
            setAns2((prev)=>{
                return prev.slice(0,-1);
            });
        }

    }
    
func(ans+opr+ans2);

let funcResult = (res,op)=>{
    setAns(res);
    setAns2("");
    setBol(true);
    setOpr(op);
}

 let oprAns = (ans1,op,ans2)=>{
   ans1 = Number(ans1);
   ans2= Number(ans2);
    if (op=="%"){
        return ans1/100 * ans2;
    }
    else if(op=="/"){
        return ans1/ans2;
    }
    else if(op=="*"){
        return ans1*ans2;
    }
    else if(op=="+"){
        return ans1 + ans2;
    }
    else if(op=="-"){
        return ans1-ans2;
    }
else return ans1;
 }
 
 let  calc = oprAns(ans,opr,ans2);

 value(calc);

 let eqResult = ()=>{
    setAns(calc);
    setAns2("");;
    setOpr("");

 }


 

    return(
        <div   className="layout">
            <Button value={'AC'} func={acResult}  />
            <Button value={'del'} func={delResult}/>
            <FuncButton value={"%"} func={funcResult}   fans={calc}/>

            <FuncButton value={'/'} func={funcResult}  fans={calc}/>
            <Button value={1} func={result} color={"white"} />
            <Button value={2} func={result} color={"white"}/>
            <Button value={3} func={result} color={"white"} />
            <FuncButton value={'*'} func={funcResult}  fans={calc} />
            
            <Button value={4} func={result} color={"white"}/>
            <Button value={5} func={result} color={"white"}/>
            <Button value={6} func={result} color={"white"}/>
            <FuncButton value={'+'} func={funcResult}  fans={calc} />
           
            <Button value={7} func={result} color={"white"}/>
            <Button value={8} func={result} color={"white"}/>
            <Button value={9} func={result} color={"white"}/>
            <FuncButton value={'-'} func={funcResult}  fans={calc}/>
            <Button value={"00"} func={result} color={"white"}/>
       
            <Button value={0} func={result} color={"white"}/>
            <Button value={"."} func={result} color={"white"} />
            <FuncButton value={"="} func={eqResult} color ={"#FBB917"}/>
        </div>
    )
}
