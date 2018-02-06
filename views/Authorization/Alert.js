import React from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends React.Component {
    render() {
        return (
            <Alert bsStyle={this.props.bsStyle}>
                <h4>{this.props.header}</h4>
                <p>{this.props.message}</p>
            </Alert>
        );
    }
}
export default AlertMessage;
