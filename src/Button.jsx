
import "./Button.css";
export default function Button({value,func,color}){
    let check = (event)=>{
       func(event.target.innerHTML);
    }

return(
       <button  style={{backgroundColor:color}} onClick={check} className="button">
           {value}      
       </button>

)
}