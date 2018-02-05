import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

class FormSingIn extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {email: '', password: ''};
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
            .catch(res => console.log(res));

    };

    render() {
        return (
            <form style={{padding: '10px'}}>

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