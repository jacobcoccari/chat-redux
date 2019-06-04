import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message.jsx';

class MessageList extends Component {
  renderlist = () => {
    return(this.props.messages.map((message) => <Message author={message.author} content={message.content} createdAt={message.created_at} />));
  }

  render() {
    <ul>{this.renderlist()}</ul>    //call the renderlist function
  }
}

  function mapReduxStateToProps(initialState) {
    return {
      messages: initialState.messages
    };
  }

export default connect(mapReduxStateToProps)(MessageList);
