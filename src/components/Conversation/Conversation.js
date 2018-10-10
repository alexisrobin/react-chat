import React, { Component } from 'react';
import './Conversation.scss';
import { Media } from 'reactstrap';
import Message from '../Message';

// Sort array by timestamp property;
const sortByTimestamp = array => array.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

/**
 * Message's list from a user to others.
 */
class Conversation extends Component {
    
    /**
     * Scroll to conversation latest message.
     */
    scrollToLatestMessage = () => {
        this.conversationBottom.parentNode.scrollTop = this.conversationBottom.offsetTop;
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
                <Media list className="p-1">
                    {sortByTimestamp(this.props.messages).map((message) => {
                        return (
                            <Media tag="li"
                                key={message.id}
                                className={message.senderId === this.props.currentUserId ? "justify-content-end" : "justify-content-start"}>
                                <div className="p-1">
                                    <Message
                                        message={message}
                                        sender={this.props.users.filter(user => user.id === message.senderId).shift()}
                                        currentUserId={this.props.currentUserId} />
                                </div>
                            </Media>
                        )
                    })}
                </Media>
                <div ref={(el) => { this.conversationBottom = el; }}></div>
            </div>
        )
    }
}

export default Conversation;