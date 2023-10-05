import { useContext } from 'react';
import './Div.css';
import { ThemeContext } from '../../App';
import Paragraph from '../Paragraph/Paragraph';



function Div({children}) {

    return(

        <div>
           {children} <Paragraph>Your theme is: </Paragraph>

        </div>

    );

}
  



export default Div;