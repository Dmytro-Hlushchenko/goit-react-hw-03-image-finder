import { Component } from 'react';
import Modal from 'react-modal';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)';
Modal.defaultStyles.overlay.border = 'rgba(0, 0, 0, 0.8)';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

Modal.setAppElement('#root');

export class ImageModal extends Component {
  
  render() {
    const { isOpenModal, tags, largeImg, isCloseModal } = this.props;
    return (
      <>
        <Modal
          isOpen={isOpenModal}
          onRequestClose={isCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImg} alt={tags} />
        </Modal>
      </>
    );
  }
}