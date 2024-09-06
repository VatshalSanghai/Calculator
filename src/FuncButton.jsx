
import "./Button.css";
export default function FuncButton({value,func, fans,color}){
    
    let check = ()=>{
        func(fans,value); 
    }
    


    if(fans=="0" || fans == "Infinity" ){
        return(
            <button style={{backgroundColor:color}} className="button">
                {value}
            </button>
     );

    }
    else{
        return(
            <button style={{backgroundColor:color}} onClick={check} className="button">
                {value}
            </button>
     );

    }
}