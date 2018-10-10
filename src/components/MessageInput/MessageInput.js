import React, { Component } from 'react';
import './MessageInput.scss';
import { Button, Container, Col, Row } from 'reactstrap';
import { LocalForm, Control, actions } from 'react-redux-form';

const required = val => val && val.length;

/**
 * Chat's messages input.
 */
class MessageInput extends Component {

    /**
     * Handle message's submission.
     * Reset message's form.
     */
    handleSubmit = values => {
        this.props.addMessage(values.message, this.props.currentUserId);
        this.formDispatch(actions.reset('local'));
    }

    render() {
        return (
            <Container className="p-0">
                <LocalForm
                    onSubmit={(values) => this.handleSubmit(values)}
                    getDispatch={(dispatch) => this.formDispatch = dispatch}>
                    <Row className="form-group">
                        <Col xs={10}>
                            <Control.textarea
                                model=".message"
                                className="form-control message-textarea"
                                color="secondary"
                                validators={{
                                    required
                                }} />
                        </Col>
                        <Col xs={2}>
                                <Button outline type="submit" color="secondary" className="w-100 h-100">Send</Button>
                            </Col>
                    </Row>
                </LocalForm>
            </Container>
                )
            }
        }
        
export default MessageInput;