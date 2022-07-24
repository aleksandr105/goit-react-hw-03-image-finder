import { ImageList } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ dataGalleryArray }) => {
  return (
    <ImageList>
      <GalleryItem dataGallery={dataGalleryArray} />
    </ImageList>
  );
};
