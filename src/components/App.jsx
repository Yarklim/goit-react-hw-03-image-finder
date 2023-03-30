import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    showModal: false,
  };

  changeQuery = query => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.changeQuery} />        
        <ImageGallery query={this.state.query} />
        {this.state.showModal && <Modal onClose={this.toggleModal}></Modal>}
      </Container>
    );
  }
}
