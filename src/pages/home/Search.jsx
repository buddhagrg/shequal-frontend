import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { JOB_CATEGORIES } from "../../constant";

const Search = (props) => {
    const { query, category } = props.searchParams;
    const handleChange = props.handleChange;
    const searchJob = props.searchJob;

    return (
        <Container className="search-container-root">
            <Row className="search-container">
                <Col xs="12" lg="5" className="mb-1 mb-md-0">
                    <Form.Control
                        type="text"
                        placeholder="Job Title"
                        name="query"
                        value={query}
                        onChange={handleChange}
                    />
                </Col>
                <Col xs="12" lg="4" className="mb-1 mb-md-0">
                    <Form.Select
                        name="category"
                        value={category}
                        onChange={handleChange}
                    >
                        <option value="">Choose Category</option>
                        {
                            JOB_CATEGORIES.map(category => {
                                return (
                                    <option value={category.value} key={category.value}>{category.label}</option>
                                )
                            })
                        }
                    </Form.Select>
                </Col>
                <Col xs="12" lg="auto" className="mb-1 mb-md-0">
                    <Button
                        type="button"
                        size="lg"
                        className="btn-default"
                        onClick={searchJob}
                    >Search Job</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;