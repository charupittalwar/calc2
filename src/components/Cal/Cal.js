import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

import './Cal.css'

const Cal = () => {


    const [inputval1 ,setinputval1] = useState(0);
    const [operationvalue , setOperationvalue] = useState (0);
    const [currentoperation , setCurrentoperation] = useState ('');


    const allbtarr = [

    {value:0 , btfun:()=>{
        
        setinputval1(
            (prevvalue)=>{

        console.log ('prevvalue '  , prevvalue);

        const newValue = prevvalue.toString()+0;

        console.log ('newvalue' , newValue);

        return parseInt(newValue);
            })}},

    {value:1 , btfun:() =>{
     
        setinputval1(prevvalue => parseInt (prevvalue.toString()+1))

    }},
    {value:2 , btfun:()=> {
        const newValue = inputval1.toString() + 2;
        setinputval1(parseInt(newValue))}},

    {value:3 , btfun:()=> {
        const newValue = inputval1.toString() + 3;
        setinputval1(parseInt(newValue))}},
    {value:4 , btfun:()=> {
        const newValue = inputval1.toString() + 4;
        setinputval1(parseInt(newValue))}},
    {value:5 , btfun:()=> {
        const newValue = inputval1.toString() + 5
        setinputval1(parseInt(newValue))}},
    {value:6 , btfun:()=> {
        const newValue = inputval1.toString() + 6
        setinputval1(parseInt(newValue))}},
    {value:7 , btfun:()=> {
        const newValue = inputval1.toString() + 7
        setinputval1(parseInt(newValue))}},
    {value:8 , btfun:()=> {
        const newValue = inputval1.toString() + 8
        setinputval1(parseInt(newValue))}},
    {value:9 , btfun:()=> {
        const newValue = inputval1.toString() + 9
        setinputval1(parseInt(newValue))}},
    
 ]

 const operationarr = [
{
    value: '+' ,
    btfun : ()=>{

      setCurrentoperation('+');
      setOperationvalue(inputval1);
      setinputval1(0);

    },

},

{
    value: '-' ,
    btfun : ()=>{

      setCurrentoperation('-');
      setOperationvalue(inputval1);
      setinputval1(0);

    },

},

{
    value: 'X' ,
    btfun : ()=>{

      setCurrentoperation('X');
      setOperationvalue(inputval1);
      setinputval1(0);

    },

},

{
    value: '/' ,
    btfun : ()=>{

      setCurrentoperation('/');
      setOperationvalue(inputval1);
      setinputval1(0);

    },

},

{

value : '=' ,

btfun : () => {
if (currentoperation === '+'){

setinputval1 ((prevvalue) => {

return prevvalue +operationvalue 

})

} else if (currentoperation === '-'){


    setinputval1((prevvalue) =>{ 

        return operationvalue - prevvalue



    })


}else if (currentoperation === 'X') {

    setinputval1((prevvalue) =>{ 

        return prevvalue * operationvalue



    })



}else if (currentoperation === '/') {

    setinputval1((prevvalue) =>{ 

        return prevvalue / operationvalue



    })




}








}
}





    




 ]

return (
<div>
<div className="maincal">
<p>this is cal function {inputval1}</p>


<p>{operationvalue} {currentoperation}</p> </div>

<CalWrapper allbtarr ={allbtarr} operationarr = {operationarr}/>

</div>


)



}

export default Cal;