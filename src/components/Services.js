import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Services.css'; 

function Services() {
    return (
        <Container className="services-container">
            <Row className="g-4">
         
                    <Card className="service-card1">
                        <Card.Body>
                            <Card.Title>Drop Packages</Card.Title>
                            <Card.Text>Convenient and safe package delivery services.</Card.Text>
                            <Button variant="primary" className="center-button">Learn More</Button>
                        </Card.Body>
                    </Card>
         
                
                    <Card className="service-card1 ">
                        <Card.Body>
                            <Card.Title>Book for a Friend</Card.Title>
                            <Card.Text>Help a friend travel with ease and convenience.</Card.Text>
                            <Button variant="primary" className="center-button">Learn More</Button>
                        </Card.Body>
                    </Card>
              

                    <Card className="service-card1 ">
                        <Card.Body>
                            <Card.Title>Schedule Book</Card.Title>
                            <Card.Text>Schedule a cab for your desired date and time with ease.</Card.Text>

                            <Button variant="primary" className="center-button">Learn More</Button>
                        </Card.Body>
                    </Card>
             

                    <Card className="service-card1 text-center">
                       
                        <Card.Body>
                            <Card.Title>Pet Delivery</Card.Title>
                            <Card.Text>Safe and comfortable rides for your pets.</Card.Text>
                            <Button variant="primary" className="center-button">Learn More</Button>
                        </Card.Body>
                    </Card>
               
            </Row>
        </Container>
    );
}

export default Services;
