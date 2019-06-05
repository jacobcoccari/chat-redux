import React from 'react';

import MessageList from '../containers/message_list.jsx';
import ChannelList from '../contaniers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className='channel-list'>
        <ChannelList />
      </div>
      <div className="message-list">
        <MessageList />
      </div>
    </div>
  );
};

export default App;
