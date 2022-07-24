import { ModalImg, Backdrop } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.showModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.showModal);
  }

  render() {
    return createPortal(
      <Backdrop>
        <ModalImg>{this.props.children}</ModalImg>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
