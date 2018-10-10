import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chat from '../Chat';

const MirrorChat = ({ messages, users, addMessage }) => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Chat
                        messages={messages}
                        users={users}
                        addMessage={addMessage}
                        currentUserId={1} />
                </Col>
                <Col md={6}>
                    <Chat
                        messages={messages}
                        users={users}
                        addMessage={addMessage}
                        currentUserId={2} />
                </Col>
            </Row>
        </Container>
    )
}

export default MirrorChat;