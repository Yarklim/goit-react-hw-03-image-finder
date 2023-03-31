import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalForEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalForEsc);
  }

  closeModalForEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModal = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImg } = this.props;
    return createPortal(
      <Backdrop onClick={this.closeModal}>
        <ModalContent closeModal={this.props.closeModal}>
          <ModalImage src={largeImg} alt="img" onClick={this.closeModal} />
        </ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
