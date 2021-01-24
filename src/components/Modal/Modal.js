import "./Modal.css";
import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDown);
  }

  keyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  clickOnBackDrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.clickOnBackDrop}>
        <div className="Modal">
          <img src={this.props.children} alt="" />
        </div>
      </div>,
      modalRoot
    );

    // (

    // );
  }
}

export default Modal;
