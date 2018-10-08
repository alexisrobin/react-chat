import React, { Component } from 'react';
import { messages } from './shared/messages';
import { users } from './shared/users';
import Conversation from './components/Conversation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react-chat</h1>
        <Conversation
          messages={messages}
          users={users} />
      </div>
    );
  }
}

export default App;
