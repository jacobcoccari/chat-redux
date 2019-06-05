import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(<div className='message'>
      <div className='user'>
      {this.props.author}
      </div>
      <div className='content'>
      {this.props.content}
      </div>
      </div>);
    //call the renderlist function
  }
}

export default Message;
