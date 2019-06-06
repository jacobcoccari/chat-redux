import React from 'react';

import MessageList from '../containers/message_list.jsx';
import ChannelList from '../containers/channel_list.jsx';
import MessageForm from '../containers/message_form.jsx';

const App = (props) => {
  return (
    <div className="app container">
      <div className='channel-list col-lg-4'>
        <ChannelList  channelFromParams={props.match.params.channel} />
      </div>
      <div className="message-list col-lg-8">
        <MessageList  channelFromParams={props.match.params.channel} />
        <MessageForm channelFromParams={props.match.params.channel} />
      </div>
    </div>
  );
};

export default App;
