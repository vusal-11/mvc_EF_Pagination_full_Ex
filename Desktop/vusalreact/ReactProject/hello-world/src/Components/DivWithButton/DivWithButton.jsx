import { useContext } from 'react';
import './DivWithButton.css';
import { ThemeContext, ThemeToggleContext } from '../../App';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';



function DivWithButton() {

    const arr = useContext(ThemeContext);
    // const toggleTheme = useContext(ThemeToggleContext);

    // const arr = useContext(ThemeContext);



    return(

        <div>
           {/* <Button clickHandler={()=>toggleTheme({type:'toggleTheme'})}>Click me!</Button> */}

           <Button clickHandler={()=>arr[1](arr[0]==='light'?'dark':'light')}>Click me!</Button>

        </div>
    );

}
  



export default DivWithButton;