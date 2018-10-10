import React from 'react';
import Conversation from '../Conversation';

const Chat = ({messages, users, currentUserId}) => {
    return (
        <Conversation 
            messages={messages}
            users={users}
            currentUserId={currentUserId}/>
    )
}

export default Chat;