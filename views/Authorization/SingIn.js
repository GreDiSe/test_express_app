import React from 'react';
import { Well } from 'react-bootstrap';
import FormSingIn from './FormSingIn'

const well = {
    width: '450px',
    margin: 'auto',
    borderRadius: '10px'
};

const header = {
    paddingTop: '15px',
    textAlign: 'center',
    marginBottom: '0'
};

class SingIn extends React.Component {
    render() {
        return (
            <div>
                <Well style={well}>
                    <h3 style={header}>Sing in</h3>
                    <FormSingIn/>
                </Well>
            </div>
        );
    }
}

module.exports = SingIn;
