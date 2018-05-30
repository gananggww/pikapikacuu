import React, { Component } from 'react';
import '../App.css';

import Content from './content/content.jsx';
import Header from './header/header.jsx';


class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default Main;
