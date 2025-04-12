import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './DriverRegistration.css'; 
import Autocomplete from './Autocomplete';

const DriverRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        licenseNumber: '',
        vehicleType: '',
        Address: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
    };

    return (
        <div className="registration-container">
            <h2>Driver Registration</h2>
            <Form onSubmit={handleSubmit} className="registration-form">
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formLicenseNumber">
                    <Form.Label>License Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="licenseNumber"
                        placeholder="Enter your license number"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formVehicleType">
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control
                        type="text"
                        name="vehicleType"
                        placeholder="Enter your vehicle type (e.g., Car, Bike)"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="address"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="City"
                        name="City"
                        placeholder="Enter your City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button style={{marginTop:"19px"}} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default DriverRegistration;
