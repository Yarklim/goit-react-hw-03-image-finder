import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={this.state.query} />
      </Container>
    );
  }
}
