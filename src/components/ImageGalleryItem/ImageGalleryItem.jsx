import { ImageGalleryItem, GalleryItemPhoto } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const GalleryItem = ({ dataGallery }) => {
  return dataGallery.map(({ id, webformatURL }) => (
    <ImageGalleryItem key={id}>
      <GalleryItemPhoto src={webformatURL} alt="Image" />
      {false && <Modal />}
    </ImageGalleryItem>
  ));
};
