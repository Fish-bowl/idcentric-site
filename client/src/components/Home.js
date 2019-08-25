import React, { Component } from 'react';
import Footer from './Footer'
import { Header, Container, Card, Segment } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>IDCENTRIC</Header>
        <Segment inverted> test </Segment>
        <Segment inverted> test </Segment>
        <Segment inverted> test </Segment>
        <Segment inverted> test </Segment>
        <Segment inverted> test </Segment>
        <Footer/>
      </Container>
    );
  }
}

const styles = {

}

export default Home;
