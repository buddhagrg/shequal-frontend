import { Card } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import DisplayCard from "../../components/DisplayCard";
import JobCategory from "../../components/JobCategory";
import { getDaysLeft } from "../../util";

const jobList = [
    {
        id: 1,
        title: "ReactJs developer",
        companyName: "IT Deurali Inc. Pvt. Ltd.",
        expiresAt: "2024-03-24T00:00:00",
        category: "PROGRAMMING"
    },
    {
        id: 2,
        title: "Java Senior developer",
        companyName: "IT Deurali Inc. Pvt. Ltd.",
        expiresAt: "2024-04-24T00:00:00",
        category: "PROGRAMMING"
    },
];

const JobListDisplay = () => {
    return jobList.map(job => {
        return (
            <DisplayCard key={job.id}>
                <div className="d-flex">
                    <div className="me-auto">
                        <Card.Title>{job.title}</Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <JobCategory category={job.category} />
                        </Card.Text>
                    </div>
                </div>
                <Card.Subtitle className="mb-2 text-muted">{job.companyName}</Card.Subtitle>
                <BsClock />
                <small className="text-muted ms-2">{getDaysLeft(job.expiresAt)}</small>
            </DisplayCard>
        )
    })
}

export default JobListDisplay;