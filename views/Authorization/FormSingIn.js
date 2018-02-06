import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
import AlertMessage from './Alert'

class FormSingIn extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {email: '', password: '', resultAlert: null};
        this.ERROR_INPUT = 'ERROR';
        this.SUCCESS_INPUT = 'SUCCESS';
    };

    handleChangeEmail = e => {
        this.setState({ email: e.target.value });
    };

    handleChangePassword = e => {
        this.setState({ password: e.target.value });
    };

    sendUserInfo = () => {
        fetch("/api/authorization/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(res => {
                if(res.status === 200) this.setState({resultAlert: this.SUCCESS_INPUT});
                else this.setState({resultAlert: this.ERROR_INPUT});

            })
            .catch(er => console.log(er));
        this.setState({email: '', password: ''});
    };

    resultMessage = () => {
        if (this.state.resultAlert) {
            if (this.state.resultAlert === this.ERROR_INPUT)
                return (
                    <AlertMessage
                        bsStyle={'danger'}
                        header={'Unauthorized'}
                        message={'Error. Verify that the data entered is correct.'}
                    />
                );
            else if(this.state.resultAlert === this.SUCCESS_INPUT)
                return (
                    <AlertMessage
                        bsStyle={'success'}
                        header={'Success'}
                        message={'Just a second.'}
                    />
                )
        }
    };

    render() {
        return (
            <form style={{padding: '10px'}}>

                {this.resultMessage()}

                <h6 style={{margin: '5px'}}>Enter email</h6>
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="qwerty@gmail.ua"
                    onChange={this.handleChangeEmail}
                />

                <h6 style={{margin: '5px'}}>Enter password</h6>
                <FormControl
                    type="text"
                    value={this.state.password}
                    placeholder="********"
                    onChange={this.handleChangePassword}
                />

                <Button
                    style={{marginTop: '10px', width: '100px'}}
                    bsStyle="success"
                    onClick={this.sendUserInfo}
                >
                    OK
                </Button>
            </form>
        );
    }
}

export default FormSingIn;