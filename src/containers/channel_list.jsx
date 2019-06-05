import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ChannelList extends Component {
  render() {
    return <h1>{this.props.channels}</h1>
  }
}

function mapReduxStateToProps(state) {
  return {
    channels: state.channels
  }
}

export default connect(mapReduxStateToProps)(ChannelList);
