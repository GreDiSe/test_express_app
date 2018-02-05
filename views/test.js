const React = require('react');
import { Button, ButtonToolbar } from 'react-bootstrap';


class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>test</h1>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" disabled>
                        Primary button
                    </Button>
                    <Button bsSize="large" disabled>
                        Button
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

module.exports = Index;
