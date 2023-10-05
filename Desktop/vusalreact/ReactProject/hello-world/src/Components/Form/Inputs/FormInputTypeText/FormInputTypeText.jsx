import { useContext, useId, useState } from "react";
import './FormInputTypeText.css';
import { FormValidationContext } from "../../Form";


function FormInputTypeText({
    labelName,
    placeholder,
    name,
    pattern
}){
    const inputId = useId();
    const [IsValid,setIsValid]=useState(true);
    const regexp = new RegExp(`^${pattern}$`,'i');

    const setInValidInputsCount = useContext(FormValidationContext);


    const validateInput = (e) =>{
        const value = e.target.value;
        const isValidNewState = regexp.test(value);
        setIsValid(isValidNewState);
        setInValidInputsCount((prevState)=>{

            if( IsValid !==isValidNewState) return prevState + (isValidNewState===true?-1:1);
            return prevState;

        })
    }

    return(
        <div>
            <label htmlFor={inputId}>{labelName}</label>
            <input id={inputId} 
            type="text" 
            onInput={validateInput}
             placeholder={placeholder}
              name={name} 
              pattern={pattern}
                data-is-valid={IsValid}/>
        </div>
    );

}


export default FormInputTypeText;