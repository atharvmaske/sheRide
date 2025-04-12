import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Autocomplete from './Autocomplete';  // Import Autocomplete component
import './BookRide.css';

const BookRide = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ pickup, dropoff, date, time });
    };

    return (
        <Container className="book-ride-container">
            <Row className="justify-content-center">
                <Col xs={12} md={9}>
                    <h2 className="text-center mb-4">Book a Ride</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="pickup">
                            <Form.Label>Pickup Location</Form.Label>
                            <Autocomplete
                                query={pickup}
                                setQuery={setPickup}
                                suggestions={pickupSuggestions}
                                setSuggestions={setPickupSuggestions}
                                type="pickup"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dropoff">
                            <Form.Label>Drop-off Location</Form.Label>
                            <Autocomplete
                                query={dropoff}
                                setQuery={setDropoff}
                                suggestions={dropoffSuggestions}
                                setSuggestions={setDropoffSuggestions}
                                type="dropoff"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="book-button">
                            Book Ride
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default BookRide;
