import { Component, createRef } from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { getSearchedImagesApi } from '../../services/imagesApi';
import Button from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Gallery } from './ImageGallery.styled';
import { LoaderWrapper } from 'components/Loader/Loader.styled';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    largeImg: '',
    isModalOpen: false,
    error: null,
    isLoading: false,
  };

  imagesItemRef = createRef(null);

  static getDerivedStateFromProps(props, state) {
    if (state.query !== props.query) {
      return { page: 1, query: props.query };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { images, page, query } = this.state;

    if (
      (prevProps.query !== query && query !== '') ||
      (prevState.page !== page && page !== 1)
    ) {
      this.setImages();
    }

    if (prevState.images !== images) {
      this.imagesItemRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  setImages = async () => {
    const { page, query } = this.state;

    this.setState({ isLoading: true, error: null });
    try {
      const data = await getSearchedImagesApi(query, page);
      if (data.hits.length === 0) {
        throw new Error(`No images for ${query}`);
      }
      this.setState(prev => ({
        images: page === 1 ? data.hits : [...prev.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  showLargeImg = largeImg => {
    this.setState({ largeImg });
  };

  render() {
    const { images, error } = this.state;
    return (
      <>
        {error ? (
          <h2
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '32px',
              color: 'white',
            }}
          >
            {error}
          </h2>
        ) : (
          <>
            <Gallery>
              <ImageGalleryItem
                images={images}
                imagesItemRef={this.imagesItemRef}
                showLargeImg={this.showLargeImg}
                showModal={this.toggleModal}
              />
              {this.state.isModalOpen && (
                <Modal
                  closeModal={this.toggleModal}
                  largeImg={this.state.largeImg}
                ></Modal>
              )}
            </Gallery>
            {this.state.isLoading && (
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            )}
            {images.length > 0 && <Button onClick={this.changePage} />}
          </>
        )}
      </>
    );
  }
}
export default ImageGallery;
