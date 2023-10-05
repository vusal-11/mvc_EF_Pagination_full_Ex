import './Input.css';



function Input({inputHandle}) {


    return(
        

        <input type="text" onInput={(e)=>inputHandle(e.target.value)}/>
       
    );


}
  



export default Input;