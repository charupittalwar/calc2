import './Button.css';

const Button = (props) => {

     const btclick =()=>{

           console.log('props value ' , props)

     }


    return (
    
    <div>
    <button className='bt-cal' onClick={props.btfun}>
    
    {props.btname}

    </button>
    
    </div>
    
    
    )
    
    
    
    }
    
    export default Button;