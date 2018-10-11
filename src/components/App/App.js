import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import MirrorChat from '../MirrorChat';

/**
 * Map store's state to the component props.
 */
const mapStateToProps = state => ({
  chat: state.chat
})

/**
 * Map dispatched actions to the component props.
 */
const mapDispatchToProps = dispatch => ({
  addMessage: (content, senderId) => dispatch(addMessage(content, senderId)),
})

/**
 * Global container component connected to the app's store.
 */
class App extends Component {

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
