import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            if (!email || !password) {
                setError("Email and Password are required!");
                return;
            }
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully');
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/user-not-found') {
                setError('No user found with this email');
            } else if (error.code === 'auth/wrong-password') {
                setError('Incorrect password');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className="mt-3">
                Don't have an account? <Link to="/Registration">Register here</Link>
            </p>
        </div>
    );
};

export default Login;
