
import Paragraph from '../Paragraph/Paragraph';
import Image from '../Image/Image';
import './Border.css';



function Border({children}) {

    return(
    <div className='border'>
        {children}
    </div>

    );

}
  



export default Border;