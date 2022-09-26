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

ImageGallery.propTypes = {
  dataGalleryArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
