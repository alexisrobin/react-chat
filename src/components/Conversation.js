import React from 'react';
import './Conversation.scss';
import { Media } from 'reactstrap';
import Message from './Message';


const Conversation = ({ messages, users }) => {
    const currentUser = 1;
    // Sorting messages by timestamp
    messages = messages.sort(function(a,b){
        return new Date(a.timestamp) - new Date(b.timestamp);
    });
    return (
        <div className="conversation">
            <Media list className="p-0">
                {messages.map(message => {
                    return (
                        <Media tag="li"
                            key={message.id}
                            className={message.senderId === currentUser ? "justify-content-end" : "justify-content-start"}>
                            <div>
                                <Message
                                    message={message}
                                    senderName={users.filter(user => user.id === message.senderId).map(user => user.name)} />
                            </div>
                        </Media>
                    )
                })}
            </Media>
        </div>
    )
}

export default Conversation;