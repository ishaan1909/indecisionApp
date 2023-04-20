import React from "react";
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClosing}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal--title">Selected option</h3>
        {props.selectedOption && <p className="modal--body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClosing}>Okay</button>
    </Modal>
);
export default OptionModal;