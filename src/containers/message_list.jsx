import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx';

class MessageList extends Component {
  renderlist = () => {
    return(this.props.messages.map((message) => <Message author={message.author} content={message.content} createdAt={message.created_at} />));
  }

  componentWillMount() {
    console.log(this.selectedChannel);
    fetchMessages(this.selectedChannel);
  }

  render() {
    return (<ul>{this.renderlist()}</ul> );   //call the renderlist function
  }
}

function mapReduxStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
