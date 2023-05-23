
import Button from "../../common/Button";
import './CalWrapper.css'


const CalWrapper = (props) => {

    const {allbtarr , operationarr} = props;

    const allbutton =  allbtarr ? allbtarr.map((btobj) => {

       return <Button key ={btobj.value}btname ={btobj.value} btfun= {btobj.btfun}></Button>}) :[] ;

       const operationbt =  operationarr ? operationarr.map((btobj) => {

         return <Button key ={btobj.value}btname ={btobj.value} btfun= {btobj.btfun}></Button> }):[] ;

   

    console.log("allbutton ", allbutton);


    return (
    
    <div className="main-cal">

<div className="bt-name">
    
   {allbutton}


   </div>

   <div className="op-name">

   {operationbt} 

   </div>
    
    </div>
    
    
    )
    
    
    
    };
    
    export default CalWrapper;