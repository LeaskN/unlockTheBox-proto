import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

class Teacher extends React.Component {
    render() {
        return <p>Hello, Teacher</p>
    }
}

export default withAuthenticator(Teacher);