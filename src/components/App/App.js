import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from '../Gallery/Gallery';
import * as actions from '../../store/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">Header!</header>
        <main>
          <Gallery />
        </main>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(App);
