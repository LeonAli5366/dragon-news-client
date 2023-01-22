import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';

const Register = () => {
    const { signUp, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false)
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                handleUpdateProfile(name, photo)
                hadleEmailVerification()
                toast.success('Please verify your email address in your Email')
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            })
    }
    const hadleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))

    }
    const handleUpdateProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(() => { })
    }
    const handleCheck = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your username</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter username" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Photo URL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Enter Photo Url" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleCheck}
                    label={<>accept <Link to='/terms'>terms and condition</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;