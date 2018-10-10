import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './actions';
import MirrorChat from './components/MirrorChat';

const mapStateToProps = state => ({
  chat: state.chat
})

const mapDispatchToProps = dispatch => ({
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
        <MirrorChat
          messages={this.props.chat.messages}
          users={this.props.chat.users}
          addMessage={this.props.addMessage}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
