import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(<li>{this.props.content}</li>);
    //call the renderlist function
  }
}

export default Message;
