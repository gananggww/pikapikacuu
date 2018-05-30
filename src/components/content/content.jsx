import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllChar } from '../../redux/action/index_action.jsx'


import '../../App.css';


class Content extends Component {


  componentWillMount() {
    this.props.getAllChar_dispatch()
  }

  render() {
    return (
      <div>
        <div>aku adalah content</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllChar_dispatch: () => dispatch(getAllChar()),
  }
}

const Conn = connect(null, mapDispatchToProps)(Content)
export default Conn;
