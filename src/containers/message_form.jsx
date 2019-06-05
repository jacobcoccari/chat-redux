import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import { createMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
    //enter a this.setstate method in here
  }

  render() {
    return (<form onSubmit={this.handleSubmit} >
      <input
        ref={(input) => { this.messageBox = input; }}
        type="text"
        className="form-control"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <button type="submit"> Send </button>
      </form>);
  }
}

export default MessageForm;
