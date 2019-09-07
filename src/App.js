import React, { Component } from 'react';

import GlobalStyle from './components/styles/global';
import { Container, Content } from './styles';
class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Content>Hello World</Content>
      </Container>
    );
  }
}

export default App;
