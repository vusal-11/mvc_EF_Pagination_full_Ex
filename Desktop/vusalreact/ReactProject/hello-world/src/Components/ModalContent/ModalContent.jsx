


function ModalContent({ onClose }) {
    return (

       <div className="modal-wrapper">
            <div className="modal">
                <div>I'm a modal dialog</div>
                <button onClick={onClose}>Close</button>
            </div>

       </div> 

    );
  }


  export default ModalContent;