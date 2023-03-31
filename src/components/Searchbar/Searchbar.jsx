import { Component } from 'react';
import { Header, Form, BtnSubmit, BtnText, Input } from './Searchbar.styled';
import Icon from '../../images/glass.png';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <BtnSubmit type="submit">
            <img src={Icon} alt="search" />
            <BtnText>Search</BtnText>
          </BtnSubmit>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => this.setState({ input: e.target.value })}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
