import React from 'react';
import { Container, Row } from 'reactstrap';
import './Chat.scss';
import Conversation from '../Conversation';
import MessageInput from '../MessageInput';

const Chat = ({ messages, users, currentUserId, addMessage }) => {
    return (
        <Container>
            <Row className="chat-header p-1">
                {users.filter(user => user.id === currentUserId).shift().name}
            </Row>
            <Row>
                <Conversation
                    messages={messages}
                    users={users}
                    currentUserId={currentUserId} />
            </Row>
            <Row>
                <MessageInput
                    addMessage={addMessage}
                    currentUserId={currentUserId} />
            </Row>
        </Container>
    )
}

export default Chat;