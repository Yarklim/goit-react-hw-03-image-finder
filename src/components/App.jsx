import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = query => {
    if (query.trim() === '') {
      toast.info('Enter search value!');
      return;
    }
    this.setState({ query });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
