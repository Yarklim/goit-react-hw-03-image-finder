import PropTypes from 'prop-types';
import { GalleryItem, ImageItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images, onClick, toggleModal }) => {
  const handle = e => {
    toggleModal();
    onClick(e.currentTarget.dataset.large);
  };
  return (
    <>
      {images.map(({ id, largeImageURL, webformatURL, name }) => {
        return (
          <GalleryItem key={id} onClick={handle} data-large={largeImageURL}>
            <ImageItem src={webformatURL} alt={name} />
          </GalleryItem>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  omClickImg: PropTypes.func,
  toggleModal: PropTypes.func,
};
