import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Header from "../../components/Header"
import Hero from "./Hero"
import JobListDisplay from "./JobListDisplay"
import { api } from "../../api"

const Home = () => {
    const [searchParams, setSearchParams] = useState({
        query: "",
        category: ""
    });
    const [response, setResponse] = useState({
        errorMessage: "",
        jobList: []
    });
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchParams(searchParams => ({ ...searchParams, [name]: value }));
    }

    const searchJob = async (event) => {
        event.preventDefault();
        const { query, category } = searchParams;

        getJobList(`?query=${query}&category=${category}`, 'GET', undefined);
    }

    const getJobList = async (url, method, body) => {
        let errorMessage = "";
        let jobList = [];

        setIsLoading(true);
        try {
            const response = await api(url, method, body);
            const { status, message, data } = response;
            if (status !== 200) {
                errorMessage = message;
                return;
            }

            if (Array.isArray(data) && data.length > 0) {
                jobList = data;
            }
        } catch (error) {
            errorMessage = error.message;
        } finally {
            setIsLoading(false);
            setResponse({ errorMessage, jobList });
        }
    }

    useEffect(() => {
        getJobList('', 'GET', undefined);
    }, []);

    const { jobList, errorMessage } = response;
    let displayContent;
    if (isLoading) {
        displayContent = <>Loading data...</>;
    } else if (errorMessage) {
        displayContent = <div className="text-danger fw-bold">{errorMessage}</div>
    } else if (jobList.length <= 0) {
        displayContent = <div className="text-danger fw-bold">Records not found</div>
    } else {
        displayContent = <JobListDisplay jobList={jobList} />;
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
                        {displayContent}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;