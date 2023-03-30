import { Component } from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { getSearchedImagesApi } from '../../services/imagesApi';
import Button from 'components/Button/Button';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (state.query !== props.query) {
      return { page: 1, query: props.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (
      (prevProps.query !== query && query !== '') ||
      (prevState.page !== page && page !== 1)
    ) {
      this.setImages();
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

  render() {
    const { images, error } = this.state;
    return (
      <>
        {this.state.isLoading && <Loader />}
        {error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <Gallery>
              <ImageGalleryItem images={images} />
            </Gallery>
            {images.length > 0 && <Button onClick={this.changePage} />}
          </>
        )}
      </>
    );
  }
}
export default ImageGallery;
