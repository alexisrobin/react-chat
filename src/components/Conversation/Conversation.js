import React, { Component } from 'react';
import './Conversation.scss';
import { Media } from 'reactstrap';
import Message from '../Message/Message';

/**
 * Message's list from a user to others.
 */
class Conversation extends Component {

    constructor(props) {
        super(props);

        // Sort messages by timestamp
        this.messages = this.props.messages.sort(function (a, b) {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
    }

    /**
     * Scroll to conversation latest message.
     */
    scrollToLatestMessage = () => {
        if(this.conversationBottom)
            this.conversationBottom.scrollIntoView();
    }

    componentDidMount() {
        this.scrollToLatestMessage();
    }

    componentDidUpdate() {
        this.scrollToLatestMessage();
    }

    render() {
        return (
            <div className="conversation">
                <Media list className="p-0">
                    {this.messages.map((message) => {
                        return (
                            <Media tag="li"
                                key={message.id}
                                className={message.senderId === this.props.currentUserId ? "justify-content-end" : "justify-content-start"}>
                                <div>
                                    <Message
                                        message={message}
                                        senderName={this.props.users.filter(user => user.id === message.senderId).map(user => user.name)}
                                        bgColor={message.senderId === this.props.currentUserId ? "#18c74e" : "#dddddd"}
                                        color={message.senderId === this.props.currentUserId ? "white" : "black"}/>
                                </div>
                            </Media>
                        )
                    })}
                </Media>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.conversationBottom = el; }}>
                </div>
            </div>
        )
    }
}

export default Conversation;