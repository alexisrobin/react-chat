import React from 'react';
import { Container, Row } from 'reactstrap';
import Conversation from '../Conversation';
import MessageInput from '../MessageInput';

const Chat = ({ messages, users, currentUserId, addMessage }) => {
    return (
        <Container>
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