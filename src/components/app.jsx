import React from 'react';

import MessageList from '../containers/message_list.jsx';
import ChannelList from '../containers/channel_list.jsx';

const App = () => {
  return (
    <div className="app container">
      <div className='channel-list col-lg-4'>
        <ChannelList />
      </div>
      <div className="message-list col-lg-8">
        <MessageList />
      </div>
    </div>
  );
};

export default App;
