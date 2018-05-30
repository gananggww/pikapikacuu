import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../App.css';


class Content extends Component {
  render() {
    return (
      <div>
        <div>aku adalah content</div>
      </div>
    );
  }
}


const Conn = connect(null, null)(Content)
export default Conn;
