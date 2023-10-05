

import { forwardRef } from 'react';
import './InputTypeText.css';

// function InputTypeText({inputHandle}){

//     return(
//         <input type="text" />
//     )

// }


// function InputTypeText(){

//     return (
//         <input type='text'/>

//     );

// }



const InputTypeText = forwardRef(function InputTypeText({inputHandle},ref){
    return (
        <input type="text" ref={ref}/>
    )
})

export default InputTypeText;