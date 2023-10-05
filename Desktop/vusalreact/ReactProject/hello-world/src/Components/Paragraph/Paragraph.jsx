import { useContext } from 'react';
import './Paragraph.css';
import { ThemeContext } from '../../App';



function Paragraph({text, children}) {

    const theme =useContext(ThemeContext)
    // const arr =useContext(ThemeContext)

    return(
        <p>
           {children} {text} {theme}
        </p> 
    );


}
  



export default Paragraph;