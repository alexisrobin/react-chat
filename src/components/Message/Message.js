import React from 'react';
import './Message.scss';
import { Container, Row, Col } from 'reactstrap';
import { FadeTransform, } from 'react-animation-components';


const convertDateFromISOStringToReadableString = ISOString =>
    new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(ISOString)));

/**
 * Basic chat's message adapting it's view depending of its nature (sent, received).
 */
const Message = ({ message, sender, currentUserId }) => {
    if (!message) {
        return (
            <div className="message-unreadable">
                Unreadable message
            </div>
        );
    }
    else
        return (
            <FadeTransform
                in
                transformProps={
                    sender.id === currentUserId ?
                        {
                            enterTransform: 'translateX(0px)',
                            exitTransform: 'translateX(-100px)'
                        } :
                        {
                            enterTransform: 'translateX(0px)',
                            exitTransform: 'translateX(100px)'
                        }
                }>
                <Container className={sender.id === currentUserId ? "message-sent" : "message-received"}>
                    <Row className="message-content rounded p-2">
                        {message.content}
                    </Row>
                    <Row className="message-timestamp">
                        <Col>
                            sent by {sender.name} - {convertDateFromISOStringToReadableString(message.timestamp)}
                        </Col>
                    </Row>
                </Container>
            </FadeTransform>
        );
}

export default Message;
export { convertDateFromISOStringToReadableString };