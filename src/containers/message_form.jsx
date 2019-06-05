import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    return null;
    //enter a this.setstate method in here
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
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
