import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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

export default connect(mapReduxStateToProps)(ChannelList);
