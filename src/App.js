import React, { Component } from 'react';
import { connect } from 'react-redux';
import Conversation from './components/Conversation/Conversation';

const mapStateToProps = state => {
  return {
      chat: state.chat
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react-chat</h1>
        <Conversation
          messages={this.props.chat.messages}
          users={this.props.chat.users}
          currentUserId={1}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
