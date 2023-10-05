import './Button.css';



function Button({clickHandler,children}) {


    return(
        <button onClick={clickHandler}>{children}</button>
    );


}
  



export default Button;