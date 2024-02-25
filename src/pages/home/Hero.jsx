import { Col, Container, Row } from "react-bootstrap";
import Search from "./Search";

const Hero = (props) => {
    return (
        <Container fluid className="hero-container">
            <Row className="hero-text">
                <Col md={12}>
                    <h1>Unlock Your Potential</h1>
                    <h5>Explore Exciting Career Opportunities and Land Your Dream Job!</h5>
                </Col>
            </Row>
            <Search {...props} />
        </Container>
    )
}

export default Hero;