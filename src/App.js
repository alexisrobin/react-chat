import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './actions';
import Conversation from './components/Conversation/Conversation';

const mapStateToProps = state => {
  return {
      chat: state.chat
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMessage: (content, senderId) => dispatch(addMessage(content, senderId)),
})

class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.addMessage("salut", 1);
    }, 2000);
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
