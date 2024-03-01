import { useEffect, useState } from "react";
import Header from "../../components/Header"
import { api } from "../../api";
import { useParams } from "react-router-dom";
import JobDetailDisplay from "./JobDetailDisplay";
import { Container } from "react-bootstrap";

const JobDetails = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getJobDetail();
    }, []);

    const getJobDetail = async () => {
        let errorMessage = "";
        try {
            setIsLoading(true);

            const response = await api(`/${id}`, 'GET', undefined);
            const { status, message, data } = response;
            if (status !== 200) {
                errorMessage = message;
                return;
            }

            setData(data);
        } catch (error) {
            errorMessage = error.message;
        } finally {
            setIsLoading(false);
            setErrorMessage(errorMessage);
        }
    }

    let displayContent;
    if (isLoading) {
        displayContent = <>Loading data...</>;
    } else if (errorMessage) {
        displayContent = <div className="text-danger fw-bold">{errorMessage}</div>
    } else {
        displayContent = <JobDetailDisplay data={data} />
    }

    return (
        <>
            <Header />
            <Container className="mt-5">
                {displayContent}
            </Container>
        </>
    );
}

export default JobDetails;