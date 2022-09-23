import React from 'react';
import { Component } from 'react';
import Header from 'components/Header/Header';

export default class NotFoundPage extends Component {
  render() {
    return (
      <>
        <Header />;<h1>404 Sorry, Page Not Found</h1>
      </>
    );
  }
}
