import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions/index';



class ChannelList extends Component {
  renderChannel = (channel) => {
    return (
      <li key={channel}
      classname={channel === this.props.selectedChannel ? 'active' : null}
      onClick={() => this.handleClick(channel)}>
        {channel}
      </li>
      );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextprops.selectedChannel);
    }
  }

  handleClick = (channel) => {
    return this.props.selectChannel(channel);
  }

  render() {
    return <div className="channels-container">
      <ul>{this.props.channels.map(this.renderChannel)}</ul>
     </div>
  }
}

function mapReduxStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
