import React from 'react';
import Wrapper from '../Wrapper';
import { Button, ButtonToolbar, Well } from 'react-bootstrap';
import FormSingIn from './FormSingIn'


class SingIn extends React.Component {
    render() {
        return (
            <Wrapper>
                <h3 style={{textAlign: 'center'}}>Sing in</h3>
                <Well style={{width: '450px', margin: 'auto'}}>
                    <FormSingIn/>
                </Well>
            </Wrapper>
        );
    }
}

module.exports = SingIn;
