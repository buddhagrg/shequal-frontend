import { Col, Container, Row } from "react-bootstrap";
import Search from "./Search";
//////
/////
const Hero = () => {
    return (
        <Container className="hero-container">
            <Row>
                <Col md={12}>
                    <h1>Unlock Your Potential</h1>
                    <h5>Explore Exciting Career Opportunities and Land Your Dream Job!</h5>
                </Col>
            </Row>
            <Search />
        </Container>
    )
}

export default Hero;