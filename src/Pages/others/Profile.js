import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/Authprovider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    const [name, setName] = useState(user.displayName)

    const handleSubmit = event => {
        event.preventDefault();
    }
    const handleNameChanged = event => {
        setName(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>UserName</Form.Label>
                <Form.Control onChange={handleNameChanged} defaultValue={name} type="text" placeholder="UserName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control defaultValue={user?.photoURL} type="text" placeholder="PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;