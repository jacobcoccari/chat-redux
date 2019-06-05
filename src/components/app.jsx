import React from 'react';

import MessageList from '../containers/message_list.jsx';

const App = () => {
  return (
    <div className="app">
      <div className="message-list">
        <MessageList />
      </div>
    </div>
  );
};

export default App;
