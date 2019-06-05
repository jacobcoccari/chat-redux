import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx';
import MessageForm from './message_form.jsx';


class MessageList extends Component {
  renderlist = () => {
    return(this.props.messages.map((message) => <Message author={message.author} content={message.content} createdAt={message.created_at} />));
  }

  //this fetches the messages and resubmits the request ever 5000? not sure the unit.

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    console.log(this.props.selectedChannel);
    return this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (<div><div><ul>{this.renderlist()}</ul></div>
      <div><MessageForm /></div> </div>
    );   //call the renderlist function
  }
}

function mapReduxStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
