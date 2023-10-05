import { createContext, useEffect, useState } from 'react';
import './Form.css'
import FormInputTypeText from './Inputs/FormInputTypeText/FormInputTypeText';


export const FormValidationContext= createContext(null);


function Form({inputsData}){
    const handleSubmit=(e) =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        console.log([...formData]);
    }


    const [invalidInputsCount,setInValidInputsCount]=useState(0);


    useEffect(()=>{
        console.log(invalidInputsCount===0?'Form is valid':'Form is invalid');
    },[invalidInputsCount]);



    return (

        <FormValidationContext.Provider value={setInValidInputsCount}>
            
        <form  onSubmit={handleSubmit}>
            <fieldset className={invalidInputsCount===0?'valid':'invalid'}>
                <legend>Full Name</legend>
                {
                    inputsData.map(inputData=>{ 
                        
                    const isDefaultTextexist = inputData.defaultText;

                    if(!isDefaultTextexist) return null;
                    
                    return <FormInputTypeText
                    labelName={inputData.label}
                    placeholder={inputData.defaultText}
                    pattern={inputData.regexp}
                    name={inputData.name}
                    />
                    })
                }

                <button disabled={invalidInputsCount===0 ? false : true}>Submit</button>
            </fieldset>
        </form>
        </FormValidationContext.Provider>

    )

}


export default Form;