import { ImageList } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ dataGalleryArray }) => {
  return (
    <ImageList>
      <GalleryItem dataGallery={dataGalleryArray} />
    </ImageList>
  );
};
