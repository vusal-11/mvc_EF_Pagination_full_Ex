import { useEffect, useRef, useState } from 'react';
import './App.css';
import InputTypeText from './Components/Inputs/InputTypeText/InputTypeText';
import NoPortalExample from './Components/NoPortalExample/NoPortalExample';
import PortalExample from './Components/PortalExample/PortalExample';

function App() {

   const input = useRef(null);
   const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('Something is changed');

    })


    return (
        <>
        {/* <input type="text" ref={input}/> */}
        <ThemeContext.Provider value={{
            count:count,
            setCount:setCount
        }}>
            <InputTypeText ref={input}/>
        </ThemeContext.Provider>

        <button onClick={()=> console.log(input.current.value)}>Log input value</button>


        
        </>
    );
}
  
export default App;
