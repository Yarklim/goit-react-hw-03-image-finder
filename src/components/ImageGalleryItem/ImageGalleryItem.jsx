import PropTypes from 'prop-types';
import { GalleryItem, ImageItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  images,
  showModal,
  showLargeImg,
  imagesItemRef,
  itemsAmount = 12,
}) => {
  const handle = e => {
    showModal();
    showLargeImg(e.currentTarget.dataset.large);
  };
  return (
    <>
      {images.map(({ id, largeImageURL, webformatURL, name }, idx, arr) => {
        return (
          <GalleryItem
            key={id}
            ref={arr.length - itemsAmount === idx ? imagesItemRef : null}
            onClick={handle}
            data-large={largeImageURL}
          >
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
  showModal: PropTypes.func.isRequired,
  showLargeImg: PropTypes.func.isRequired,
};
