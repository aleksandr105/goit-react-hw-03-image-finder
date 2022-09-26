import { ImageGalleryItem, GalleryItemPhoto } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class GalleryItem extends Component {
  state = {
    showModal: null,
  };

  openModal = e => {
    this.setState({ showModal: Number(e.target.id) });
  };

  closeModal = e => {
    const keyDown = e.code;
    if (keyDown === 'Escape') {
      this.setState({ showModal: null });
    }
  };

  render() {
    const { showModal } = this.state;

    return this.props.dataGallery.map(
      ({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem key={id} onClick={this.openModal}>
          <GalleryItemPhoto src={webformatURL} alt={tags} id={id} />
          {showModal === id && (
            <Modal showModal={this.closeModal}>
              <img src={largeImageURL} alt={tags} id={id} />
            </Modal>
          )}
        </ImageGalleryItem>
      )
    );
  }
}
