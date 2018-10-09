import React from 'react';
import './Message.scss';
import { Container, Row, Col } from 'reactstrap';

const Message = ({ message, senderName, bgColor, color}) => {

    const convertISOStringToReadableDateString = ISOString =>
        new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(ISOString)));

    return (
        <Container>
            <Row className="message-content rounded p-2"
                style={{
                    backgroundColor: bgColor,
                    color: color
                }}>
                {message.content}
            </Row>
            <Row className="message-timestamp">
                <Col className="text-right">
                    sent by {senderName} - {convertISOStringToReadableDateString(message.timestamp)}
                </Col>
            </Row>
        </Container>
    );
}

export default Message;