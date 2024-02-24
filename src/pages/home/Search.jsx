import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Search = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Job Title"
                        name="query"
                    />
                </Col>
                <Col>
                    <Form.Select
                        name="category"
                    />
                </Col>
                <Col>
                    <Button
                        type="button"
                        size="lg"
                    >Search Job</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;