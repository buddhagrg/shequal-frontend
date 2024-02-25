import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Header from "../../components/Header"
import Hero from "./Hero"
import JobListDisplay from "./JobListDisplay"

const Home = () => {
    const [searchParams, setSearchParams] = useState({
        query: "",
        category: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchParams(searchParams => ({ ...searchParams, [name]: value }));
    }

    const searchJob = async(event) => {
        event.preventDefault();
        const { query, category } = searchParams;
        const res = await fetch('http://localhost:8080/api/v1/jobs', {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        });
        const result = res.json();
        console.log(result);
    }

    return (
        <>
            <Header />
            <Hero
                searchParams={searchParams}
                handleChange={handleChange}
                searchJob={searchJob}
            />
            <Container className="px-xs-1 px-sm-0 mt-3">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <JobListDisplay />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;