import React from "react"
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import DisplayCard from "../../components/DisplayCard";
import JobCategory from "../../components/JobCategory";
import parse from 'html-react-parser';
import { getDaysLeft, getDefaultDateFormat } from "../../util";

const JobDetailDisplay = ({ data }) => {
    const { id, title, description, companyName, category, expiresAt, createdAt } = data;

    const applyJob = () => {
        window.alert('job applied!');
    }
    const handleUpdate = () => {
        console.log('handle update clicked')
    }
    const handleDelete = () => {
        console.log('handle delete clicked')
    }

    return (
        <Row>
            <Col xs={12} md={8}>
                <DisplayCard>
                    <div className="d-flex">
                        <div>
                            <Card.Title>{title}</Card.Title>
                        </div>
                        <div className="ms-auto">
                            <Card.Text><JobCategory category={category} /></Card.Text>
                        </div>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">{companyName}</Card.Subtitle>
                    <hr />
                    <Card.Text>{parse(description)}</Card.Text>
                </DisplayCard>
            </Col>
            <Col xs={12} md={4}>
                <DisplayCard>
                    <InputGroup>
                        <Form.Label>Posted on: &nbsp;&nbsp;</Form.Label>
                        <Form.Label>{getDefaultDateFormat(createdAt)}</Form.Label>
                    </InputGroup>
                    <InputGroup>
                        <Form.Label>Apply Before: &nbsp;&nbsp;</Form.Label>
                        <Form.Label>{getDefaultDateFormat(expiresAt)} ({getDaysLeft(expiresAt)})</Form.Label>
                    </InputGroup>
                    <div className="d-grid gap-2">
                        <Button
                            type="button"
                            size="sm"
                            onClick={applyJob}
                            className="btn-default"
                        >Apply Job</Button>
                        <Button
                            variant="secondary"
                            type="button"
                            size="sm"
                            onClick={handleUpdate}
                        >Update Job</Button>
                        <Button
                            variant="danger"
                            type="button"
                            size="sm"
                            onClick={handleDelete}
                        >Delete Job</Button>
                    </div>
                </DisplayCard>
            </Col>
        </Row>
    )
}

export default JobDetailDisplay;